import React from 'react'
import { Link } from 'react-router-dom'

const ProductListItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`} className='product-item'>
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
    </Link>
  )
}

export default ProductListItem