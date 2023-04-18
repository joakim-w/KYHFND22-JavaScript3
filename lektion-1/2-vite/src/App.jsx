import Person from "./components/Person"

function App() {

  const handleClick = (name) => {
    console.log('yaay '+ name +' klickade')
  }

  const name = 'Nisse'
  
  return (
    <div>
      <h1>hej</h1>
      <button onClick={() => console.log('tjoho')}>Tryck här</button>
      <p>{ name }</p>
      <br />
      <Person name={name} age={36} />
      <Person name="Hans" age="39" />
      <Person name="Jeanette" age="36" />
    </div>
  )
}

export default App