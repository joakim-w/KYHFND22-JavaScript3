import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import { login } from '../helpers/apiService'

const Login = () => {

  const actionData = useActionData()

  return (
    <div className='form-page'>
      <h1>Login to your account</h1>
      <Form method='POST'>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className='btn btn-primary'>LOGIN</button>
        {actionData && <p className='error'>{actionData.message}</p>}
      </Form>
    </div>
  )
}

export const action = (setUser) => async ({ request }) => {
  const data = await request.formData()
  const userData = {
    email: data.get('email'),
    password: data.get('password')
  }
  return login(userData, setUser)
}

export default Login