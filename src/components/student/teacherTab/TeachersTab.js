import * as React from "react";
import TeacherCard from "./TeacherCard";
import {teachers} from "../../../mockings/TeacherMock";
import {connect} from "react-redux";
import NavbarStudent from "../../navbar/NavbarStudent";

let tList = teachers

class TeachersTab extends React.Component {
    constructor(props) {
        super(props);
        this.tList = this.props.teachersList

    }

    render() {
        return (
            <div>
                <NavbarStudent/>
                <div className="pageContent">
                    {tList.map((item, index) => (
                        <TeacherCard teacher = {item}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect()(TeachersTab)
