import React from 'react'
import Header from '../../components/Header/Header'
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm'
import TodoList from '../../components/TodoList/TodoList'

const Home = () => {
  return (
    <div>
      <Header title="Todos" />
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default Home