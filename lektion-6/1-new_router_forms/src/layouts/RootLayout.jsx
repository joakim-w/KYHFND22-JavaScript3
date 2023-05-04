import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = ({ user, setUser }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout