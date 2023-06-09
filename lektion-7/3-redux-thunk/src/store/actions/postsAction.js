import axios from 'axios'

import {
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
} from '../actiontypes'


export const loadPosts = () => {
  return async (dispatch) => {
    dispatch({ type: LOAD_POSTS })

    try {
      const res = await axios.get('http://localhost:3000/posts')
      if(!res.data) throw new Error('Something went wrong')
      
      setTimeout(() => {
        dispatch(success(res.data))
      }, 500)
      
    } catch (err) {
      console.log(err)

      dispatch(error(err.message))
    }
  }
}


const success = (payload) => {
  return {
    type: LOAD_POSTS_SUCCESS,
    payload
  }
}

const error = (payload) => {
  return {
    type: LOAD_POSTS_ERROR,
    payload
  }
}