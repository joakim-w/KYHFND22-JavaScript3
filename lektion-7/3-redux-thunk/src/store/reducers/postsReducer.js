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

    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      }

    case LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default postsReducer