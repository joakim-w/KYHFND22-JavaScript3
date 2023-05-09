import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar/Navbar'
import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import PostsContextProvider from './contexts/PostsContext'

const App = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <Navbar />
      <div className='bg' style={{
        background: theme.bg
      }}>
        <div className="container">
          <PostsContextProvider>
            <Routes>
              <Route index element={<Posts />} />
              <Route path='create' element={<CreatePost />} />
            </Routes>
          </PostsContextProvider>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App