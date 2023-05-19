import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0
}

// const item = {
//   product: { id, name, imageURL },
//   quantity: 1
// }


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemRef = state.cart.find(item => item.product.id === action.payload.id)

      itemRef
      ? itemRef.quantity += 1
      : state.cart = [...state.cart, { product: action.payload, quantity: 1 }]
      
    }
  }
})

export const { addToCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer