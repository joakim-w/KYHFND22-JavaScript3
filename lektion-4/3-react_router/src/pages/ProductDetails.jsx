import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useFetch } from '../hooks/useFetch';

const ProductDetails = () => {

  const [product, setProduct] = useState(null)
  const { id } = useParams();

  // const { data: product } = useFetch('https://fakestoreapi.com/products/' + id)

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products/' + id)
      const data = await res.json()
      setProduct(data)
    }
    getProduct()
  }, [])


  return (
    <div>
      { product && (
        <div className="product-details">
          <h2>{product.title}</h2>
          <div className="d-flex">
            <div className="product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-desc">
              <p>{product.description}</p>
              <p className='product-price'>Price: ${product.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails