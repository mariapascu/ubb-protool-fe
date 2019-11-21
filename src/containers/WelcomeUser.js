import { connect } from 'react-redux';
import WelcomeUser from '../components/WelcomeUser';
import { logoutUser } from '../actions';

function mapStateToProps(state) {
    
    return { email: state.user.email, password: state.user.password }
  }

  const mapDispatchToProps = dispatch => ({
    logout: () => {
    dispatch(logoutUser());
    },
   });

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeUser);