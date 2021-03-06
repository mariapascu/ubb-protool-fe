import React, {Component} from 'react';

import "./teacherCalendar.css";

import WeekCalendar from 'react-week-calendar';

import 'react-week-calendar/dist/style.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CardContent from "@material-ui/core/CardContent";
import {students} from "../../mockings/StudentMock";
import Card from "@material-ui/core/Card";
import {getClassesForTeacher} from "../../rest/userRest";
import {connect} from "react-redux";
import {getStudentsListForClass} from "../../rest/studentsListRest";


const days = [1, 2, 3, 4, 5]


const styles = {
    left: {
        float: "left",
        width: "220px"
    },
    main: {
        //marginLeft: "220px",
        backColor: "black"

    },

};

class Evvent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.title !== undefined) {
            return (

                <div className={"class-cell" + " " + this.props.classType}>
                    <div className={"title-box"}>{this.props.title}</div>
                    <div className={"type-box"}><b>{this.props.classType}</b></div>
                    <div>
                        {this.props.classType === "Laboratory" ? (
                            <span className="eventDetail">
                            subgroup: {this.props.subgroup.groupNumber}/{this.props.subgroup.subgroupNumber}
                            </span>
                        ) : this.props.classType === "Seminar" ? (
                            <span className="eventDetail">
                            group: {this.props.subgroup.groupNumber}
                            </span>
                        ) : null}
                    </div>
                    <div>
                        <span className="eventDetail">room: {this.props.classLocation} </span>
                    </div>
                </div>

            );
        } else {
            return (

                <div>
                    {this.props.title}
                    <br/>
                    {this.props.classType}
                </div>
            );
        }
    }
}

// function convertDayToNumber(day) {
//     if (day === "Monday") {
//         return 1;
//     }
//     else if (day === "Tuesday") {
//         return 2;
//     }
//     else if (day === "Wednesday") {
//         return 3;
//     }
//     else if (day === "Thursday") {
//         return 4;
//     }
//     else if (day === "Friday") {
//         return 5;
//     }
// }

class TeacherCalendar extends Component {

    constructor(props) {
        console.log("hello");
        super(props);
        this.state = {
            intervals: null,
            showModal: false,
            selectedInterval: null,
            attendingStudentsList: null,
            teacher: this.props.loggedUser,
            students: null,
        };
        console.log(this.state.teacher)
    }

    componentDidMount() {
        getClassesForTeacher(this.state.teacher).then((classes) => {
            console.log(classes);
            var intv = []
            for (var i = 0; i < classes.length; i++) {
                const c = {
                    classId: classes[i].classId,
                    title: classes[i].course.courseName,
                    subgroup: classes[i].subgroup,
                    teacher: classes[i].teacher,
                    classType: classes[i].classType,
                    classLocation: classes[i].classLocation,
                    classDuration: classes[i].classDuration,
                    start: moment({month: 6, day: days[classes[i].classDay - 1], year: 2019, h: classes[i].classHour}),
                    end: moment({
                        month: 6,
                        day: days[classes[i].classDay - 1],
                        year: 2019,
                        h: classes[i].classHour + classes[i].classDuration
                    })
                }
                console.log(c);
                intv.push(c)

            }

            this.setState({intervals: intv})
        })

    }


    exitt = () => {

        this.setState({showModal: false})
    };

    getStudentsByClassId = (classId) => {
        return getStudentsListForClass(classId).then((students) => {
            this.setState({students: students})
        }).catch((err) => console.log(err));

    }

    eventClicked = (e) => {
        this.setState({selectedInterval: e});
        this.setState({showModal: true});
        this.getStudentsByClassId(e.classId);
    };

    event = (params) => {

        return <Evvent title={params.title} classType={params.classType} subgroup={params.subgroup}
                       classLocation={params.classLocation}/>
    };

    studentItem = (item) => {
        const fullName = item.firstName + " " + item.lastName;
        return (
            <Card className="card" elevation={0} raised={true}>
                <CardContent>
                    <div>
                        <Typography display="inline" className="leftside">Student name: </Typography>
                        <Typography display="inline">{fullName}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Group: </Typography>
                        <Typography
                            display="inline">{item.subgroup.groupNumber}/{item.subgroup.subgroupNumber}</Typography>
                    </div>
                    <div>
                        <Typography display="inline" className="leftside">Email: </Typography>
                        <Typography display="inline">{item.email}</Typography>
                    </div>
                </CardContent>
            </Card>
        )
    }


    render() {
        let showList = null;
        if (this.state.showModal && this.state.students != null) {
            console.log(this.state.students);
            showList = <div>
                {
                    this.state.students.map((item, index) => (
                            <div>
                                {this.studentItem(item)}
                            </div>
                        )
                    )
                }

            </div>
        }

        var {...config} = this.state;

        if (this.state.intervals != null) {
            return (
                <div>
                    <div className={"calendar-wrapper"}>
                        <WeekCalendar
                            id="wk"
                            dayFormat="dddd"
                            firstDay={moment({month: 6, day: 1, year: 2019})}
                            startTime={moment({h: 8})}
                            endTime={moment({h: 20})}
                            numberOfDays={5}
                            scaleUnit={60}
                            cellHeight={75}
                            selectedIntervals={this.state.intervals}
                            eventComponent={this.event}
                            useModal={false}

                            onEventClick={this.eventClicked}
                        />

                        {/* The dialog which opens when an interval is clicked*/}
                        <Dialog open={this.state.showModal} onClose={this.exitt} aria-labelledby="form-dialog-title" fullWidth='true' maxWidth='md'>
                            <DialogTitle id="form-dialog-title">
                                {this.state.selectedInterval != null ?
                                    this.state.selectedInterval.title + " " : ""
                                }
                                {this.state.selectedInterval != null ?
                                    this.state.selectedInterval.classType : ""
                                }
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Below you'll see information about the students attending this class
                                </DialogContentText>

                                {showList}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.exitt} color="primary">
                                    Back
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect()(TeacherCalendar);

