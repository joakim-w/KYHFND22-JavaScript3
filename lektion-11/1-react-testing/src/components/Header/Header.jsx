import './Header.scss'

const Header = ({ title }) => {
  return (
    <div className='header card'>
      <h1 className='heading'>{ title }</h1>
      <h4>subtitle</h4>
    </div>
  )
}

export default Header