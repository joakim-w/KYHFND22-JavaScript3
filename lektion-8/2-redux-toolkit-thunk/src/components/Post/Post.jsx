import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='post'>
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0,40)}...</p>
      </Link>
    </div>
  )
}

export default Post