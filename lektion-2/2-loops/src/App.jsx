import { useState } from 'react'
import Post from './components/Post/Post'

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam, saepe ea blanditiis atque nulla voluptates assumenda! Modi libero, ipsa eius quod quia delectus natus aperiam architecto. Ad, soluta mollitia!'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam, saepe ea blanditiis atque nulla voluptates assumenda! Modi libero, ipsa eius quod quia delectus natus aperiam architecto. Ad, soluta mollitia!'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam, saepe ea blanditiis atque nulla voluptates assumenda! Modi libero, ipsa eius quod quia delectus natus aperiam architecto. Ad, soluta mollitia!'
    }
  ])

  /*
  .map() -> returnerar någonting
  .forEach() -> returnerar ingenting
  */

  return (
    <div className='container'>
      {/* <Post post={posts[0]} />
      <Post post={posts[1]} />
      <Post post={posts[2]} /> */}

      {/* {
        posts.map((post, index) => {
          return <Post post={post} />
        })
      } */}

      {
        posts.map((post, index) => (
          <Post post={post} key={post.id} />
        ))
      }

    </div>
  )
}

export default App