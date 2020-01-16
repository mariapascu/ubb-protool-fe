import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import TeacherHome from "../components/teacher/TeacherHome";

export function mapStateToProps(state) {
    console.log(state.user)
    return { loggedUser: state.user.loggedUser }
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHome);