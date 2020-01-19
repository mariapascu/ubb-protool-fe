import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import {messagesStudent} from "../../mockings/MessageStudentMock";
import NavbarStudent from "../navbar/NavbarStudent";
import MessageStudentComponent from "./MessageStudentComponent"
import {getChangesForStudent} from "../../rest/changesRest";
import {MessageStudent} from "../../model/MessageStudent";


class MessagesPageStudent extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.loggedUser)
        this.state = {
            messages: null
        }

    }

    logout = () => {
        this.props.logout();
        this.props.history.push('/login')
    }

    componentDidMount() {
        getChangesForStudent(this.props.loggedUser)
            .then((changes) => {
                var res = [];
                var m = new MessageStudent();
                for (var i in changes) {
                    m.change = changes[i];
                    m.status = changes[i].status;
                    m.messageId = changes[i].changeId;
                    res.push(m);
                }
                this.setState({
                    messages: res
                })
            })
    }

    render() {

        if (this.state.messages != null) {
            return (
                <div>
                    <NavbarStudent loggedUser = {this.props.loggedUser} logoutFct={this.logout}/>
                    <div className="pageContent">
                        {this.state.messages.map((item, index) => (
                            <MessageStudentComponent item={item}/>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                null
            )
        }
    }
}

export default connect()(MessagesPageStudent)