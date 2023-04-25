import { useEffect } from 'react'

const TodoItem = ({todo, removeTodo}) => {

  // useEffect(() => {
  //   console.log('comopnent renderd')
  // }, [])


  return (
    <div onClick={() => removeTodo(todo.id)}>{todo.title}</div>
  )
}

export default TodoItem