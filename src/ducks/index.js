import { combineReducers } from 'redux'
import user from './user'
import errors from './errors'

const appReducer = combineReducers({
  user,
  errors
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
