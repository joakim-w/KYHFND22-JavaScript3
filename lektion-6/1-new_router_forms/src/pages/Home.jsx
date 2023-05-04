import React, { Suspense } from 'react'
import { Await, defer, redirect, useLoaderData } from 'react-router-dom'
import { getPosts, getSlowPosts } from '../helpers/apiService'

const Home = ({ user }) => {

  const loaderData = useLoaderData()

  console.log(loaderData)

  return (
    <div>
      <h2>Welcome back {user && user.user.firstName}</h2>
      {/* <ul className="todo-list">
        {
          loaderData.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul> */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.posts} errorElement={<p>Error loading the posts</p>}>
          {
            (loadedPosts) => {
              console.log(loadedPosts)
              return loadedPosts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))
              }
          }
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.slow} errorElement={<p>Error loading the posts</p>}>
          {
            (loadedPosts) => {
              console.log(loadedPosts)
              return loadedPosts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))
              }
          }
        </Await>
      </Suspense>
    </div>
  )
}


export const loader = (user) => async ({ request, params }) => {
  if(!user) return redirect('/login')

  // return getPosts(user?.user.id)
  return defer({ posts: getPosts(user?.user.id), slow: getSlowPosts(user?.user.id) })
}

export default Home