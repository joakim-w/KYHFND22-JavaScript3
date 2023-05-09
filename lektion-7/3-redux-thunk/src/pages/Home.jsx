import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadPosts } from '../store/actions/postsAction'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home