import { useState } from 'react'


const initState = {
  firstName: '',
  lastName: '',
  email: ''
}

const FormThree = () => {
  
  const [formData, setFormData] = useState(initState)
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = e => {
    setFormData(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(formData.firstName.trim() === '') {
      setFormErrors(errors => {
        return {
          ...errors, 
          firstName: 'you need to enter a first name'
        }
      })
    }

    setFormData(initState)

  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input 
        type="text" 
        name='firstName' 
        id='firstName' 
        className='form-control' 
        value={formData.firstName}
        onChange={handleChange}/>
        <p className='error'>{formErrors.firstName}</p>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' id='lastName' className='form-control' value={formData.lastName} onChange={handleChange} />
        <p className='error'>{formErrors.lastName}</p>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' className='form-control' value={formData.email} onChange={handleChange} />
        <p className='error'>{formErrors.email}</p>
      </div>
      <button>Submit</button>

      <p>firstName: {formData.firstName}</p>
      <p>lastName: {formData.lastName}</p>
      <p>email: {formData.email}</p>
    </form>
  )
}

export default FormThree