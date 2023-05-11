import React from 'react'

const FormInput = ({ label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={rest.id} className="form-label">{ label }</label>
      <input className='form-control' {...rest} />
      <p className='error'>error message</p>
    </div>
  )
}

export default FormInput

