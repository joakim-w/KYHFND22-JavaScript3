
const getAllAsync = async () => {
  const res = await fetch('http://localhost:3000/posts')
  if(!res.ok) throw new Error('Something went wrong')
  return res.json()
}

const getByIdAsync = async (postId) => {
  const res = await fetch('http://localhost:3000/posts/' + postId)
  if(!res.ok) throw new Error('Something went wrong')
  return res.json()
}





const postsService = {
  getAllAsync,
  getByIdAsync
}

export default postsService