import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAccusoft } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container d-flex">
        <Link to="/" className='brand'><FaAccusoft/></Link>
        <ul className='nav-links d-flex'>
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/add" id='knappen' className="btn btn-primary">Create New Post</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar