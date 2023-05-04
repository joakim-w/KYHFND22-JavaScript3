import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/Create'

const App = () => {

  const [user, setUser] = useState(null)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout user={user} setUser={setUser} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'add',
          element: <Create />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App