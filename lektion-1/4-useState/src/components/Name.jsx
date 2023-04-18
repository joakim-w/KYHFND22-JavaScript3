import { useState } from 'react'

const Name = () => {

  const [firstName, setFirstName] = useState('Joakim')
  const [lastName, setLastName] = useState('Wahlström')

  // const [fullName, setFullName] = useState(firstName + ' ' + lastName)

  // Om ett värde är beroende av ett (eller flera) andra State, så kan vi oftast göra det som en const istället
  const fullName = firstName + ' ' + lastName

  return (
    <div>
      <button onClick={() => {
        setLastName('Lindh')
      }}>Change name</button>

      <p>{firstName} {lastName}</p>
      <p>{fullName}</p>
    </div>
  )
}

export default Name