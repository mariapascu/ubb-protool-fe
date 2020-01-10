import React from 'react';
import {connect} from 'react-redux'
import NavbarStudent from '../navbar/NavbarStudent'
import NavBarTeacher from '../navbar/NavBarTeacher'
import Message from "../message/Message";
import './UserHome.css';

const styles = {

    logoutButton: {
        float: "right",
        top: 0
    }
};

class UserHome extends React.Component {

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
                <NavbarStudent/>

                <div className="pageContent">
                    <Message changeStatus={"Pending"}
                             studentName={"Cezar Olteanu"}
                             subjectName={"MPP"}
                             fromDate={"Miercuri 16:00"}
                             toChangedDate={"Joi 13:00"}
                             subjectType={"Laboratory"}
                             studentGroup={"935/2"}/>
                </div>
            </div>
        )
    }

}

export default connect()(UserHome);


