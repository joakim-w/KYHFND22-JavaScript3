import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import { ProtectedRoute } from './routes/ProtectedRoute'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App