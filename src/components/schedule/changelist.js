import React from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import CourseClass from "../../model/CourseClass";
import {classess} from "../../mockings/ClassMock";
import TeacherCard from "../student/teacherTab/TeacherCard";
import DialogActions from "@material-ui/core/DialogActions";


class Changelist extends React.Component {
    constructor(props) {
        super(props);
        let newClassesList = classess;
        this.state = {
            student: this.props.student,
            oldClass: this.props.courseClass,
        }
    }

    changeItem = (item) => {
        return (<div>MARIA</div>);
    }

    render() {

        return (<DialogActions>
            <div className="pageContent">
                {this.newClasses.map((item, index) => (
                    this.changeItem(item)
                ))}
            </div>
        </DialogActions>);
    }
}

export default Changelist;