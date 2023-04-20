import { useState } from 'react'
import ToggleButton from './components/ToggleButton'

const App = () => {

  const [numbersArray, setNumbersArray] = useState([0])
  const [count, setCount] = useState(numbersArray.length) // 6

  const add = () => {
    const nextNumber = count
    setNumbersArray(prevNumbers => [nextNumber, ...prevNumbers])
    setCount(nextNumber + 1)
  }


  return (
    <div className='container'>
      <button className="btn" onClick={add}>Add button</button>
      <br />
      <br />

      {
        numbersArray.map((number, index) => (
          // <ToggleButton number={number} key={index} />

          // ALLTID när vi loopar ut någonting så vill vi ha ett unikt värde i key={}. INTE index
          <ToggleButton number={number} key={number} />
        ))
      }
    </div>
  )
}

export default App