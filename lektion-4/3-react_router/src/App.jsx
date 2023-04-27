import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        {/* Ser till att bara EN "page / route" visas åt gången, lite som en switch */}
        <Routes> 
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/shop' element={<Shop />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App