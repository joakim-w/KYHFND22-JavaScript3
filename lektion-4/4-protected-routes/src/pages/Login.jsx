import React from 'react'
import authService from '../services/authService'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

  const { state } = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handleLogin = async () => {
    await authService.login()
    navigate(state?.from || '/')
    
    // if(state) {
    //   navigate(state.from)
    // } else {
    //   navigate('/')
    // }
  }


  return (
    <div>
      <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login