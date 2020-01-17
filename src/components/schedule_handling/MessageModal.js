import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {DialogActions, DialogContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class MessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newClass: this.props.courseClass,
            student: this.props.student,
            showModal: true
        }
    }

    exitMessageModal = () => {
        this.setState({showModal: false});
    };

    render() {
        console.log("MARIAAAA");
        return (<Dialog fullWidth='true' maxWidth='sm' open={this.state.showModal}>
            <DialogTitle>
                <div>Write a message for your teacher!</div>
            </DialogTitle>
            <form onSubmit={this.exitMessageModal}>
            <DialogContent>
                <TextField fullWidth="true"
                           id="standard-multiline-static"
                           label="Your message"
                           multiline
                           rows="4"
                           defaultValue=""
                />
                <RadioGroup defaultValue="one-time" className="radioGroup" aria-label="type" name="type" required row>
                    <FormControlLabel value="one-time" control={<Radio color="primary"/>}
                                      label="One time change"/>
                    <FormControlLabel control={<Radio color="primary"/>}
                                      value="permanent"
                                      label="Permanent change"/>
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.exitMessageModal}>
                    Cancel
                </Button>
                <Button type="submit">
                    Send
                </Button>
            </DialogActions>
            </form>
        </Dialog>
    );
    }
    }

    export default MessageModal;