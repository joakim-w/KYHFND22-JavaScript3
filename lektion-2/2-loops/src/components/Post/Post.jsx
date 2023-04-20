import { useState } from 'react'
import './Post.css'

const Post = ({post}) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className='Post'>
      <div className={`card mb-1 ${isDark ? 'dark' : ''}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={() => setIsDark(prev => !prev)}>{isDark ? 'Light' : 'Dark'}</button>
      </div>
    </div>
  )
}

export default Post