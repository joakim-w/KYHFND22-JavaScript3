import { useState } from 'react'
import FormInput from './FormInput'
import { validate } from '../helpers/validate'
import { useForm } from '../hooks/useForm'

const Form = () => {

  const { errors, form, handleChange, handleSubmit, handleBlur } = useForm({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  return (
    <form noValidate onSubmit={handleSubmit}>
      <FormInput 
        id='firstName' 
        type="text" 
        label="First Name"
        value={form.firstName}
        onChange={handleChange}
        errorMsg={errors.firstName}
        onBlur={handleBlur}
      />
      <FormInput 
        id='lastName' 
        type="text" 
        label="Last Name"   
        value={form.lastName}
        onChange={handleChange}
        errorMsg={errors.lastName}
        onBlur={handleBlur}
      />
      <FormInput 
        id='age' 
        type="text" 
        label="Age"   
        value={form.age}
        onChange={handleChange}
        errorMsg={errors.age}
        onBlur={handleBlur}
      />
      <FormInput 
        id='email' 
        type="email" 
        label="Email"
        value={form.email}
        onChange={handleChange}
        errorMsg={errors.email}
        onBlur={handleBlur}
      />
      <FormInput 
        id='password' 
        type="password" 
        label="Password"
        value={form.password}
        onChange={handleChange}
        errorMsg={errors.password}
        onBlur={handleBlur}
      />
      <FormInput 
        id='confirmPassword' 
        type="password" 
        label="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        errorMsg={errors.confirmPassword}
        onBlur={handleBlur}
      />



      
      <button className="btn btn-primary">Register</button>
      {/* <p>{JSON.stringify(form, '', 1)}</p> */}
    </form>
  )
}

export default Form





{/* <FormInput 
        id='age' 
        type="text" 
        label="Age"
        pattern="/[0-9]*$"
        in 
      /> */}