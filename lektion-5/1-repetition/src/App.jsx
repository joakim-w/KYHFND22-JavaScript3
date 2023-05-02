import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home'
import Login from './pages/Login'
import Create from './pages/Create'
import Register from './pages/Register'

import Navbar from './components/Navbar'

const App = () => {

  //försök till att hålla användaren inloggad -- vi kollar mer på det sen
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token) {
  //     axios.get('http://localhost:3000/users')
  //       .then(res => {
  //         console.log(res)
  //       })
  //   }
  // }, [])
  
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