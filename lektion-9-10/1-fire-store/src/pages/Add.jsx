import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/features/products/productListSlice'
import { Navigate, useNavigate } from 'react-router-dom'
const Add = () => {

  const { user } = useSelector(state => state.auth)

  const { error } = useSelector(state => state.productList)

  const navigate = useNavigate()
  
  // useEffect(() => {
  //   if(!user)
  //     navigate('/login')
  // }, [user])

  const dispatch = useDispatch()
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    imageURL: '',
    description: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setProductData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      ...productData,
      price: +productData.price
    }

    dispatch(addProduct(data))
  }

  return (
    <div>
      <h1 className='text-center my-5'>Add a new product</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name:</label>
          <input type="text" className="form-control" id='name' value={productData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Image Url:</label>
          <input type="text" className="form-control" id='imageURL' value={productData.imageURL} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
        </div>
        { error && <p className='text-danger'>{ error }</p>}
        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default Add