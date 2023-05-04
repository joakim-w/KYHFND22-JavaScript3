import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register, { action as registerAction } from './pages/Register'
import Create from './pages/Create'
import RootBoundrary from './boundarys/RootBoundrary'

const App = () => {

  const [user, setUser] = useState(null)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout user={user} setUser={setUser} />,
      errorElement: <RootBoundrary />,
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
          element: <Register />,
          action: registerAction
        },
        {
          path: 'add',
          element: <Create />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App