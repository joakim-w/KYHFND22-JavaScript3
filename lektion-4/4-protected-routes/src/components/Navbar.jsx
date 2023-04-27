import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><h1>Protected Routes</h1></Link>
      <ul>
        <li><NavLink to="/admin">Admin</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar