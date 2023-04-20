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


  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // if(isLoggedIn === true) {
  //   // om det är sant
  // }

  // isLoggedIn === true  // condition
  // && // om det är sant



  


  // if(isLoggedIn) return (
    return (
    <div className='container'>
      {/* <Post post={posts[0]} />
      <Post post={posts[1]} />
      <Post post={posts[2]} /> */}

      {/* {
        posts.map((post, index) => {
          if(isLoggedIn)
            return <Post post={post} />
        })
      } */}

      <button onClick={() => setIsLoggedIn(state => !state)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

      {/* {
        isLoggedIn 
        ? posts.map((post, index) => (
          <Post post={post} key={post.id} />
        ))
        : <h1>not logged in</h1>
        
      } */}

      {
        isLoggedIn && posts.map(post => (
          <Post post={post} key={post.id} />
        ))
      }

    </div>
  )


  // return (
  //   <div className='container'>
  //     inte inloggad
  //   </div>
  // )
}

export default App