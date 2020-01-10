import React from 'react'
import './App.css';
import Home from './Home'
import Login from '../containers/Login'

import {
  Route,

  Switch,
} from 'react-router-dom';
import UserHome from "./student/UserHome";
import Register from "../containers/Register";
import TeacherHome from "./teacher/TeacherHome";

const App = () => (
  <div>
    
    <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/user"  component={UserHome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/teacher" component={TeacherHome} />
          </Switch>
        </div>
  </div>
)

export default App
