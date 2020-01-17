import React from 'react'
import './App.css';
import Login from '../containers/Login'

import {
  Route,

  Switch,
} from 'react-router-dom';
import UserHomeC from "../containers/UserHomeC";
import Register from "../containers/Register";
import MessagesPageTeacher from "./message/MessagesPageTeacher";
import TeachersTab from "./student/teacherTab/TeachersTab";
import Calendar from "./student/Calendar";
import TeacherHome from "../containers/TeacherHomeC"
import MessagesPageStudent from "./message/MessagesPageStudent";
import ProfileStudent from "./profile/profileStudent/ProfileStudent";

const App = () => (
  <div>
    
    <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={ProfileStudent} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/user"  component={UserHomeC} />
            <Route exact path="/teachersStudent" component={TeachersTab}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/teacher" component={TeacherHome} />
            <Route exact path="/cal" component={Calendar} />
            <Route exact path="/messagesTeacher" component={MessagesPageTeacher} />
            <Route exact path="/messagesStudent" component={MessagesPageStudent} />
          </Switch>
        </div>
  </div>
)

export default App
