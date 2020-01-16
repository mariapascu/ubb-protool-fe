import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import CourseClass from "../../model/CourseClass";
import {classess} from "../../mockings/ClassMock";
import TeacherCard from "../student/teacherTab/TeacherCard";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

let newClassesList = classess;

class Changelist extends React.Component {
    courseClass;
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

    changeItem = (item) => {
        return (<div>{item.classId + " " + item.course.courseName + " " + item.subgroup + " " + item.classType + " " + item.classDay + " " + item.classWeek + " " + item.classHour + " " + item.classLocation + " " + item.classDuration}</div>);
    }
    exitt = () => {

        this.setState({ showModal: false })
    }
    render() {

        return (
                <div>
                    <div>
                        {this.courseClass.classType}
                    </div>
                    <div>
                    {
                        newClassesList.map((item, index) => (
                           this.changeItem(item)
                        ))}
                    </div>
            </div>
        );
    }
}

export default Changelist;