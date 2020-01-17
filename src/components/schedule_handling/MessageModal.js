import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {DialogActions, DialogContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

class MessageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newClass: this.props.courseClass,
            student: this.props.student,
            showModal: true
        }
    }

    exitMessageModal = () => {
        this.setState({showModal: false});
    }

    render() {
        console.log("MARIAAAA");
        return (<Dialog fullWidth='true' maxWidth='sm' open={this.state.showModal}>
            <DialogTitle>
                <div>Write a message for your teacher!</div>
            </DialogTitle>
            <DialogContent>
            <TextField fullWidth="true"
                id="standard-multiline-static"
                label="Your message"
                multiline
                rows="4"
                defaultValue=""
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.exitMessageModal}>
                    Cancel
                </Button>
                <Button onClick={this.exitMessageModal}>
                    Send
                </Button>
            </DialogActions>
        </Dialog>);
    }
}

export default MessageModal;