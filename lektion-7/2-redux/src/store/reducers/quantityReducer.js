import { QUANTITY } from "../actiontypes"

const initState = {
  value: 1
}


const quantityReducer = (state = initState, action) => {

  switch(action.type) {

    case QUANTITY.increment:
      return {
        ...state,
        value: state.value + action.payload
      }

    case QUANTITY.decrement:
      return {
        ...state,
        value: state.value - action.payload
      }

    default:
      return state
  }
  
}

export default quantityReducer;