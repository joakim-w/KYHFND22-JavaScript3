import { useState } from 'react'
import { validate } from '../helpers/validate'

export const useForm = (formData) => {

  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({...formData})

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm(formData => {
      return {
        ...formData,
        [id]: value
      }
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()

    if(!validate(e, form, setErrors)) {
      return
    }

    // skicka till api
    console.log(form)
  }

  const handleBlur = e => {
    validate(e, form, setErrors)
  }

  return {
    errors,
    form,
    handleChange,
    handleSubmit,
    handleBlur
  }
}
