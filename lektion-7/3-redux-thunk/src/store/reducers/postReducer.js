import {
  CLEAR_POST,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POST_SUCCESS,
} from '../actiontypes'


const initState = {
  post: null,
  loading: false,
  error: null
}

const postReducer = (state = initState, action) => {

  switch(action.type) {

    case LOAD_POST:
      return {
        ...state,
        loading: true
      }

    case LOAD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: null
      }

    case LOAD_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case CLEAR_POST:
      // return initState
      return {
        ...state,
        post: null
      }

    default:
      return state
  }
}

export default postReducer