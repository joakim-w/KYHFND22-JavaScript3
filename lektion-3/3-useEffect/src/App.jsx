import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'

const App = () => {

  const [todos, setTodos] = useState([])

  // const getTodos = () => {
  //   fetch('http://localhost:3000/posts')
  //     .then(res => res.json())
  //     .then(data => {

  //       setTodos(data)
  //       console.log(data)
  //     })
  // }

  // getTodos()

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('http://localhost:3000/posts')
      const data = await res.json()
      setTodos(data)
      console.log(data)
    }

    getTodos()

  }, []) // görs så att det bara körs en gång

  useEffect(() => {
    console.log('todo ändrades')
  }, [todos]) // Så fort todos ändras så körs funktionen


  const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      }
    </div>
  )
}

export default App