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
import TeachersTab from "./student/teacherTab/TeachersTab";
import Calendar from "./student/Calendar";
import TeacherHome from "./teacher/TeacherHome";
import Changelist from "./schedule/Changelist";

const App = () => (
  <div>
    
    <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Login} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/user"  component={UserHome} />
            <Route exact path="/teachersStudent" component={TeachersTab}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/teacher" component={TeacherHome} />
            <Route exact path="/cal" component={Calendar} />
            <Route exact path="/changelist" component={Changelist}/>
          </Switch>
        </div>
  </div>
)

export default App
