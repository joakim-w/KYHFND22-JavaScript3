import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App