import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import ProfileTeacher from "../components/profile/profileTeacher/ProfileTeacher";

export function mapStateToProps(state) {
    return { loggedUser: state.user.loggedUser }
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTeacher);
