import { useRef } from 'react'

const FormTwo = () => {

  console.log('render')

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    }

    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''

    // firstNameRef.current.focus()
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
        ref={firstNameRef}/>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' id='lastName' className='form-control' ref={lastNameRef} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' className='form-control' ref={emailRef} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default FormTwo