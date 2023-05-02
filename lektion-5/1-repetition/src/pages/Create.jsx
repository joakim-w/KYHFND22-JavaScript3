import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = ({ user }) => {

  if(user == null) {
    return <Navigate to="/login" replace state={{ from: location.pathname }}/>
  }


  const navigate = useNavigate()
  const [title, setTitle] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const todo = {
      userId: user.user.id,
      title,
      completed: false
    }

    const res = await axios.post('http://localhost:3000/posts', todo, {
      headers: {
        authorization: 'Bearer ' + user.token
      }
    })
    console.log(res)
    if(res.status === 201) {
      navigate('/')
    }
  }

  return (
    <div className='create'>
      <h1>Add a new post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <button className='btn btn-primary'>ADD</button>
      </form>
    </div>
  )
}

export default Create