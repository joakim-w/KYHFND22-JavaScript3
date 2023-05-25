import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Create from './pages/Create'
import './App.css'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'
import MyAccount from './pages/MyAccount'

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
            },
            {
              path: 'create',
              element: <Create />
            },
            {
              path: 'me',
              element: <MyAccount />
            },
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