import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Login, {action as loginAction} from './pages/Login'
import Register, { action as registerAction } from './pages/Register'
import Create, { action as createAction } from './pages/Create'
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
          element: <Login />,
          action: loginAction(setUser)
        },
        {
          path: 'register',
          element: <Register />,
          action: registerAction(setUser)
        },
        {
          path: 'add',
          element: <Create />,
          action: createAction(user)
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App