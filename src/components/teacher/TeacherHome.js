import React from 'react';
import {connect} from 'react-redux'

import NavBarTeacher from '../navbar/NavBarTeacher'

import './teacherHome.css';


const styles = {

    logoutButton: {
        float: "right",
        top: 0
    }
};

class TeacherHome extends React.Component {

    constructor(props) {
        super(props)

    }

    logout = (e) => {
        this.props.logout();
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <NavBarTeacher/>

            </div>
        )
    }

}

export default TeacherHome;


