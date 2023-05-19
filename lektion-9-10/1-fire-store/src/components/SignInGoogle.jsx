import React from 'react'
import googleIcon from '../assets/google.png'
import { useDispatch } from 'react-redux'
import { signInWithGoogle } from '../store/features/auth/authSlice'

const SignInGoogle = ({ setSubmitted }) => {

  const dispatch = useDispatch()

  const handleClick = async () => {
    dispatch(signInWithGoogle())
    setSubmitted(true)
  }

  return (
    <button type="button" onClick={handleClick} className='bg-white border rounded ms-5'>
      <img src={googleIcon} style={{width: '40px'}} alt="sign in with google" className='img-fluid' />
      <span className='ms-3'>Sign in with google</span>
    </button>
  )
}

export default SignInGoogle