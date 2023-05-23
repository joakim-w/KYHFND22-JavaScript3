import { fireEvent, render, screen } from '@testing-library/react'
import TodosContextProvider from '../../../contexts/TodosContext'
import TodoList from '../TodoList'

const MockTodoList = () => {
  return (
    <TodosContextProvider>
      <TodoList />
    </TodosContextProvider>
  )
}


describe('TodoList', () => {

  it('should not be expanded when page loads', async () => {
    render(<MockTodoList />)
    const expandableListElement = screen.getByTestId("expandable-list")
    expect(expandableListElement).not.toBeVisible()
  })

  it('should be expanded when chevron is clicked', async () => {
    render(<MockTodoList />)
    const expandableListElement = screen.getByTestId("expandable-list")
    const chevron = screen.getByTestId("chevron")
    fireEvent.click(chevron)
    expect(expandableListElement).toBeVisible()
  })

  it('should have the expand class when clicked', async () => {
    render(<MockTodoList />)
    const expandableListElement = screen.getByTestId("expandable-list")
    const chevron = screen.getByTestId("chevron")
    fireEvent.click(chevron)
    expect(expandableListElement).toHaveClass('expand')
  })

})