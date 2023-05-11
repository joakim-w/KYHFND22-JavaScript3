import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postsService from "./postsService"

const initialState = {
  post: null,
  error: null,
  loading: false
}


export const getPostById = createAsyncThunk('singlePost/getById', async (postId, thunkAPI) => {
  try {
    return await postsService.getByIdAsync(postId)
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostById.pending, (state) => {
        state.loading = true
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
        state.error = null
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.loading = false
        state.post = null
        state.error = action.payload
      })
  }
})


export const { clearPost } = singlePostSlice.actions

export default singlePostSlice.reducer