import { useState } from 'react'
import TodosLeft from '../TodosLeft/TodosLeft'
import './TodoList.scss'
import { FaChevronLeft } from 'react-icons/fa'

const TodoList = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='todo-list card'>
      <div className="top">
        <TodosLeft amount={2} />
        <FaChevronLeft className={`chevron ${show ? 'rotate' : ''}`} onClick={() => setShow(prev => !prev)} />
      </div>
      <div className={`expandable-list ${show ? 'expand' : ''}`}>
        <div className="expandable-content">
          <p className='todo-item'>hej</p>
          <p className='todo-item'>hej</p>
          <p className='todo-item'>hej</p>
        </div>
      </div>
    </div>
  )
}

export default TodoList