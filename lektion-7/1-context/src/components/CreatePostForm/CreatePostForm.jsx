import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePostForm.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { usePostsContext } from '../../hooks/usePostsContext'

const CreatePostForm = () => {

  const { theme } = useContext(ThemeContext)
  const { addPost } = usePostsContext()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const navigate = useNavigate()

  const handleSub = e => {
    e.preventDefault()
    // Validering
    addPost(title, body)
    navigate('/')
  }

  return (
    <form className='create-post' onSubmit={handleSub} style={{ color: theme.text }}>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Title: </label>
        <input style={{ color: theme.text, background: theme.bg }} type="text" className="form-control" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Body: </label>
        <textarea name="body" id="body" className='form-control' value={body} onChange={e => setBody(e.target.value)} ></textarea>
      </div>
      <button className='btn btn-primary'>Create Post</button>
    </form>
  )
}

export default CreatePostForm