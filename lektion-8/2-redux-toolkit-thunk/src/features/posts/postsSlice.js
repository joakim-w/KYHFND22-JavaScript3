import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postsService from "./postsService"

const initialState = {
  posts: [],
  error: null,
  loading: false
}

// det första argumenet i async funktionen är våran payload. har vi ingen payload
// så kan vi lägga in _
export const getAllPosts = createAsyncThunk('posts/getAll', async (_, thunkAPI) => {
  try {
    return await postsService.getAllAsync()
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
        state.error = null
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false
        state.posts = []
        state.error = action.payload
      })
  }
})


export default postsSlice.reducer