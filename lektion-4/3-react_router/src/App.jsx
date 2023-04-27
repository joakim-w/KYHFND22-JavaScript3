import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        {/* Ser till att bara EN "page / route" visas åt gången, lite som en switch, hette <Switch> förut */}
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