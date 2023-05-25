import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container d-flex">
        <Link to="/" className='brand' >LOGO</Link>
        <ul className="nav-links d-flex">
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="create">Create</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar