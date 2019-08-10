import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from 'connectors/Navbar'
import Movies from 'connectors/Movies'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/movies/:id' render={() => <div>here will be details</div>} />
      </Switch>
    </div>
  )
}

export default Dashboard