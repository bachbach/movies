import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from 'connectors/Navbar'
import { Movies } from 'screens/Movies'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/movies' component={Movies}/>
        <Route path='/movies/:id' render={() => <div>here will be details</div>} />
      </Switch>
    </div>
  )
}

export default Dashboard