import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const ProductDetails = () => {

  if(!product) return (
    <div>
      hej
    </div>
  )

  return (
    <div className="my-5 py-5">
      <section className="text-center">
        <h2>{product.name}</h2>
        <div className="row">
          <div className="col-lg-6">
            <img src={product.imageURL} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-lg-6">

            <div className="p-3 mt-lg-5 text-center text-lg-start">
              {product.description}
            </div>

            <div className="mt-5 text-lg-end">
              <p className="h3">{product.price}</p>
              <button className="btn btn-info"><FaCartPlus /> Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails