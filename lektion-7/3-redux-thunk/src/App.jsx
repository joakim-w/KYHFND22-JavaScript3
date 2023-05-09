import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App