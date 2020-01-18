import * as React from "react";
import TeacherCard from "./TeacherCard";
import {teachers} from "../../../mockings/TeacherMock";
import {connect} from "react-redux";
import NavbarStudent from "../../navbar/NavbarStudent";
import {getAllTeachers} from "../../../rest/userRest";
import {Teacher} from "../../../model/Teacher";


class TeachersTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teachersBackend: getAllTeachers()
        }

    }

    render() {
        return (
            <div>
                <NavbarStudent/>
                <div className="pageContent">
                    {this.state.teachersBackend.map((teacherBackend, index) => (
                        <TeacherCard teacher={new Teacher(teacherBackend["teacherId"],
                            teacherBackend["teacherDepartment"],
                            teacherBackend["teacherAvailability"],
                            teacherBackend["teacherFirstName"],
                            teacherBackend["teacherLastName"],
                            teacherBackend["email"],
                            teacherBackend["teacherUniversity"],
                            teacherBackend["teacherFaculty"],
                            teacherBackend["teacherWebSite"]
                        )}/>
                    ))}
                </div>
            </div>
        )
    }
}

//<TeacherCard teacher = {item}/>

// teacherBackend = {
//     "teacherId": 6,
//     "teacherDepartment": "dep gelu",
//     "teacherAvailability": true,
//     "teacherFirstName": "Gelu",
//     "teacherLastName": "Gelian",
//     "email": "gelian@cs.ubbcluj.ro",
//     "password": "lapte1234",
//     "teacherEnabled": true,
//     "teacherUniversity": "ubb",
//     "teacherFaculty": "fmi",
//     "teacherWebSite": "cs.ubbcluj.ro/~gelu"
// }


export default connect()(TeachersTab)
