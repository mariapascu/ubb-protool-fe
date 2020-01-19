import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import TeacherCalendar from "../components/teacher/TeacherCalendar";

export function mapStateToProps(state) {
    console.log(state.user)
    return { loggedUser: state.user.loggedUser }
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherCalendar);