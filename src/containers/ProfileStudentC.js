import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import ProfileStudent from "../components/profile/profileStudent/ProfileStudent";

export function mapStateToProps(state) {
    return { loggedUser: state.user.loggedUser }
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStudent);
