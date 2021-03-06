import React from "react";
import "./ChangelistModal.css";
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
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import DialogContentText from "@material-ui/core/DialogContentText";
import {getChangelistFromClass} from "../../rest/ChangelistRest";
let newClassesList = classess;

class ChangelistModal extends React.Component {
    messageModal;
    daysOfTheWeek;

    constructor(props) {
        super(props);

        this.daysOfTheWeek = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday"
        }
        this.state = {
            student: this.props.student,
            oldClass: this.props.courseClass,
            showModal: true,
            newClasses: null
        }
    }

    componentDidMount() {
        getChangelistFromClass(this.state.oldClass.classId, this.formattedDate())
            .then((data) => {this.setState({newClasses : data});
                console.log("new classes " + this.data)
            });
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

        //return [year, month, day].join('-');
        return "2019-10-02";
    }

    formattedDate = () => {
        let d = new Date();
        let f = this.formatDate(d);
        return f;
    }

    changelistItem = (item) => {
        console.log(item);
        return (
            <Card className="card" elevation={0} raised={true}>
                <CardContent>
                    <div>
                        <Typography display="inline" className="leftside">Day: </Typography><Typography
                        display="inline">{this.daysOfTheWeek[item.classDay]}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Week: </Typography><Typography
                        display="inline">{item.classWeek == "0" ? "weekly" : item.classWeek}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Time: </Typography><Typography
                        display="inline">{item.classHour + ":00"}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Location: </Typography><Typography
                        display="inline">{item.classLocation}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Teacher: </Typography><Typography
                        display="inline">{item.teacher.firstname + " " + item.teacher.lastname}</Typography>
                    </div>
                </CardContent>
            </Card>
        )
    }
    exitChangelist = () => {

        this.setState({showModal: false});
    }

    showMessageModal = (item) => {
        this.setState({showModal: false});
        this.messageModal = <MessageModal courseClass={item} student={this.state.student}/>;
    }

    getDialogTitle = () => {
        return (this.state.oldClass.title + " - " + this.state.oldClass.classType);
    }

    render() {
        let changelistDiv = null;
        if (this.state.newClasses != null) {
            changelistDiv = <div>
                {
                    this.state.newClasses.map((item, index) => (
                        <div onClick={() => this.showMessageModal(item)}>
                            {this.changelistItem(item)}
                        </div>
                    ))}
            </div>;
        }
        return (<div>
                <Dialog className="changelistDialog" fullWidth='true' maxWidth='xs' open={this.state.showModal}
                        onClose={this.exitChangelist}>
                    <DialogTitle id="form-dialog-title">
                        <div>
                            {this.getDialogTitle()}
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Choose what class you want to attend instead!
                        </DialogContentText>
                        {changelistDiv}
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