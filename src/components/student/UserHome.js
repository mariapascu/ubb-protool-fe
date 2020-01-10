import React from 'react';
import {connect} from 'react-redux'
import NavBar from '../navbar/Navbar'

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
                <NavBar/>
            </div>
        )
    }

}

export default connect()(UserHome);


