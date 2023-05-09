import { COUNTER } from "../actiontypes"

export const increment = () => {
  return {
    type: COUNTER.increment
  }
}
export const decrement = () => {
  return {
    type: COUNTER.decrement
  }
}