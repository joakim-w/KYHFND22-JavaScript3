// INTEGRATIONSTEST

import { fireEvent, render, screen } from "@testing-library/react"
import Home from "../Home"
import TodosContextProvider from "../../../contexts/TodosContext"

const MockHomePage = () => {
  return (
    <TodosContextProvider>
      <Home />
    </TodosContextProvider>
  )
}

const addTodos = (todoTitles) => {
  const inputElement = screen.getByRole('textbox', { name: 'todo-title' })
  const formElement = screen.getByRole('form')

  todoTitles.forEach(title => {
    fireEvent.change(inputElement, { target: { value: title } })
    fireEvent.submit(formElement)
  })
}

describe('Home', () => {

  describe('Integration test if possible to add and remove todos', () => {

    it('should render a todo with the same text as entered in the text input', async () => {
      render(<MockHomePage />)
      // För att det här ska fungera måste vi lägga till en aria-label på input elementet
      const inputElement = screen.getByRole('textbox', { name: 'todo-title' })
      fireEvent.change(inputElement, { target: { value: "Städa kontoret" } })

      const formElement = screen.getByRole('form') // För att det här ska fungera måste vi lägga till ett name="" på formuläret
      fireEvent.submit(formElement)

      const todoParagraphElement = screen.getByText(/städa kontoret/i)
      expect(todoParagraphElement).toBeInTheDocument()
    })


    it('should render a todo for each submit', () => {
      render(<MockHomePage />)

      const _todos = ["todo 1", "todo 2", "todo 3"]
      addTodos(_todos)
      const todos = screen.getAllByTestId('todo-element')
      expect(todos.length).toBe(3)
    })


    it('should remove the todo if clicked on', () => {
      render(<MockHomePage />)
      addTodos(["todo 1", "todo 2", "todo 3"])
      const todoParagraphElement = screen.getByText(/todo 2/i)
      fireEvent.click(todoParagraphElement)
      expect(todoParagraphElement).not.toBeInTheDocument();
    })

  })
})