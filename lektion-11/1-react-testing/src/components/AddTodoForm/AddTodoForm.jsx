import { useState } from 'react'
import './AddTodoForm.scss'

const AddTodoForm = () => {

  const [title, setTitle] = useState('')

  return (
    <form className='add-todo-form card'>
      <div className="group">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>ADD</button>
      </div>
    </form>
  )
}

export default AddTodoForm