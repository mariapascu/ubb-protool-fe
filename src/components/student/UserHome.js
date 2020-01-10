import React from 'react';
import { connect } from 'react-redux'
import {Button, Typography} from '@material-ui/core';

import MenuListComposition from './Menu'




const styles = {

    logoutButton: {
        float: "right",
        top:0
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



    render(){
        return(
            <div>
                <Button onClick={this.logout} style={styles.logoutButton} variant="contained" color="secondary">
                    Logout
                </Button>
                <Typography variant="h4" gutterBottom>
                    Welcome {this.props.email}!
                </Typography>

                <MenuListComposition></MenuListComposition>

            </div>
        )
    }

}

export default connect()(UserHome);


