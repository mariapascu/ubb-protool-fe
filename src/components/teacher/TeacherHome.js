import React from 'react';
import {connect} from 'react-redux'


import NavBarTeacher from '../navbar/NavBarTeacher'

import './teacherHome.css';
import TeacherCalendar from "./TeacherCalendar";
import Container from "@material-ui/core/Container";

class TeacherHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedUser: props.loggedUser
        };
       console.log(this.props.loggedUser)

    }
    // componentDidMount() {
    //     console.log(this.state.loggedUser.firstname + "SUNT IN TEACHER COMPONENT");
    //     if (this.state.loggedUser.firstname === undefined){
    //         this.props.history.push('/login')
    //     }
    // }

    logout = (e) => {
        this.props.logout();
        this.props.history.push('/login')
    };

    render() {
        return (
            <div>
                <NavBarTeacher logoutFct={this.logout}/>
                <Container>
                </Container>
            </div>
        )
    }

}
//<TeacherCalendar loggedUser = {this.state.loggedUser}></TeacherCalendar>

export default connect()(TeacherHome);


