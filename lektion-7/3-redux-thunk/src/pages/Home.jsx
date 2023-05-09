import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from '../store/actions/postsAction'
import Post from '../components/Post/Post'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  const { posts, loading, error } = useSelector(state => state.posts)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{ error }</p>}
      {
        posts.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  )
}

export default Home