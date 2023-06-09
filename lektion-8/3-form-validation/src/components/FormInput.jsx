import React from 'react'

const FormInput = ({ label, errorMsg, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={rest.id} className="form-label">{ label }</label>
      <input className='form-control' {...rest} />
      { errorMsg && <p className='error'>{ errorMsg }</p>}
    </div>
  )
}

export default FormInput

