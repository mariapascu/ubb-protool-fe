import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import NavbarStudent from "../navbar/NavbarStudent";
import MessageCompStudent from "./MessageCompStudent"
import {getMessagesForStudent} from "../../rest/changesRest";
import {MessageStudent} from "../../model/MessageStudent";

class MessagesPageStudent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            messagesList: []
        };
    }

    componentDidMount() {
        getMessagesForStudent(2).then((changes) => {

            console.log("IN FUCKING PAGE");
            console.log(changes);
            let mList = [];
            let messageStudent = new MessageStudent();

            if (changes!= null) {
                changes.forEach(myFunction);
            }

            function myFunction(item, index) {
                messageStudent.status = item.changeStatus;
                messageStudent.messageId = item.changeId;
                messageStudent.change = item;
                mList.push(messageStudent);
            }

            this.setState({messagesList: mList})
        })
    }

    render() {
        return (
            <div>
                <NavbarStudent/>
                <div className="pageContent">
                    {this.state.messagesList.map((item, index) => (
                        <MessageCompStudent item = {item}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect()(MessagesPageStudent)