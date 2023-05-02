import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = ({ user }) => {

  console.log(user)

  if(user == null) {
    return <Navigate to="/login" replace state={{ from: location.pathname }}/>
  }

  return (
    <div>
      <h2>Welcome back {user && user.user.firstName}</h2>
    </div>
  )
}

export default Home