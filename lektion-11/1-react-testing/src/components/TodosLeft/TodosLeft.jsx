import React from 'react'

const TodosLeft = ({ amount }) => {
  return (
    <>
      <p>{ amount } { amount === 1 ? 'todo' : 'todos' } left </p>
    </>
  )
}

export default TodosLeft