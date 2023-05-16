import React, { useState } from 'react'

const Add = () => {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageURL: '',
    description: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  return (
    <div>
      <h1 className='text-center my-5'>Add a new product</h1>
      <form noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name:</label>
          <input type="text" className="form-control" id='name' value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" inputMode='decimal' className="form-control" id='price' value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Image Url:</label>
          <input type="text" className="form-control" id='imageURL' value={formData.imageURL} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' id="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default Add