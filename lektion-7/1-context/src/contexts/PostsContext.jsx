import { createContext, useState } from "react";

export const PostsContext = createContext()


const PostsContextProvider = ({ children }) => {

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

  const value = {
    posts,
    addPost
  }
  return (
    <PostsContext.Provider value={value}>
      { children }
    </PostsContext.Provider>
  )
}

export default PostsContextProvider