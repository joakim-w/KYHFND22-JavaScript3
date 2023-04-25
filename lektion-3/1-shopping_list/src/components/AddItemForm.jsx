import { useState } from 'react'

const AddItemForm = ({ addItem }) => {

  const [formData, setFormData] = useState({
    product: '',
    quantity: 1
  })

  const handleChange = e => {
    setFormData(formData => {
      return {
        ...formData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newProduct = {
      product: formData.product,
      quantity: +formData.quantity
    }

    addItem(newProduct)
    setFormData({
      product: '',
      quantity: 1
    })
  }

  return (
    <form onSubmit={handleSubmit} className='AddItemForm'>
      <div className="form-group">
        <input type="text" name="product" value={formData.product} onChange={handleChange} />
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      </div>
      <button>ADD</button>
    </form>
  )
}

export default AddItemForm