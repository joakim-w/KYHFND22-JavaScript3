import { useEffect, useState } from 'react'
import TodosLeft from '../TodosLeft/TodosLeft'
import { FaChevronLeft } from 'react-icons/fa'
import { useTodosContext } from '../../hooks/useTodosContext'

const AsyncTodoList = () => {

  const [show, setShow] = useState(false)

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodosAsync = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const data = await res.json()
      setTodos(data)
    }
    getTodosAsync()
  }, [])

  return (
    <div className='todo-list card'>
      <div className="top">
        <TodosLeft amount={todos.length} />
        <FaChevronLeft data-testid="chevron" className={`chevron ${show ? 'rotate' : ''}`} onClick={() => setShow(prev => !prev)} />
      </div>
      <div data-testid="expandable-list" style={{ opacity: show ? 1 : 0 }} className={`expandable-list ${show ? 'expand' : ''}`}>
        <div className="expandable-content">
          {
            todos.map(todo => (
              <p data-testid="async-todo" key={todo.id} onClick={() => deleteTodo(todo.id)} className='todo-item'>{todo.title}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AsyncTodoList