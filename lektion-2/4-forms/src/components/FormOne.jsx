import { useState } from 'react'

const FormOne = () => {

  console.log('render')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      firstName,
      lastName,
      email
    }

    console.log(user)

    setFirstName('')
    setLastName('')
    setEmail('')
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
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' id='lastName' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Submit</button>

      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>email: {email}</p>
    </form>
  )
}

export default FormOne