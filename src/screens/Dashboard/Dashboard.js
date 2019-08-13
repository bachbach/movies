import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from 'connectors/Navbar'
import Movies from 'connectors/Movies'
import Movie from 'connectors/Movie'
import { APIInterceptor } from 'services/APIInterceptor'
import './Dashboard.scss'

const Dashboard = props => {
  const logout = () => {
    props.logout()
    props.history.push('/login')
  }

  useEffect(() => {
    APIInterceptor.events.on('authorizationError', logout)

    return () => APIInterceptor.events.off('authorizationError')
  }, [])

  return (
    <div className="dashboard">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/movies' />} />
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/movies/:id' component={Movie} />
      </Switch>
    </div>
  )
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Dashboard