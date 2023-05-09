import { QUANTITY } from "../actiontypes";

export const increment = (amount) => {
  return {
    type: QUANTITY.increment,
    payload: amount
  }
}

export const decrement = (amount) => {
  return {
    type: QUANTITY.decrement,
    payload: amount
  }
}