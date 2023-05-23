import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {

  it('renders the same headline passed as props', async () => {
    render(<Header title="My Title" />)
    const headingElement = screen.getByText(/My title/i)
    expect(headingElement).toBeInTheDocument();
  })

  // Den här failar för att den hittar flera heading element
  // it('renders the same headline passed as props', async () => {
  //   render(<Header title="My Title" />)
  //   const headingElement = screen.getByRole('heading')
  //   expect(headingElement).toBeInTheDocument();
  // })

  it('renders the same headline passed as props', async () => {
    render(<Header title="My Title" />)
    const headingElement = screen.getByRole('heading', { name: /My title/i })
    expect(headingElement).toBeInTheDocument();
  })



  // FIND by är async och behöver await. Bra om vi ska vänta på svar från en databas tex
  it('renders the same headline passed as props', async () => {
    render(<Header title="My Title" />)
    const headingElement = await screen.findByText(/My title/i)
    expect(headingElement).toBeInTheDocument();
  })
  

  // QUERY by, ger oss inte ett error om vi inte hittar elementet. Bra om vi tex vill kolla om ett element INTE finns
  it('renders the same headline passed as props', async () => {
    render(<Header title="My Title" />)
    const headingElement = screen.queryByText("nisse")
    expect(headingElement).not.toBeInTheDocument();
  })


  // Alla metoder finns som en ALL variant och då får vi en array tillbaka
  it('should render 2 heading elements', async () => {
    render(<Header title="My Title" />)
    const headingElements = screen.getAllByRole('heading')
    expect(headingElements.length).toBe(2)
  })
})