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
import TeacherHomeC from "../containers/TeacherHomeC"
import MessagesPageStudent from "./message/MessagesPageStudent";
import ProfileStudentC from "../containers/ProfileStudentC";
import ProfileTeacherC from "../containers/ProfileTeacherC";

const App = () => (
    <div>
        <div className="App-intro">
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/user" component={UserHomeC}/>
                <Route exact path="/profileStudent" component={ProfileStudentC}/>
                <Route exact path="/profileTeacher" component={ProfileTeacherC}/>
                <Route exact path="/teachersStudent" component={TeachersTab}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/teacher" component={TeacherHomeC}/>
                <Route exact path="/cal" component={Calendar}/>
                <Route exact path="/messagesTeacher" component={MessagesPageTeacher}/>
                <Route exact path="/messagesStudent" component={MessagesPageStudent}/>
            </Switch>
        </div>
    </div>
)

export default App
