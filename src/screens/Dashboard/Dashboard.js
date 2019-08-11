import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from 'connectors/Navbar'
import Movies from 'connectors/Movies'
import Movie from 'connectors/Movie'

const Dashboard = () => {
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

export default Dashboard