import './App.scss'
import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Register from './pages/Register'
import Login from './pages/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { authReady } from './store/features/auth/authSlice'

const App = () => {

  const { authIsReady } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      console.log(_user)
      let user = null

      if(_user) {
        user = {
          uid: _user.uid,
          email: _user.email
        }
      }

      dispatch(authReady(user))

    })
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <Add />
        },
        {
          path: 'products/:id',
          element: <ProductDetails />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        },
      ]
    }
  ])

  return (
    <>
      {
        authIsReady &&
        <RouterProvider router={router} />
      }
    </>
  )
}

export default App