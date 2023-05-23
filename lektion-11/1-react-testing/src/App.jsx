import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout  />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App