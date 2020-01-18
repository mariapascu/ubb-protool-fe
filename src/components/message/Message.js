import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import './Message.css';

class Message extends React.Component {
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

                    {this.state.messageItem.status === "Declined" ? (
                        <b><span className="statusChangeRed">{this.state.messageItem.status}</span></b>
                    ) : this.state.messageItem.status === "Accepted" ? (
                        <b><span className="statusChangeGreen">{this.state.messageItem.status}</span></b>
                    ) : <b>{this.state.messageItem.status}</b>
                    }

                </div>

                <div className="card-body">
                    <h5 className="card-title">Change request
                        from <i><b>{this.state.messageItem.change.student.firstName} {this.state.messageItem.change.student.lastName} group {this.state.messageItem.change.student.subgroup}</b></i>
                    </h5>
                    <p className="card-text">Subject: <b>{this.state.messageItem.change.courseClass.course.courseName} {this.state.messageItem.change.courseClass.classType}</b>
                    </p>
                    <p className="card-text">From: <b>{this.state.messageItem.change.fromTheDate}</b> To: <b>{this.state.messageItem.change.toTheDate}</b>
                    </p>
                    <p className="card-text">Type: {
                        this.state.messageItem.change.permanentChange === true ? (
                            <b>Permanent change</b>
                        ) : <b>One time change</b>
                    }
                    </p>
                    <p className="card-text">" {this.state.messageItem.change.messageText} " </p>
                    <div>
                        {this.state.messageItem.status === "Pending" ? (
                            <a href="#" className="btn btn-secondary myButtonAccept">Accept</a>
                        ) : null}
                        {this.state.messageItem.status === "Pending" ? (
                            <a href="#" className="btn btn-secondary myButtonDecline">Decline</a>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}


export default Message;