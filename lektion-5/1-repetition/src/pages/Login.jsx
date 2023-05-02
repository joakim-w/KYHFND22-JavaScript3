import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'

const Login = ({setUser, user}) => {

  if(user) {
    return <Navigate to="/"/>
  }

  const navigate = useNavigate()
  const { state } = useLocation()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    const res = await axios.post('http://localhost:3000/login', formData)
    console.log(res)
    if(res.data){
      setUser(res.data)
      // localStorage.setItem('token', res.data.token)
      navigate(state?.from || '/')
    }
  }

  return (
    <div className='form-page'>
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        </div>
        <button className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  )
}

export default Login