import { useRef, useState } from 'react'
import { Form, useActionData, useFetcher } from 'react-router-dom'
import { login } from '../helpers/apiService'

const Login = () => {

  // const actionData = useActionData()

  // return (
  //   <div className='form-page'>
  //     <h1>Login to your account</h1>
  //     <Form method='POST'>
  //       <div className="form-group">
  //         <label htmlFor="email">Email:</label>
  //         <input type="email" name="email" id="email" />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">Password:</label>
  //         <input type="password" name="password" id="password" />
  //       </div>
  //       <button className='btn btn-primary'>LOGIN</button>
  //       {actionData && <p className='error'>{actionData.message}</p>}
  //     </Form>
  //   </div>
  // )

  const fetcher = useFetcher()
  console.log(fetcher.state)
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = emailRef.current.value;
    const password = passwordRef.current.value
    if(password.length < 8) {
      setError('Your password is to short')
    }

    fetcher.submit({ email, password }, {
      method: 'POST',
    })

  }

  return (
    <div className='form-page'>
      <h1>Login to your account</h1>
      <fetcher.Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" ref={passwordRef} />
          <p>{error}</p>
        </div>
        <button className='btn btn-primary'>{fetcher.state === 'submitting' ? 'WORKING..' : 'LOGIN'}</button>
        {/* {actionData && <p className='error'>{actionData.message}</p>} */}
      </fetcher.Form>
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