
import { Form, useActionData } from 'react-router-dom'
import { register } from '../helpers/apiService'

const Register = () => {

  const actionData = useActionData()

  return (
    <div className='form-page'>
      <h1>Register a new user</h1>
      <Form method='POST'>
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className='btn btn-primary'>REGISTER</button>
        {actionData && <p className='error'>{actionData.message}</p>}
      </Form>
    </div>
  )
}

export const action = (setUser) => async ({ request }) => {
  const data = await request.formData()
  const userData = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    password: data.get('password')
  }
  return register(userData, setUser)
}

export default Register