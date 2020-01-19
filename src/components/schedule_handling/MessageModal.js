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
            formData: {},
            newClass: this.props.courseClass,
            student: this.props.student,
            showModal: true
        }
        console.log(this.state.newClass)
        console.log(this.student)
    }

    exitMessageModal = () => {
        this.setState({showModal: false});
    };

    handleInputChange = (event) => {
        const target = event.target;
        console.log("target" + target.name + " " + target.value);
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
        console.log("Date " + this.state.newClass.classDay + " " + cDate.getDay());
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
        this.setState({showModal: false});
    }

    sendMessageAndChange = () => {

        const changeStatus = "pending";
        var startDate, endDate;
        startDate = new Date();

        if (this.state.formData["type"] == "one-time") {
            endDate = this.getEndOfWeekDate();
        } else {
            endDate = this.state.newClass.course.endDate;
        }
        const startDateFormat = this.formatDate(startDate);
        const endDateFormat = this.formatDate(endDate);
        //pending 2020-01-19 2020-01-24 16 2
        console.log(changeStatus + " " + startDateFormat + " " + endDateFormat + " " + this.state.newClass.classId + " " + this.state.student.studentId);
        createChange(changeStatus, startDateFormat, endDateFormat, this.state.newClass.classId, this.state.student.studentId)
            .then((changeId) => {
                console.log("changeID" + changeId);
                this.sendMessage(changeId)
            }).catch((err) => console.log(err));

    }

    render() {
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
                                   name="message-text"
                                   onChange={this.handleInputChange}
                        />
                        <RadioGroup defaultValue="one-time" className="radioGroup" aria-label="type"
                                    name="type" required row onChange={this.handleInputChange} id="type">
                            <FormControlLabel value="one-time" id="one-time" control={<Radio color="primary"/>}
                                              label="One time change"
                                              />
                            <FormControlLabel control={<Radio color="primary"/>}
                                              value="permanent"
                                              id="permanent"
                                              label="Permanent change"
                                              />
                        </RadioGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.exitMessageModal}>
                            Cancel
                        </Button>
                        <Button onClick={this.sendMessageAndChange}>
                            Send
                        </Button>
                    </DialogActions>
            </Dialog>
        );
    }
}

export default MessageModal;