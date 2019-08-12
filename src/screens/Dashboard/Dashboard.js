import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Navbar from 'connectors/Navbar'
import Movies from 'connectors/Movies'
import Movie from 'connectors/Movie'
import { APIInterceptor } from 'services/APIInterceptor'

const Dashboard = props => {
  const logout = () => {
    props.logout()
    props.history.push('/login')
  }

  useEffect(() => {
    APIInterceptor.events.on('authorizationError', logout)
  }, [])

  return (
    <div>
      <Navbar />
      <Switch>
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