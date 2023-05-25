import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import './App.css'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Auth0ProviderWithHistory />,
      children: [
        {
          path: '/',
          element: <RootLayout />,
          children: [
            {
              index: true,
              element: <Home />
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App