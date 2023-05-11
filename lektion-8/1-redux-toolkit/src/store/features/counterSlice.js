import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Här kan vi mutera vårat state direkt, Immer sköter det i bakgrunden åt oss
      state.value += 1
    },
    decrement: (state, action) => {
      console.log(action)
      state.value -= action.payload
    }
  }
})

// Här skapas våra actions utifrån reducers i slicen
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer


// Redux toolkit kommer att skapa våra actioncreators åt oss, så vi behöver ingen actiontypes
// {
//   type: 'counter/increment'
// }