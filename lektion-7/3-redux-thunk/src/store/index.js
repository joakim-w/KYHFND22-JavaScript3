import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'
import postReducer from './reducers/postReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer
})

export const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)