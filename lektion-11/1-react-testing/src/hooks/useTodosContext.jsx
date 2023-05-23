import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext"


export const useTodosContext = () => {
  const context = useContext(TodosContext)

  if(!context) throw new Error('useTodosContext must be inside a TodosContextProvider')

  return context
}