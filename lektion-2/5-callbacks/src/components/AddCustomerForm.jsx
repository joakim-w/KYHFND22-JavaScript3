import { useState, useRef } from 'react'

const AddCustomerForm = ({ addCustomer }) => {

  const inputRef = useRef()
  const [customerName, setCustomerName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addCustomer(customerName)
    setCustomerName('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-center mb-4'>
        <h2>Add Customer</h2>
      </div>
      <div className="input-group">
        <input ref={inputRef} type="text" placeholder='Enter customer name' className='form-control' value={customerName} onChange={e => setCustomerName(e.target.value)} />
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  )
}

export default AddCustomerForm