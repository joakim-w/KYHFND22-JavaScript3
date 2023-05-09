import React from 'react'
import Post from '../components/Post/Post'

const Posts = ({ posts }) => {
  return (
    <div className='posts' style={{ paddingTop: '2rem' }}>
      {
        posts.length > 0
        ? posts.map(post => <Post key={post.id} post={post} />)
        : <h2>No posts to show</h2>
      }
    </div>
  )
}

export default Posts