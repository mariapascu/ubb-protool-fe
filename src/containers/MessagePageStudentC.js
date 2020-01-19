import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import MessagesPageStudent from "../components/message/MessagesPageStudent";

export function mapStateToProps(state) {
    return { loggedUser: state.user.loggedUser }
}

export const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPageStudent);