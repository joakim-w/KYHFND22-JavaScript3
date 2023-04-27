import authService from "../services/authService";
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

  const location = useLocation()
  const autheticated = authService.isAuthenticated()

  // console.log(location)

  return autheticated 
  ? children
  : <Navigate to="/login" replace state={{ from: location.pathname }} />

}