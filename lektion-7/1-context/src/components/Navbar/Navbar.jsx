import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/"><h1>LOGO</h1></Link>
        <ul className="nav-links">
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/create">New Post</NavLink></li>
          <button className='btn btn-sm btn-dark'>Dark</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar