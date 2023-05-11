import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import singlePostReducer from '../features/posts/singlePostSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer, 
    singlePost: singlePostReducer
  }
})