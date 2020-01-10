import React from 'react';
import {connect} from 'react-redux'
import NavbarStudent from '../navbar/NavbarStudent'
import NavBarTeacher from '../navbar/NavBarTeacher'

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
            </div>
        )
    }

}

export default connect()(UserHome);


