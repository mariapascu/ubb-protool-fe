import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {DialogActions, DialogContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {createChange, createMessage} from "../../rest/changeRest";

class MessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: null,
            newClass: this.props.courseClass,
            student: this.props.student,
            showModal: true
        }
    }

    exitMessageModal = () => {
        this.setState({showModal: false});
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let {formData} = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    };

    getEndOfWeekDate = () => {
        var cDate = new Date();
        var difference = this.state.newClass.classDay - cDate.getDay();
        cDate.setDate(cDate.getDate() + difference);
        return cDate;
    }

    formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }


    sendMessage = (changeId) => {
        let messageDate = new Date();
        let messageDateFormat = this.formatDate(messageDate);
        let messageText = this.state.formData["send-message"];
        createMessage(messageDateFormat, messageText, changeId).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    sendMessageAndChange = () => {

        const changeStatus = "pending";
        var startDate, endDate;
        startDate = new Date();
        if (this.state.formData["type"] === "one-time") {
            endDate = this.getEndOfWeekDate();
        } else {
            endDate = this.status.newClass.course.endDate;
        }
        const startDateFormat = this.formatDate(startDate);
        const endDateFormat = this.formatDate(endDate);
        createChange(changeStatus, startDateFormat, endDateFormat, this.state.newClass.classId, this.state.student.studentId)
            .then((changeId) => {
                this.sendMessage(changeId)
            }).catch((err) => console.log(err));

    }

    render() {
        return (<Dialog fullWidth='true' maxWidth='sm' open={this.state.showModal}>
                <DialogTitle>
                    <div>Write a message for your teacher!</div>
                </DialogTitle>
                <form onSubmit={this.sendMessageAndChange}>
                    <DialogContent>
                        <TextField fullWidth="true"
                                   id="standard-multiline-static"
                                   label="Your message"
                                   multiline
                                   rows="4"
                                   defaultValue=""
                                   name="message-text"
                        />
                        <RadioGroup defaultValue="one-time" name="type" className="radioGroup" aria-label="type"
                                    name="type" required row>
                            <FormControlLabel value="one-time" control={<Radio color="primary"/>}
                                              label="One time change"
                                              name="one-time"/>
                            <FormControlLabel control={<Radio color="primary"/>}
                                              value="permanent"
                                              label="Permanent change"
                                              name="permanent"/>
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