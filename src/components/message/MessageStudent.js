import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import './Message.css';

class MessageStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageItem: this.props.item
        }
    }

    render() {
        return (
            <div className="card myCardHolder">
                <div className="card-header">
                    {
                        this.state.messageItem.status === "Declined" ? (
                            <b><span className="statusChangeRed">{this.state.messageItem.status}</span></b>
                        ) : (
                            <b><span className="statusChangeGreen">{this.state.messageItem.status}</span></b>
                        )
                    }
                </div>
                <div className="card-body">
                    <h5 className="card-title">Change request
                        is {this.state.messageItem.status} by <i><b>{this.state.messageItem.change.courseClass.teacher.firstname} {this.state.messageItem.change.courseClass.teacher.lastname}</b></i>
                    </h5>
                    <p className="card-text">Subject: <b>{this.state.messageItem.change.courseClass.course.courseName} {this.state.messageItem.change.courseClass.classType}</b>
                    </p>
                    <p className="card-text">From: <b>{this.state.messageItem.change.fromTheDate}</b> To: <b>{this.state.messageItem.change.toTheDate}</b>
                    </p>
                </div>
            </div>
        );
    }
}

export default MessageStudent;