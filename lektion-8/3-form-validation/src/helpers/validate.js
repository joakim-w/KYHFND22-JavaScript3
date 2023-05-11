export const validate = (evt, form, setErrors) => {

  const err = {}

  // first name
  if(form.firstName.trim() === '') {
    err.firstName = 'You need to enter a first name'
  } else if(form.firstName.length < 3) {
    err.firstName = 'Your name must be atleast 3 chars long'
  }

  // last name
  if(form.lastName.trim() === '') {
    err.lastName = 'You need to enter a last name'
  } else if(form.lastName.length < 3) {
    err.lastName = 'Your name must be atleast 3 chars long'
  }

  // age
  const ageRegex = /^\d{1,3}$/

  if(form.age.trim() === '') {
    err.age = 'You should have an age'
  } else if(!ageRegex.test(form.age)) {
    err.age = 'You need to enter a valid age'
  }

  // email
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(form.email.trim() === '') {
    err.email = 'You need to enter an email address'
  } else if(!emailRegex.test(form.email)) {
    err.email = 'You need to enter a valid email address'
  }

  // Password
  const passwordRegex = /^(?=.*[a-ö])(?=.*[A-Ö])(?=.*\d)(?=.*[!])[a-öA-Ö\d!]{8,}$/

  if(form.password.trim() === '') {
    err.password = 'You need to enter a password'
  } else if (form.password.length < 8) {
    err.password = ' Your password needs to be atleast 8 characters long'
  } else if(!passwordRegex.test(form.password)) {
    err.password = 'Your password needs to have one uppercase, one lowercase, one number and a special character'
  }

  if(form.confirmPassword !== form.password) {
    err.confirmPassword = 'The passwords do not match!'
  }


  // console.log(err['firstName'])

  if(evt.type === 'blur') {
    const { id } = evt.target
    setErrors(errors => {
      return {
        ...errors,
        [id]: err[id]
      }
    })
    return
  }

  setErrors(err)
  return Object.keys(err).length <= 0
}