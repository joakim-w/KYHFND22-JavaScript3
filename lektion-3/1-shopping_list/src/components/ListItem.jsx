import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = ({ item }) => {

  const [change, setChange] = useState(false)

  const toggleChange = () => {
    setChange(change => !change)
  }

  return (
    <div className='ListItem'>

      { change
      ? <ChangeItem />
      : <p className={`title ${item.completed && 'completed'}`}>{item.product}</p>
      }

      
      <div className='quantity'>
        <button className='btn q-btn'><i className="fa-solid fa-minus"></i></button>
        <span>{item.quantity}</span>
        <button className='btn q-btn'><i className="fa-solid fa-plus"></i></button>
      </div>
      <div className="buttons">
        <button className='btn btn-change' onClick={toggleChange} ><i className="fa-solid fa-pen"></i></button>
        <button className='btn btn-delete'><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem