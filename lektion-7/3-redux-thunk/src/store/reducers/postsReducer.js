import {
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
} from '../actiontypes'


const initState = {
  posts: [],
  loading: false,
  error: null
}

const postsReducer = (state = initState, action) => {

  switch(action.type) {

    case LOAD_POSTS:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export default postsReducer