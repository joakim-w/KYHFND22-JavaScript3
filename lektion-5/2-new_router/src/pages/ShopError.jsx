import React from 'react'
import { useRouteError } from 'react-router-dom'

const ShopError = () => {
  const error = useRouteError()
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  )
}

export default ShopError