import './Post.css'

const Post = ({post}) => {
  return (
    <div className='Post'>
      <div className='card mb-1'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post