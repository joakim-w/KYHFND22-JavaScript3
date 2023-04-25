import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList/BlogList'
import Title from './components/Title/Title'
import Modal from './components/Modal/Modal'
import SplitModal from './components/Modal/SplitModal'

const App = () => {

  const [showModalOne, setShowModalOne] = useState(false)
  const [showModalTwo, setShowModalTwo] = useState(false)

  const handleClose = () => {
    setShowModalOne(false)
    setShowModalTwo(false)
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
          <button onClick={() => setShowModalTwo(true)}>Show Modal 2</button>
        </div>

        {showModalOne &&
        <Modal handleClose={handleClose}>
          <h2>Cookies</h2>
          <p>Varsågod, ta en kaka</p>
        </Modal> }

        { showModalTwo &&
          <Modal handleClose={handleClose} sale={true}>
            <h2>Super sale</h2>
            <p>reklam grejer</p>
          </Modal>
        }

        {/* <SplitModal left={ <>
          <p>Det här ligger till vänster</p>
          <p>det här också</p>
        </> }
        right={ <p>Det här ligger till höger</p>} /> */}
      </div>
    </div>
  )
}

export default App