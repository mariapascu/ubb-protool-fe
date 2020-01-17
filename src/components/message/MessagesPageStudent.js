import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import {messagesStudent} from "../../mockings/MessageStudentMock";
import NavbarStudent from "../navbar/NavbarStudent";
import MessageStudent from "./MessageStudent"

class MessagesPageStudent extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NavbarStudent/>
                <div className="pageContent">
                    {messagesStudent.map((item, index) => (
                        <MessageStudent item = {item}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect()(MessagesPageStudent)