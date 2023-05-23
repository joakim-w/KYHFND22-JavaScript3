const { render, screen, fireEvent } = require("@testing-library/react")
import { RouterProvider } from 'react-router-dom'
import TodosContextProvider from '../../../contexts/TodosContext'
import AddTodoForm from '../AddTodoForm'

const MockAddTodoForm = () => {
  return (
    <TodosContextProvider>
      <AddTodoForm />
    </TodosContextProvider>
  )
}

describe('AddTodoForm', () => {

  it('should render the textbox', async () => {
    render(<MockAddTodoForm />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument();
  })

  it('should update value on input', async () => {
    render(<MockAddTodoForm />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: "En text som skrivs in i inputen" } })
    expect(inputElement.value).toBe("En text som skrivs in i inputen")
  })

  it('should clear the input on submit', async () => {
    render(<MockAddTodoForm />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: "En text som skrivs in i inputen" } })

    const formElement = screen.getByRole('form') // För att det här ska fungera måste vi lägga till ett name="" på formuläret
    fireEvent.submit(formElement)

    expect(inputElement.value).toBe("")
  })

})