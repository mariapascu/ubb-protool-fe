import { connect } from 'react-redux';
import {addUser, logoutUser} from '../actions';
import ProfileStudent from "../components/profile/profileStudent/ProfileStudent";

export function mapStateToProps(state) {
    return { loggedUser: state.user.loggedUser }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStudent);
