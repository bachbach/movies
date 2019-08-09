import React, { Component } from 'react'
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import storeConfigurator from 'services/ReduxStoreConfigurator'
import { Login } from 'screens/Login'
import PrivateRoute from 'connectors/PrivateRoute'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

class Router extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path="/" component={() => <div>HOME PAGE</div>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router