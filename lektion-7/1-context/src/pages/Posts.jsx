import Post from '../components/Post/Post'
import { usePostsContext } from '../hooks/usePostsContext'

const Posts = () => {
  const { posts } = usePostsContext()
  
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