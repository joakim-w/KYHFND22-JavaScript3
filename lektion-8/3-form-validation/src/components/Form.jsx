import React from 'react'
import FormInput from './FormInput'

const Form = () => {
  return (
    <form noValidate>
      <FormInput 
        id='firstName' 
        type="text" 
        label="First Name"   
      />
      <FormInput 
        id='lastName' 
        type="text" 
        label="Last Name"   
      />
      <FormInput 
        id='email' 
        type="email" 
        label="Email"   
      />
      <FormInput 
        id='password' 
        type="password" 
        label="Password"   
      />
      <FormInput 
        id='confirmPassword' 
        type="password" 
        label="Confirm Password"   
      />



      
      <button className="btn btn-primary">Register</button>
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