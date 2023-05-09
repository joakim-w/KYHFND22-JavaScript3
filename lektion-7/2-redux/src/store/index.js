import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counterReducer'
import quantityReducer from './reducers/quantityReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  quantity: quantityReducer
})

export const store = createStore(
  rootReducer
)