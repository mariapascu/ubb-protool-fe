import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import CourseClass from "../../model/CourseClass";
import {classess} from "../../mockings/ClassMock";
import TeacherCard from "../student/teacherTab/TeacherCard";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MessageModal from "./MessageModal";

let newClassesList = classess;

class ChangelistModal extends React.Component {
    courseClass;
    messageModal;
    constructor(props) {
        super(props)
        this.courseClass = this.props.courseClass;
        console.log(this.courseClass);
        console.log(this.props);
        this.state = {
            student: this.props.student,
            oldClass: this.props.courseClass,
            showModal: true
        }
    }

    // /*this.teacher = teacher;
    // this.course = course;
    // this.subgroup = subgroup;
    // this.classType = classType;
    // this.classDay = classDay;
    // this.classWeek = classWeek;
    // this.classHour = classHour;
    // this.classLocation = classLocation;
    // this.classDuration = duration*/

    changelistItem = (item) => {
        return (
            <div>{item.classId + " " + item.course.courseName + " " + item.subgroup + " " + item.classType + " " + item.classDay + " " + item.classWeek + " " + item.classHour + " " + item.classLocation + " " + item.classDuration}</div>);
    }
    exitChangelist = () => {

        this.setState({showModal: false});
    }

    showMessageModal = (index) => {
        this.setState({showModal: false});
        this.messageModal = <MessageModal/>;
    }

    render() {

        return (<div>
            <Dialog open={this.state.showModal} onClose={this.exitChangelist} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <div>
                        {this.courseClass.classType}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div>
                        {
                            newClassesList.map((item, index) => (
                                <Box onClick={() => this.showMessageModal(index)}>
                                    {this.changelistItem(item)}
                                </Box>
                            ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.exitChangelist} color="primary">
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
            {this.messageModal}
            </div>
        );
    }
}

export default ChangelistModal;