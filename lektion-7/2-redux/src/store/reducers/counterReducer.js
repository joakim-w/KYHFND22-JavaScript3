import { COUNTER } from "../actiontypes"

const initState = {
  value: 9
}

// const action = {
//   type: 'increment',
//   payload: 1
// }
// const action = {
//   type: 'decrement',
//   payload: 1
// }

const counterReducer = (state = initState, action) => {

  switch(action.type) {

    case COUNTER.increment:
      return {
        ...state,
        value: state.value + 1
      }

    case COUNTER.decrement:
      return {
        ...state,
        value: state.value - 1
      }

    default:
      return state
  }
  
}

export default counterReducer;