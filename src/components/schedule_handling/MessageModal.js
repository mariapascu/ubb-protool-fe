import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {DialogActions} from "@material-ui/core";

class MessageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseClass: this.props.courseClass,
            student: this.props.student,
            showModal: true
        }
    }

    exitMessageModal = () => {
        this.setState({showModal: false});
    }

    render() {
        console.log("MARIAAAA");
        return (<Dialog open={this.state.showModal}>
            <div>MARIA</div>
            <DialogActions onClick={this.exitMessageModal}>
                Close
            </DialogActions>
        </Dialog>);
    }
}

export default MessageModal;