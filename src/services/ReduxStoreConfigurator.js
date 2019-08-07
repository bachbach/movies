import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from 'ducks/index'

class ReduxStoreConfigurator {
  constructor () {
    this.middlewares = [thunkMiddleware]
    if (process.env.NODE_ENV === 'development') {
      this.middlewares.push(createLogger())
    }
  }

  configureStore (initialState) {
    this.store = createStore(
      rootReducer,
      applyMiddleware(...this.middlewares),
      initialState
    )

    return this.store
  }
}

export default new ReduxStoreConfigurator()
