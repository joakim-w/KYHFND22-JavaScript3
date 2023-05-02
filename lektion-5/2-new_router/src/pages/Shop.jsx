import { useEffect, useState } from 'react'
import ProductListItem from '../components/ProductListItem'
import axios from 'axios'

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  return (
    <div className='shop'>
      { products && products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop