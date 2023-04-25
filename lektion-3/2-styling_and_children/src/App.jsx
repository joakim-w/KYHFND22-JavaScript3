import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList/BlogList'
import Title from './components/Title/Title'
import Modal from './components/Modal/Modal'

const App = () => {

  const [showModalOne, setShowModalOne] = useState(true)

  const handleClose = () => {
    setShowModalOne(false)
  }
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'My first Blog', body: 'bla blöa kbasjd lkasd jlkais lksaj'},
    { id: 2, title: 'How to use React', body: 'bla blöa kbasjd lkasd jlkais lksaj'},
    { id: 3, title: 'CSS Wizardry', body: 'bla blöa kbasjd lkasd jlkais lksaj'},
  ])

  return (
    <div className='App'>
      <Title />
      <div className="container">
        <BlogList blogs={blogs} />

        <div className="mt">
          <button onClick={() => setShowModalOne(true)}>Show Modal 1</button>
        </div>

        {showModalOne && <Modal handleClose={handleClose} />}
      </div>
    </div>
  )
}

export default App