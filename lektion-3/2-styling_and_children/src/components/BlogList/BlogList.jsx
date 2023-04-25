import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './BlogList.module.css'

const BlogList = ({ blogs }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {
        blogs.map(blog => (
          <div style={{position: 'relative'}} className={styles.card} key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button onClick={() => setShowModal(true)}>ta bort</button>
            { showModal && <Modal />}
          </div>
        ))
      }

    </div>
  )
}

export default BlogList