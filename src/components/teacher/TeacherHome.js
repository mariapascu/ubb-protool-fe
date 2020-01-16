import React from 'react';
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from "../../containers/TeacherHomeC";

import NavBarTeacher from '../navbar/NavBarTeacher'

import './teacherHome.css';
import Calendar from "../student/Calendar";
import TeacherCalendar from "./TeacherCalendar";


const styles = {

    logoutButton: {
        float: "right",
        top: 0
    }
};

class TeacherHome extends React.Component {

    constructor(props) {
        super(props)
       console.log(this.props.loggedUser)

    }

    logout = (e) => {
        this.props.logout();
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <NavBarTeacher/>
                <TeacherCalendar></TeacherCalendar>
                
            </div>
        )
    }

}

export default connect()(TeacherHome);


