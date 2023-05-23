const { render, screen } = require("@testing-library/react")
import TodosLeft from '../TodosLeft'


describe('TodosLeft', () => {

  it('should render the correct amount of todos left', async () => {
    render(<TodosLeft amount={3} />)
    const pElement = screen.getByText("3 todos left")
    expect(pElement).toBeInTheDocument();
  })

  it('should render "todo" when there is only one todo left', async () => {
    render(<TodosLeft amount={1} />)
    const pElement = screen.getByText("1 todo left")
    expect(pElement).toBeInTheDocument();
  })

})