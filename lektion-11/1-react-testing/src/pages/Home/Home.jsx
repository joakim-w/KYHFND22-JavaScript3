import React from 'react'
import Header from '../../components/Header/Header'
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm'
import TodoList from '../../components/TodoList/TodoList'
import AsyncTodoList from '../../components/AsyncTodoList/AsyncTodoList'

const Home = () => {
  return (
    <div>
      <Header title="Todos" />
      <AddTodoForm />
      <TodoList />
      <AsyncTodoList />
    </div>
  )
}

export default Home