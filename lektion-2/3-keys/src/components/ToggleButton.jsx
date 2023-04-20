import { useState } from 'react'

const ToggleButton = ({number}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(state => !state)
  }

  return (
    <div className='ToggleButton'>
      <button className={`btn ${isOpen && 'btn-outline'}`} onClick={handleToggle}>button nr {number}</button>

      {
        isOpen && (
          <div className='expandable'>
            <p>expandable content</p>
          </div>
        )
      }

    </div>
  )
}

export default ToggleButton