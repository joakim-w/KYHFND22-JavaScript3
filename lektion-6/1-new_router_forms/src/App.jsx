import { useState } from 'react'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home, { loader as homeLoader } from './pages/Home'
import Login, {action as loginAction} from './pages/Login'
import Register, { action as registerAction } from './pages/Register'
import Create, { action as createAction } from './pages/Create'
import RootBoundrary from './boundarys/RootBoundrary'
import { action as testAction } from './pages/Test'

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
          element: <Home user={user} />,
          loader: homeLoader(user)
        },
        {
          path: 'login',
          element: <Login />,
          action: loginAction(setUser),
          loader: () => {
            if(user) return redirect('/')
            return null
          }
        },
        {
          path: 'register',
          element: <Register />,
          action: registerAction(setUser),
          loader: () => {
            if(user) return redirect('/')
            return null
          }
        },
        {
          path: 'add',
          element: <Create />,
          action: createAction(user),
          loader: () => {
            if(!user) return redirect('/login')
            return null
          }
        },
        {
          path: 'test',
          action: testAction
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App