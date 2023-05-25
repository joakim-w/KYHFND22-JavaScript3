import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const Create = () => {

  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [quill, setQuill] = useState()
  const [title, setTitle] = useState('')

  const qWrapper = useCallback(wrapper => {
    if(wrapper == null) return

    const TOOLBAR_OPTIONS = [
      ['bold', 'italic', 'underline'],
      ['image'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'] 
    ]

    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } })
    setQuill(q)
  }, [])


  const handleSubmit = async e => {
    e.preventDefault()

    const post = {
      title,
      postHTML: quill.root.innerHTML
    }

    try {

      const token = localStorage.getItem('accessToken')

      if(!token) {
        throw new Error('you need to be logged in to create a post')
      }
      
      const res = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        }
      })

      if(res.status !== 201) {
        const error = await res.json()
        console.log(error)
        throw new Error(error.message)
      }

      setError(null)
      navigate('/')

    } catch (err) {
      console.log(err.message)
      setError(err.message)
    }

  }

  return (
    <form onSubmit={handleSubmit} className='create-form'>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id='title' value={title} onChange={e => setTitle(e.target.value)} />
      </div>

      <div id='q-wrapper' ref={qWrapper}></div>

      { error && <p className='error'>{ error }</p> }
      <button className="btn">Send</button>

    </form>
  )
}

export default Create