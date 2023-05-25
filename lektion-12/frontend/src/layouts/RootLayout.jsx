import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const RootLayout = () => {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {

    const getToken = async () => {
      if(isAuthenticated) {
        // här är vi inlogdade - Hämta accessToken och spara i localStorage
        try {
          
          const token = await getAccessTokenSilently({
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
          })

          localStorage.setItem('accessToken', token)

        } catch (err) {
          console.log(err)
        }
      }
      else {
        // vi har loggat ut - ta bort accessToken från localStorage
        localStorage.removeItem('accessToken')
      }
    }
    getToken()

  }, [getAccessTokenSilently, isAuthenticated])





  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout