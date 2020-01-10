import React from 'react'
import './App.css';
import Home from './Home'
import Login from '../containers/Login'

import {
  Route,

  Switch,
} from 'react-router-dom';
import UserHome from "./student/UserHome";
import TeacherCard from "./student/teacherTab/TeacherCard";

const App = () => (
  <div>
    
    <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={TeacherCard} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/user"  component={UserHome} />
          </Switch>
        </div>
  </div>
)

export default App
