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
      <Navbar user={user} />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='register' element={<Register setUser={setUser} />} />
          <Route path='add' element={<Create />} />
        </Routes>
      </div>
    </>
  )
}

export default App