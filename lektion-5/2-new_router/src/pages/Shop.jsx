import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem'
import axios from 'axios'

const Shop = () => {

  const products = useLoaderData()

  return (
    <div className='shop'>
      { products && products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export const loader = async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  if(res.status !== 200) {
    throw new Error('Could not fetch the data')
  }
  return res.data
}

export default Shop