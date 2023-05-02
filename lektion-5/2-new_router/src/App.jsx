import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import RootLayout from './layouts/RootLayout'
import ShopLayout from './layouts/ShopLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      // http:loclahost:5773/
       <Route path='/' element={ <RootLayout />} >  
         <Route index element={<Home />} />
         {/*  http:loclahost:5773/about  */}
         <Route path='about' element={<About />}/>

         {/*  http:loclahost:5773/shop/  */}
        <Route path='shop' element={ <ShopLayout /> } >
          <Route index element={<Shop />}/>
          <Route path=':id' element={<ProductDetails />}/>
        </Route>



         <Route path='*' element={<NotFound />} />
       </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )






  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes> 
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/:id' element={<ProductDetails />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App