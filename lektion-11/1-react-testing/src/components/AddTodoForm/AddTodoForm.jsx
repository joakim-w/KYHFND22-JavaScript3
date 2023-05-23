import { useState } from 'react'
import './AddTodoForm.scss'
import { useTodosContext } from '../../hooks/useTodosContext'
import { Link } from 'react-router-dom'

const AddTodoForm = () => {

  const [title, setTitle] = useState('')
  const { addTodo } = useTodosContext()

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <form name='add-todo-form' onSubmit={handleSubmit} className='add-todo-form card'>
      <div className="group">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>ADD</button>
      </div>
    </form>
  )
}

export default AddTodoForm