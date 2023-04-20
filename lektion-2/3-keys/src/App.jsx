import { useState } from 'react'
import ToggleButton from './components/ToggleButton'

const App = () => {

  const [numbersArray, setNumbersArray] = useState([0])
  const [count, setCount] = useState(0)

  const add = () => {
    const nextNumber = count + 1
    setNumbersArray(prevNumbers => [...prevNumbers, nextNumber])
    setCount(nextNumber)
  }

  return (
    <div className='container'>
      <button className="btn" onClick={add}>Add button</button>
      <br />
      <br />

      {
        numbersArray.map((number, index) => (
          <ToggleButton number={number} />
        ))
      }
    </div>
  )
}

export default App