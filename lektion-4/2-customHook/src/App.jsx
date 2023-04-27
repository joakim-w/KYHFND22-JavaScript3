import { useState } from 'react'
import Todos from './components/Todos'

const App = () => {

  const [showTodos, setShowTodos] = useState(true)

  return (
    <div>
      <button onClick={() => setShowTodos(false)}>hide todos</button>
      {showTodos && <Todos />}
    </div>
  )
}

export default App