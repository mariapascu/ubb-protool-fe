import * as React from "react";
import TeacherCard from "./TeacherCard";
import {teachers} from "../../../mockings/TeacherMock";
import {connect} from "react-redux";


class TeachersTab extends React.Component {
    constructor(props) {
        super(props);
        this.tList = this.props.teachersList

    }

    render() {
        return (
            <div>
                {this.getForRenderArray()}
            </div>
        )
    }

    getForRenderArray() {
        let array = [];
        for (let i = 0; i < this.tList.length; i++) {
            array.push(<TeacherCard teacher={teachers[i]}/>);
        }
        return array
    }
}

export default connect()(TeachersTab)
