import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Create from './pages/Create'
import Register from './pages/Register'

import Navbar from './components/Navbar'

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        <Routes>
          <Route index element={<Home user={user} />} />
          <Route path='login' element={<Login user={user} setUser={setUser} />} />
          <Route path='register' element={<Register user={user} setUser={setUser} />} />
          <Route path='add' element={<Create user={user} />} />
        </Routes>
      </div>
    </>
  )
}

export default App