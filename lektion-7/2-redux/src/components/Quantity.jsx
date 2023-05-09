import React from 'react'
import { useSelector } from 'react-redux'

const Quantity = () => {

  const { value } = useSelector(state => state.quantity)

  return (
    <div>
      <h3>Quantity</h3>
      <p>quantity is = { value }</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default Quantity