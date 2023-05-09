import { useContext } from 'react'
import './Post.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const Post = ({ post }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className='post' style={{ background: theme.ui, color: theme.text }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post