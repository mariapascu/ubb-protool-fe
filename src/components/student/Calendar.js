import React, {Component} from 'react';

import "./calendar.css";

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
import {classess} from "../../mockings/ClassMock"
import ChangelistModal from "../schedule_handling/ChangelistModal";


const classes = classess
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
                    <div className={"type-box"}>{this.props.classType}</div>
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


class Calendar extends Component {
    changelistDialog;

    constructor(props) {
        super(props);
        this.state = {
            intervals: null,
            showModal: false,
            selectedInterval: null
        };

    }

    componentDidMount() {
        var intv = []
        for (var i = 0; i < classes.length; i++) {
            const c = {
                classId: classes[i].classId,
                title: classes[i].course.courseName,
                teacher: classes[i].teacher,
                classType: classes[i].classType,
                classLocation: classess[i].classLocation,
                classDuration: classes[i].classDuration,
                start: moment({month: 6, day: days[classes[i].classDay - 1], year: 2019, h: classes[i].classHour}),
                end: moment({
                    month: 6,
                    day: days[classes[i].classDay - 1],
                    year: 2019,
                    h: classes[i].classHour + classes[i].classDuration
                })
            }
            intv.push(c)
        }
        this.setState({intervals: intv})
    }

    exitt = () => {

        this.setState({showModal: false})
    }
    eventClicked = (e) => {
        this.setState({selectedInterval: e})
        this.changelistDialog = null;


        this.setState({showModal: true})
    }

    showChangelist = () => {
        this.setState({showModal: false})
        this.changelistDialog = null;
        this.changelistDialog = <ChangelistModal courseClass={this.state.selectedInterval}/>;
    };

    event = (params) => {

        return <Evvent title={params.title} classType={params.classType}></Evvent>
    }


    render() {
        var {...config} = this.state;
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
                    <Dialog open={this.state.showModal} onClose={this.exitt} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Class</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Below you'll see information about the class. If seminar/laboratory, you can try to
                                reschedule by
                                clicking "Change".
                            </DialogContentText>

                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Subject:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.title : ""
                                    }
                                </Typography>
                            </Box>

                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Teacher:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.teacher.firstname + " " + this.state.selectedInterval.teacher.lastname : ""
                                    }
                                </Typography>
                            </Box>

                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Type:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.classType : ""
                                    }
                                </Typography>
                            </Box>
                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Location:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.classLocation : ""
                                    }
                                </Typography>
                            </Box>
                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Interval:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.start.format('hh:mm') : ""
                                    }
                                </Typography>

                                -
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.end.format('hh:mm') : ""
                                    }
                                </Typography>

                            </Box>

                            <Box fontWeight="fontWeightBold">
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Duration:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.classDuration : ""
                                    }
                                </Typography>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.exitt} color="primary">
                                Back
                            </Button>
                            <Button onClick={this.showChangelist} color="primary">
                                Change
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {this.changelistDialog}
                </div>
            </div>
        );
    }
}

export default Calendar;

