import * as React from "react";

import Card from '@material-ui/core/Card';
import "./TeacherCard.css";
import {TeacherCardModel} from "./TeacherCardModel";
import {EmailRounded, LanguageRounded} from '@material-ui/icons';

import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";

let teacher = new TeacherCardModel("Mihoc", "Dan", "UBB",
    "Matematica-Informatica", "Informatica", "ceva@alt.ceva", "http://www.cs.ubbcluj.ro/~mihoct/");

class TeacherCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card className="card">
                <div>
                    <Avatar variant={"circle"} alt={teacher.name[0]} className="new"/>
                    <div>
                        <Typography variant="h5" className="Name">
                            {teacher.name} {teacher.surename}
                        </Typography>

                        <Typography variant={"body2"}>
                            <b>{teacher.university}</b> {teacher.faculty} <br/>
                            <b>Departament:</b> {teacher.departament}
                        </Typography>
                        <Typography variant={"body2"}>
                            <div>
                                <LanguageRounded className="Icon"/>
                                <a href={teacher.site}>{teacher.site}</a><br/>
                            </div>
                            <div>
                                <EmailRounded className="Icon"/>
                                {teacher.email}
                            </div>
                        </Typography>
                    </div>
                </div>
            </Card>
        )
    }
}

export default connect()(TeacherCard)
