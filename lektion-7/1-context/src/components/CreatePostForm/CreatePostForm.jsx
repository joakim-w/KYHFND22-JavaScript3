import './CreatePostForm.css'

const CreatePostForm = () => {
  return (
    <form className='create-post'>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Title: </label>
        <input type="text" className="form-control" name='title' id='title' />
      </div>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Body: </label>
        <textarea name="body" id="body" className='form-control' ></textarea>
      </div>
      <button className='btn btn-primary'>Create Post</button>
    </form>
  )
}

export default CreatePostForm