import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const productListSlice = createSlice({
  name: 'Product-list',
  initialState,
  reducers: {},
  extraReducers: () => {}
})

export default productListSlice.reducer