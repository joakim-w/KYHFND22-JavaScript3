import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"


const initialState = {
  user: null,
  loading: false,
  error: null,
  authIsReady: false
}

export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  try {
    return await authService.signup(formData.email, formData.password)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const loginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    return await authService.login(formData.email, formData.password)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await authService.logout()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const signInWithGoogle = createAsyncThunk('auth/google', async (_, thunkAPI) => {
  try {
    return await authService.signInWithGoogle()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    authReady: (state, action) => {
      state.user = action.payload
      state.authIsReady = true
    }
  },
  extraReducers: (builder) => {
    builder
      //Register
      .addCase(registerUser.pending, state => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Login
      .addCase(loginUser.pending, state => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      //Logout
      .addCase(logoutUser.fulfilled, state => {
        state.user = null
      })

      // Google
      .addCase(signInWithGoogle.pending, state => {
        state.loading = true
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { setError, authReady } = authSlice.actions

export default authSlice.reducer