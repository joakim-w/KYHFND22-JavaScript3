import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post/Post'
import { useEffect } from 'react'
import { getAllPosts } from '../features/posts/postsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { posts, error, loading } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])


  return (
    <div>
      { loading && <p>Loading...</p> }
      { error && <p>{ error }</p> }

      {
        posts.length > 0
        ? posts.map(post => <Post key={post.id} post={post} />)
        : <h2>No posts to show</h2>
      }
    </div>
  )
}

export default Home