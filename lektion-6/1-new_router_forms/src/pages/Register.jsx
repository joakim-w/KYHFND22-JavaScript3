
import { Form } from 'react-router-dom'

const Register = () => {
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
      </Form>
    </div>
  )
}

export const action = async ({ request }) => {
  const data = await request.formData()
  const user = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    password: data.get('password')
  }
  console.log(user)
  return null
}

export default Register