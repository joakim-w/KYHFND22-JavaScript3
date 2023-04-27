import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

const Todos = () => {

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
  const { data: todos, loading, error } = useFetch(url, { method: 'GET' })

  return (
    <div className="todo-list">

    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>all users</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1')}>user 1</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2')}>user 2</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>user 3</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=4')}>user 4</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todosssss')}>404</button>

      { loading && <p>Loading...</p> }
      { error && <p>{error}</p> }

      { todos && !loading && !error && todos.map(todo => (
        <div className="todo" key={todo.id}>
          <p className="small">User id: {todo.userId}</p>
          <p>{todo.title}</p>
        </div>
      ))}

    </div>
  )
}

export default Todos