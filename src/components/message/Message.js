import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import './Message.css';

class Message extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="card myCardHolder">
                <div className="card-header">
                    {this.props.changeStatus}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Change request from <i><b>{this.props.studentName} group {this.props.studentGroup}</b></i></h5>
                    <p className="card-text">Subject: <b>{this.props.subjectName} {this.props.subjectType}</b></p>
                    <p className="card-text">From: <b>{this.props.fromDate}</b> To: <b>{this.props.toChangedDate}</b></p>
                    <div>
                        {this.props.changeStatus === "Pending" ? (
                            <a href="#" className="btn btn-secondary myButtonAccept">Accept</a>
                        ) : null}
                        {this.props.changeStatus === "Pending" ? (
                            <a href="#" className="btn btn-secondary myButtonDecline">Decline</a>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}


export default Message;