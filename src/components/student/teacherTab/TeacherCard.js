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
            <Card className="card" elevation={0} raised={true}>
                <div>
                    <Avatar variant={"circle"} alt={this.teacher.firstname} className="new"/>
                    <div>
                        <Typography variant="h5" className="Name">
                            {this.teacher.firstname} {this.teacher.lastname} {this.isAvailableText(this.teacher.thesisAvailability)}
                        </Typography>

                        <Typography variant={"body2"}>
                            <b>{this.teacher.uni}</b> {this.teacher.fac} <br/>
                            <b>Departament:</b> {this.teacher.department}
                        </Typography>
                        <Typography variant={"body2"}>
                            <div>
                                <LanguageRounded className="Icon"/>
                                <a href={this.teacher.site} target="_blank">{this.teacher.site}</a><br/>
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


    isAvailableText = (availability) => {
        if (availability === true) {
            return <span className="ThesisAvailabilityGreen">Thesis Available</span>
        } else return <span className="ThesisAvailabilityRed">Thesis Unavailable</span>
    }
}
export default (TeacherCard)

