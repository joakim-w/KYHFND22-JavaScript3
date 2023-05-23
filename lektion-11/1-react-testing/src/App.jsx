import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'
import TodosContextProvider from './contexts/TodosContext'

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
    <TodosContextProvider>
      <RouterProvider router={router} />
    </TodosContextProvider>
  )
}

export default App