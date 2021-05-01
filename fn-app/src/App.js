import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute  path="/login" component={Login} />
            <PrivateRoute  path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
