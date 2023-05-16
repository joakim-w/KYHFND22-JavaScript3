import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home