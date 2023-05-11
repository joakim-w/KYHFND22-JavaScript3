import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Navbar from './components/Navbar/Navbar'
import PostDetails from './pages/PostDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App