import { connect } from 'react-redux';
import Register from '../components/register/Register';
import {addUser} from "../actions";

const mapDispatchToProps = dispatch => ({
    addUser: (e,p) => {
        dispatch(addUser(e,p));
        //dispatch(navigateTo({ routeName: 'messagesList' }));
    },
});

export default connect(null, mapDispatchToProps)(Register);