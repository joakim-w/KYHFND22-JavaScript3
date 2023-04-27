import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/")
    // window.location.assign('https://www.google.com')
  }, 3000)

  return (
    <div>
      <h2>404, not found</h2>
    </div>
  )
}

export default NotFound