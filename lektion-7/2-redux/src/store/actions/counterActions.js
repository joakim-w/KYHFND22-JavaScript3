import { COUNTER } from "../actiontypes"

export const increment = () => {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(res => res.json())
  //   .then(data => {
      
  //   })
  return {
    type: COUNTER.increment
  }
}
export const decrement = () => {
  return {
    type: COUNTER.decrement
  }
}