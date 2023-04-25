import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = () => {

  const [change, setChange] = useState(true)

  return (
    <div className='ListItem'>

      { change
      ? <ChangeItem />
      : <p className='title completed'>Mjölk</p>
      }

      
      <div className='quantity'>
        <button className='btn q-btn'><i class="fa-solid fa-minus"></i></button>
        <span>2</span>
        <button className='btn q-btn'><i class="fa-solid fa-plus"></i></button>
      </div>
      <div className="buttons">
        <button className='btn btn-change'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-delete'><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem