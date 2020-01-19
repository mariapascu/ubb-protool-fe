import {connect} from 'react-redux';
import {addUser, logoutUser} from '../actions';
import ProfileTeacher from "../components/profile/profileTeacher/ProfileTeacher";

export function mapStateToProps(state) {
    return {loggedUser: state.user.loggedUser}
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
    addUser: (user) => {
        dispatch(addUser(user));
        //dispatch(navigateTo({ routeName: 'messagesList' }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTeacher);
