import React from 'react';
import { connect } from 'react-redux'
import Calendar from './Calendar';

class WelcomeUser extends React.Component {

  constructor(props) {
      super(props)
      if (!this.props.email ){
        this.props.history.push('/')
      }
  }
  
  logout = (e) => {
    this.props.logout();
    this.props.history.push('/login')
  }
  render(){
    return(
      <div>
        Hello {this.props.email}!
        <button onClick={this.logout}>LOGOUT </button>
        <Calendar></Calendar>
      </div>
    )
  }

}

export default connect()(WelcomeUser);