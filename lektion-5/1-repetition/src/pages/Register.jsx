import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'


const Register = ({setUser, user}) => {

  if(user != null) {
    return <Navigate to="/"/>
  }

  const navigate = useNavigate()
  const { state } = useLocation()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

    const res = await axios.post('http://localhost:3000/register', formData)
    console.log(res)
    if(res.data){
      setUser(res.data)
      // localStorage.setItem('token', res.data.token)
      navigate(state?.from || '/')
    }
  }

  return (
    <div className='form-page'>
      <h1>Register a new User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input type="text" name='firstName' id='firstName' value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name='lastName' id='lastName' value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        </div>
        <button className="btn btn-primary">REGISTER</button>
      </form>
    </div>
  )
}

export default Register