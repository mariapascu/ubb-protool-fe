import React from 'react'
import './App.css';
import Home from './Home'
import Login from '../containers/Login'

import {
  Route,

  Switch,
} from 'react-router-dom';
import WelcomeUser from '../containers/WelcomeUser';

const App = () => (
  <div>
    
    <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Login} />
            <Route exact path="/welcomeUser"  component={WelcomeUser} />
          </Switch>
        </div>
  </div>
)

export default App
