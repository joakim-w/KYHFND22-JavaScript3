import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: crypto.randomUUID(),
      title: 'My First Post',
      body: 'This is my first post evvah!'
    },
    {
      id: crypto.randomUUID(),
      title: 'My Second Post',
      body: 'This is my second post'
    },
    {
      id: crypto.randomUUID(),
      title: 'My Third Post',
      body: 'This is my third post'
    },
  ])

  const addPost = (title, body) => {
    const post = {
      id: crypto.randomUUID(),
      title,
      body
    }

    setPosts(prevPosts => [...prevPosts, post])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Posts posts={posts} />} />
          <Route path='create' element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App