import {
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
} from '../actiontypes'


export const loadPosts = () => {
  return async (dispatch) => {
    dispatch({ type: LOAD_POSTS })


    // tbd hämta alla posts

  }
}


