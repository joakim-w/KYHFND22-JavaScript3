import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { usePostsContext } from '../../hooks/usePostsContext'

const Navbar = () => {

  const { isLightTheme, toggleTheme } = useContext(ThemeContext)
  // const { posts } = usePostsContext()

  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/"><h1>LOGO</h1></Link>
        <ul className="nav-links">
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/create">New Post</NavLink></li>
          <button 
          onClick={toggleTheme} 
          className='btn btn-sm btn-dark'
          style={{
            color: isLightTheme ? '#fff' : '#000', 
            background: isLightTheme ? '#333': '#fff'
          }}
          >{ isLightTheme ? 'Dark' : 'Light'}</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar