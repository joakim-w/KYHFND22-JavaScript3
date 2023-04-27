import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// const getTodos = async () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(res => {
//     console.log(res.data)
//     // setTodos(res.data)
//     return res.data
//   })
// }

const App = () => {

  const [todos, setTodos] = useState([])
  // const [counter, setCounter] = useState(0)
  const [url, setUrl] = useState('http://localhost:3000/posts')

  // const getTodos = useCallback(async () => {
  //   const res = await axios.get(url)
  //   console.log(res.data)
  //   setTodos(res.data)
  // }, [url])

  useEffect(() => {

    const getTodos = async () => {
      const res = await axios.get(url)
      console.log(res.data)
      setTodos(res.data)
    }

    getTodos()

  }, [url])

  // useEffect(() => {
  //   console.log('clicked on counter. ' + counter)
  // }, [counter])

  return (
    <div>

      <button onClick={() => setUrl('http://localhost:3000/posts')}>All users</button>
      <button onClick={() => setUrl('http://localhost:3000/posts?nisse=1')}>user 1</button>
      <button onClick={() => setUrl('http://localhost:3000/posts?nisse=2')}>user 2</button>
      {/* <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>user 3</button>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=4')}>user 4</button> */}
      
      {
        todos.map(todo => (
          <div key={todo.id} className='todo'>
            <h2>{todo.title}</h2>
            <p>Nisse: {todo.nisse}</p>
          </div>
        ))
      }

    </div>
  )
}

export default App