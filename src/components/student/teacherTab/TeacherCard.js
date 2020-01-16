import * as React from "react";

import Card from '@material-ui/core/Card';
import "./TeacherCard.css";
import {EmailRounded, LanguageRounded} from '@material-ui/icons';

import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import "../../../mockings/TeacherMock.js";
import {teachers} from "../../../mockings/TeacherMock";


class TeacherCard extends React.Component {

    constructor(props) {
        super(props);
        this.teacher = this.props.teacher
    }


    render() {
        return (
            <Card className="card">
                <div>
                    <Avatar variant={"circle"} alt={this.teacher.firstname} className="new"/>
                    <div>
                        <Typography variant="h5" className="Name">
                            {this.teacher.firstname} {this.teacher.lastname} <span className="ThesisAvailability"
                                                                                   color="lime">{this.isAvailableText(this.teacher.thesisAvailability)}</span>
                        </Typography>

                        <Typography variant={"body2"}>
                            <b>{this.teacher.uni}</b> {this.teacher.fac} <br/>
                            <b>Departament:</b> {this.teacher.department}
                        </Typography>
                        <Typography variant={"body2"}>
                            <div>
                                <LanguageRounded className="Icon"/>
                                <a href={this.teacher.site}>{this.teacher.site}</a><br/>
                            </div>
                            <div>
                                <EmailRounded className="Icon"/>
                                {this.teacher.teacherEmail}
                            </div>
                        </Typography>
                    </div>
                </div>
            </Card>
        )
    }

    isAvailable(availability) {
        if (availability) {
            return "green"
        } else {
            return "red"
        }
    }

    isAvailableText(availability) {
        if (availability) {
            return "Thesis Available"
        } else return "Thesis Unavailable"
    }
}

export default connect()(TeacherCard)
