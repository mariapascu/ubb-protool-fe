import { connect } from 'react-redux';
import Login from '../components/login/Login';
import {addUser} from '../actions';

const mapDispatchToProps = dispatch => ({
 addUser: (user) => {
 dispatch(addUser(user));
 //dispatch(navigateTo({ routeName: 'messagesList' }));
 },

});

export default connect(null, mapDispatchToProps)(Login);