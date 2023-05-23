import { useState } from 'react'
import TodosLeft from '../TodosLeft/TodosLeft'
import './TodoList.scss'
import { FaChevronLeft } from 'react-icons/fa'
import { useTodosContext } from '../../hooks/useTodosContext'

const TodoList = () => {

  const [show, setShow] = useState(false)

  const { todos, deleteTodo } = useTodosContext()

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
              <p key={todo.id} onClick={() => deleteTodo(todo.id)} className='todo-item'>{todo.title}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList