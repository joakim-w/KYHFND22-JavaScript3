import { useState } from 'react'
import Count from './components/Count'
import Name from './components/Name'

const App = () => {

  const [todos, setTodos] = useState(['gå hem', 'äta mat'])



  return (
    <div>
      {
        todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))
      }

      <button onClick={() => setTodos((oldTodos) => [...oldTodos, 'ny grej'])}>lägg till</button>
      <Count />
      <Name />
    </div>
  )

}

export default App