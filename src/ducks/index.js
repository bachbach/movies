import { combineReducers } from 'redux'
import user from './user'
import errors from './errors'
import movies from './movies'

const appReducer = combineReducers({
  user,
  errors,
  movies
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
