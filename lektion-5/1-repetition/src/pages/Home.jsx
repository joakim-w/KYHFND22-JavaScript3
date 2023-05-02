import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Home = ({ user }) => {
  if(user == null) {
    return <Navigate to="/login" replace state={{ from: location.pathname }}/>
  }

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:3000/posts?userId='+user.user.id)
      if(res.data) {
        setTodos(res.data)
      }
    }
    getTodos()
  }, [])

  return (
    <div>
      <h2>Welcome back {user && user.user.firstName}</h2>
      <ul className="todo-list">

        {
        todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))
        }

      </ul>
    </div>
  )
}

export default Home