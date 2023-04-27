import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/"><h1>LOGO</h1></Link>
        <ul className='nav-links'>
          <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
          <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
          <li><NavLink to="/shop" className='nav-link'>Shop</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar