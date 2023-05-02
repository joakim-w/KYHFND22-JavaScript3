import React from 'react'
import Navbar from './components/Navbar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop, { loader as ShopLoader } from './pages/Shop'
import NotFound from './pages/NotFound'
import ProductDetails, { loader as DetailsLoader } from './pages/ProductDetails'
import RootLayout from './layouts/RootLayout'
import ShopLayout from './layouts/ShopLayout'

const App = () => {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     // http:loclahost:5773/
  //      <Route path='/' element={ <RootLayout />} >  
  //        <Route index element={<Home />} />
  //        {/*  http:loclahost:5773/about  */}
  //        <Route path='about' element={<About />}/>

  //        {/*  http:loclahost:5773/shop/  */}
  //       <Route path='shop' element={ <ShopLayout /> } >
  //         <Route index element={<Shop />}/>
  //         <Route path=':id' element={<ProductDetails />}/>
  //       </Route>

  //        <Route path='*' element={<NotFound />} />
  //      </Route>
  //   )
  // )

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
          path: 'about',
          element: <About />
        },
        {
          path: 'shop',
          element: <ShopLayout />,
          children: [
            {
              index: true,
              element: <Shop />,
              loader: ShopLoader
            },
            {
              path: ':id',
              element: <ProductDetails />,
              loader: DetailsLoader
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