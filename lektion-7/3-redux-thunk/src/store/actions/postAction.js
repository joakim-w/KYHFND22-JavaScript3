import axios from 'axios'

import {
  CLEAR_POST,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POST_SUCCESS,
} from '../actiontypes'


export const loadPost = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOAD_POST })

    try {
      const res = await axios.get('http://localhost:3000/posts/' + id)
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
    type: LOAD_POST_SUCCESS,
    payload
  }
}

const error = (payload) => {
  return {
    type: LOAD_POST_ERROR,
    payload
  }
}

export const clearPost = () => {
  return {
    type: CLEAR_POST
  }
}