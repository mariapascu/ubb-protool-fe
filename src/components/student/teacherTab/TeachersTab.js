import * as React from "react";
import TeacherCard from "./TeacherCard";
import {teachers} from "../../../mockings/TeacherMock";
import {connect} from "react-redux";
import NavbarStudent from "../../navbar/NavbarStudent";
import {getAllTeachers} from "../../../rest/userRest";
import {Teacher} from "../../../model/Teacher";
import Typography from "@material-ui/core/Typography"
import "./TeacherTab.css"


class TeachersTab extends React.Component {
    constructor(props) {
        super(props);
        this.makeListFromJson();
        this.state = {
            teachersBackend: null
        }

    }

    makeListFromJson = () => {
        let lst = [];
        getAllTeachers().then((data) => {
            if (data !== null) {
                for (let i in data) {
                    lst.push(new Teacher(data[i]["teacherId"],
                        data[i]["teacherDepartment"],
                        data[i]["teacherAvailability"],
                        data[i]["teacherFirstName"],
                        data[i]["teacherLastName"],
                        data[i]["email"],
                        data[i]["teacherUniversity"],
                        data[i]["teacherFaculty"],
                        data[i]["teacherWebSite"]
                    ));
                }
                this.setState({
                    teachersBackend: lst
                })
            } else this.setState({
                teachersBackend: null
            })
        })
    };

    render() {
        console.log(this.state.teachersBackend);
        return (
            <div>
                <NavbarStudent/>
                <div className="listTeachers">
                    {this.state.teachersBackend === null ? (<Typography variant={"h4"}>Fetching ...</Typography>
                    ) : (this.state.teachersBackend.map((item, index) => (
                        <TeacherCard teacher={item}/>)))
                    }
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
