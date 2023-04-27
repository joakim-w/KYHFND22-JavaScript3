// import { useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { useFetch } from '../hooks/useFetch'

const Shop = () => {

  const { data: products } = useFetch('https://fakestoreapi.com/products')

  return (
    <div className='shop'>
      { products && products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop