import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


export const TodosContext = createContext();

const TodosContextProvider = ({children}) => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo item 1'
    },
    {
      id: 2,
      title: 'Todo item 2'
    },
  ])

  const addTodo = (title) => {
    const todo = {
      id: uuidv4(),
      title
    }

    setTodos(state => {
      return [...state, todo]
    })
  }

  const deleteTodo = (id) => {
    setTodos(state => state.filter(todo => todo.id !== id))
  }

  const value = {
    todos,
    addTodo,
    deleteTodo
  }

  return (
    <TodosContext.Provider value={value}>
      { children }
    </TodosContext.Provider>
  )
}

export default TodosContextProvider