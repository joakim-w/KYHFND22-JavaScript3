import React from 'react'
import { Form, json, useActionData, useNavigation } from 'react-router-dom'
import { createPost } from '../helpers/apiService'

const Create = () => {

  const actionData = useActionData()
  const navigation = useNavigation()

  return (
    <div className='create'>
      <h1>Add a new post</h1>
      <Form method='POST'>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id='title' />
        {actionData && <p className='error'>{actionData.message}</p>}
        </div>
        <button disabled={navigation.state === 'submitting'} className='btn btn-primary'>{navigation.state === 'submitting' ? 'SUBMITTING..' : 'ADD' }</button>
      </Form>
    </div>
  )
}

export const action = (user) => async ({request}) => {
  const data = await request.formData()
  const post = {
    userId: user?.user.id,
    title: data.get('title').trim(),
    completed: false
  }
  if(post.title == '') {
    return json({ message: 'You need to enter some text'})
  }

  return createPost(post)
}

export default Create