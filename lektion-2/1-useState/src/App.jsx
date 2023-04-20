import { useState } from "react"

const App = () => {

  let name = 'Joakim'
  // let counter = 0
  
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    // counter += 1

    // Denna används om vi sätter ett fast värde
    // setCounter(10)

    // Denna används om vi räknar ut värdet
    setCounter((previousValue) => {
      return previousValue + 1
    })
  }

  return (
    <>
      <h1>{name}</h1>

      <button onClick={incrementCounter}>cliked {counter} times</button>
    </>
  )
}

export default App