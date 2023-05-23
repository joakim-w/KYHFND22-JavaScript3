import { render, screen } from "@testing-library/react"
import AsyncTodoList from "../AsyncTodoList"
import { vi } from "vitest"

// här skriver vi över fetch med en tom funktion, vi behöver skriva global för testet körs inte i webbläsaren
global.fetch = vi.fn()

// skapar en likadan struktur som vi får tillbaka av fetch. dvs så vi kan köra res.json()
const createFetchResponse = (data) => {
  return {
    json() {
      return new Promise((resolve) => resolve(data))
    }
  }
}

describe('AsyncTodoList', () => {

  const todoResponse = [
    {
      id: 1,
      title: 'Async todo 1'
    },
    {
      id: 2,
      title: 'Async todo 2'
    },
    {
      id: 3,
      title: 'Async todo 3'
    },
    {
      id: 4,
      title: 'Async todo 4'
    },
    {
      id: 5,
      title: 'Async todo 5'
    }
  ]
  fetch.mockResolvedValue(createFetchResponse(todoResponse))


  it('should make GET request to fetch the todos and limit the response to 10', async () => {
    render(<AsyncTodoList />)

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos?_limit=10')
  })


  it('should render todos after load', async () => {
    render(<AsyncTodoList />)
    // const todos = screen.getAllByTestId('async-todo') // Det här fungerar inte för elementen tar en stund att laddas in
    const todos = await screen.findAllByTestId('async-todo')
    // screen.debug()
    expect(todos.length).toBeGreaterThan(0)
  })

})