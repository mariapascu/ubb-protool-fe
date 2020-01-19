import React from 'react';
import {connect} from 'react-redux'


import NavBarTeacher from '../navbar/NavBarTeacher'

import './teacherHome.css';
import TeacherCalendar from "../../containers/TeacherCalendar";


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
    componentDidMount() {
        if (this.props.loggedUser.firstname===undefined){
            this.props.history.push('/login')
        }
    }

    logout = (e) => {
        this.props.logout();
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <NavBarTeacher logoutFct={this.logout}/>
                <TeacherCalendar></TeacherCalendar>

            </div>
        )
    }

}

export default connect()(TeacherHome);


