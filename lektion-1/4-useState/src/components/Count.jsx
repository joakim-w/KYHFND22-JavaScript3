import { useState } from 'react'


const Count = () => {
    // let count = 0
    const [count, setCount] = useState(0)
  
    const increment = () => {
      // Set funktionen har som uppgift att uppdatera värdet OCH
      // säga åt react att rendera om komponenten
      // setCount(3)
      // setCount(count + 1)
      console.log(count)
  

      // Om ett state ska uppdateras med hjälp av det gamla värdet så ska vi ALLTID använda en callback funktion
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
  
    }
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    )
}

export default Count