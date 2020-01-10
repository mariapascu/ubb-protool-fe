import React, { Component } from 'react';

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



// var intervals = [{ start: moment({ month: 6, day: 1, year: 2019, h: 8 }), end: moment({ month: 6, day: 1, year: 2019, h: 10 }) },
//     { start: moment({ month: 6, day: 1, year: 2019, h: 10 }), end: moment({ month: 6, day: 1, year: 2019, h: 12 }) },
//     { start: moment({ month: 6, day: 1, year: 2019, h: 12 }), end: moment({ month: 6, day: 1, year: 2019, h: 14 }) },
//     { start: moment({ month: 6, day: 1, year: 2019, h: 14 }), end: moment({ month: 6, day: 1, year: 2019, h: 16 }) },
//     { start: moment({ month: 6, day: 1, year: 2019, h: 16 }), end: moment({ month: 6, day: 1, year: 2019, h: 18 }) },
//     { start: moment({ month: 6, day: 1, year: 2019, h: 18 }), end: moment({ month: 6, day: 1, year: 2019, h: 20 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 8 }), end: moment({ month: 6, day: 2, year: 2019, h: 10 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 10 }), end: moment({ month: 6, day: 2, year: 2019, h: 12 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 12 }), end: moment({ month: 6, day: 2, year: 2019, h: 14 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 14 }), end: moment({ month: 6, day: 2, year: 2019, h: 16 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 16 }), end: moment({ month: 6, day: 2, year: 2019, h: 18 }) },
//     { start: moment({ month: 6, day: 2, year: 2019, h: 18 }), end: moment({ month: 6, day: 2, year: 2019, h: 20 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 8 }), end: moment({ month: 6, day: 3, year: 2019, h: 10 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 10 }), end: moment({ month: 6, day: 3, year: 2019, h: 12 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 12 }), end: moment({ month: 6, day: 3, year: 2019, h: 14 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 14 }), end: moment({ month: 6, day: 3, year: 2019, h: 16 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 16 }), end: moment({ month: 6, day: 3, year: 2019, h: 18 }) },
//     { start: moment({ month: 6, day: 3, year: 2019, h: 18 }), end: moment({ month: 6, day: 3, year: 2019, h: 20 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 8 }), end: moment({ month: 6, day: 4, year: 2019, h: 10 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 10 }), end: moment({ month: 6, day: 4, year: 2019, h: 12 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 12 }), end: moment({ month: 6, day: 4, year: 2019, h: 14 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 14 }), end: moment({ month: 6, day: 4, year: 2019, h: 16 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 16 }), end: moment({ month: 6, day: 4, year: 2019, h: 18 }) },
//     { start: moment({ month: 6, day: 4, year: 2019, h: 18 }), end: moment({ month: 6, day: 4, year: 2019, h: 20 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 8 }), end: moment({ month: 6, day: 5, year: 2019, h: 10 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 10 }), end: moment({ month: 6, day: 5, year: 2019, h: 12 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 12 }), end: moment({ month: 6, day: 5, year: 2019, h: 14 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 14 }), end: moment({ month: 6, day: 5, year: 2019, h: 16 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 16 }), end: moment({ month: 6, day: 5, year: 2019, h: 18 }) },
//     { start: moment({ month: 6, day: 5, year: 2019, h: 18 }), end: moment({ month: 6, day: 5, year: 2019, h: 20 }) },
//
// ];

const classes = classess
const days=[6,7,8,9,10]
var intervals=[{classType:classes[0].classType,start: moment({ month: 1, day: days[classes[0].classDay-1], year: 2020, h: classes[0].classHour }), end: moment({ month: 6, day:days[classes[0].classDay-1], year: 2219, h: classes[0].classHour+2}) }]

console.log(intervals)
const styles = {
    left: {
        float: "left",
        width: "220px"
    },
    main: {
        //marginLeft: "220px",
        backColor: "black"

    },
    contentForEvent: {
        backgroundColor: "#7d76f7",
        height: "100%",
        width: "100%",
        color:"white"
    }
};
class Evvent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.title != undefined) {
            return (

                <div style={styles.contentForEvent}>
                    {this.props.title}
                </div>
            );
        } else {
            return (

                <div>
                    {this.props.title}
                </div>
            );
        }
    }
}


class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intervals: intervals,
            showModal: false,
            selectedInterval: null
        };

    }
    componentDidMount() {

    }

    exitt = () => {

        this.setState({ showModal: false })
    }
    eventClicked = (e) => {
        this.setState({ selectedInterval: { start: e.start, end: e.end, title: e.title, prof: e.prof, type: e.type, location: e.location } })


        this.setState({ showModal: true })
    }


    event = (params) => {

        return <Evvent title={params.title}></Evvent>
    }


    render() {
        var { ...config } = this.state;
        return (
            <div>


                <div>
                    <WeekCalendar
                        id="wk"
                        dayFormat="dddd"
                        firstDay={moment({ month: 1, day: 6, year: 2020 })}
                        startTime={moment({ h: 8 })}
                        endTime={moment({ h: 20 })}
                        numberOfDays={5}
                        scaleUnit={120}
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
                                Below you'll see information about the class. If seminar/laboratory, you can try to reschedule by
                                clicking "Change".
                            </DialogContentText>

                            <Box fontWeight="fontWeightBold" >
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
                                    Professor:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.prof : ""
                                    }
                                </Typography>
                            </Box>

                            <Box fontWeight="fontWeightBold" >
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Type:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.type : ""
                                    }
                                </Typography>
                            </Box>
                            <Box fontWeight="fontWeightBold" >
                                <Typography fontWeight="fontWeightBold" variant="h8" component="h8">
                                    Location:
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <Typography variant="h8" component="h8">
                                    {this.state.selectedInterval != null ?
                                        this.state.selectedInterval.location : ""
                                    }
                                </Typography>
                            </Box>
                            <Box fontWeight="fontWeightBold" >
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
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.exitt} color="primary">
                                Back
                            </Button>
                            <Button onClick={this.exitt} color="primary">
                                Change
                            </Button>
                        </DialogActions>
                    </Dialog>


                </div>



            </div>
        );
    }
}

export default Calendar;
