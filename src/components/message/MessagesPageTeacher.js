import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import Message from "./Message";
import {messagesTeachers} from "../../mockings/MessageTeacherMock";
import NavBarTeacher from "../navbar/NavBarTeacher";

class MessagesPageTeacher extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NavBarTeacher/>
                <div className="pageContent">
                    {messagesTeachers.map((item, index) => (
                        <Message item = {item}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect()(MessagesPageTeacher)