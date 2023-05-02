import React from 'react'
import { Navigate } from 'react-router-dom'

const Create = ({ user }) => {

  if(user == null) {
    return <Navigate to="/login" replace state={{ from: location.pathname }}/>
  }

  return (
    <div>Create</div>
  )
}

export default Create