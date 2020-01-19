import * as React from "react";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import "./ProfileTeacher.css"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NavBarTeacher from "../../navbar/NavBarTeacher";
import {Student} from "../../../model/Student";
import {updateTeacher} from "../../../rest/userRest";
import {Teacher} from "../../../model/Teacher";
import NavbarStudent from "../../navbar/NavbarStudent";


class ProfileTeacher extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.loggedUser);
        this.state = {
            showFields: true,
            showEdit: false,
            name: this.props.loggedUser.lastname,
            surname: this.props.loggedUser.firstname,
            initialName: this.props.loggedUser.lastname,
            initialSurname: this.props.loggedUser.firstname,
            university: this.props.loggedUser.uni,
            faculty: this.props.loggedUser.fac,
            department: this.props.loggedUser.department,
            thesisAvailability: this.props.loggedUser.thesisAvailability,
            initialThesisAvailability: this.props.loggedUser.thesisAvailability,
            site: this.props.loggedUser.site,
            email: this.props.loggedUser.teacherEmail,
            initialSite: this.props.loggedUser.site,
            errors: {
                name: false,
                surname: false
            },
            loggedUser: this.props.loggedUser
        }
    }

    thesisAvailabilityText = (availability) => {
        if (availability) {
            return 1
        } else return 0
    };


    onEditButtonPressed = () => {
        console.log("I was pressed");
        this.setState({
            showFields: false,
            showEdit: true
        })
    };

    onCancelButton = () => {
        this.setState({
            showFields: true,
            showEdit: false,
            name: this.state.initialName,
            surname: this.state.initialSurname,
            site: this.state.initialSite,
            thesisAvailability: this.state.initialThesisAvailability
        })
    };

    logout = () => {
        this.props.logout();
        this.props.history.push('/login')
    }

    onSaveButtonPressed = () => {
        console.log("I was pressed");
        let updateJSON = JSON.stringify({
            "teacherId": this.state.loggedUser.teacherId,
            "teacherFirstName": this.state.surname,
            "teacherLastName": this.state.name,
            "teacherAvailability": this.state.thesisAvailability,
            "teacherWebSite": this.state.site
        });
        updateTeacher(updateJSON).then((data) => {
            if (data) {
                this.setState({
                    showFields: true,
                    showEdit: false,
                    initialName: this.state.name,
                    initialSurname: this.state.surname,
                    initialSite: this.state.site,
                    initialThesisAvailability: this.state.thesisAvailability
                });
                this.props.addUser(new Teacher(this.state.loggedUser.teacherId,
                    this.state.loggedUser.department,
                    this.state.thesisAvailability,
                    this.state.surname, this.state.name,
                    this.state.loggedUser.teacherEmail,
                    this.state.loggedUser.uni,
                    this.state.loggedUser.fac,
                    this.state.site));
            } else {
                this.setState({
                    showFields: false,
                    showEdit: true
                })
            }
        });

    };

    handleChangeSite = event => {
        if (!(event.target.value.includes("http://") || event.target.value.includes("http://"))) {
            this.setState({
                errors: {
                    site: "Should have http:// or https://"
                }
            })
        } else this.setState({
            site: event.target.value,
            errors: {
                site: null
            }
        });
    };

    handleChangeName = event => {
        if (event.target.value === "") {
            this.setState({
                errors: {
                    name: true
                }
            })
        } else
            this.setState({
                    name: event.target.value,
                    errors: {
                        name: false
                    }
                }
            );
    };

    handleChangeSurname = event => {
        if (event.target.value === "") {
            this.setState({
                errors: {
                    surname: true
                }
            })
        } else
            this.setState({
                    surname: event.target.value,
                    errors: {
                        surname: false
                    }
                }
            );
    };

    handleChangeThesis = event => {
        this.setState({
                thesisAvailability: event.target.value,
            }
        );
    };

    getColorAvailability = (availability) => {
        if (availability) {
            return <text className="fontColorGreen">Available</text>
        } else return <text className="fontColorRed">Unavailable</text>
    };


    render() {
        let currentValues = {
            group: this.state.group
        };
        return (
            <div>
                <NavBarTeacher loggedUser={this.props.loggedUser} logoutFct={this.logout}/>
                <Container className="profileContainer">
                    <Paper className="profileCard" rounded={true} elevation={2}>
                        <Avatar className="Avatar">{this.state.initialName[0]}</Avatar>
                        <div className="FieldContainer" hidden={!this.state.showFields}>
                            <Typography variant={"h4"}
                                        className="ContainerChild">{this.state.initialSurname} {this.state.initialName} {this.getColorAvailability(this.state.initialThesisAvailability)}</Typography>
                            <Typography variant={"h5"}
                                        className="ContainerChild">{this.state.university} {this.state.faculty} {this.state.department}</Typography>
                            <Typography variant={"h5"}
                                        className="ContainerChild">Email: {this.state.email}</Typography>
                            <Typography variant={"h5"}
                                        className="ContainerChild">Website: <a
                                href={this.state.initialSite}>{this.state.initialSite}</a></Typography>
                            <Button className={"ContainerChild"} variant={"contained"} hidden={!this.state.showFields}
                                    onClick={this.onEditButtonPressed}>Edit</Button>
                        </div>

                        <div className="FieldContainerEdit" hidden={!this.state.showEdit}>
                            <TextField className="inputText"
                                       error={this.state.errors.surname}
                                       defaultValue={this.state.surname}
                                       id="outlined-basic"
                                       label="Surname"
                                       onChange={this.handleChangeSurname}/>
                            <TextField className="inputText"
                                       error={this.state.errors.name}
                                       defaultValue={this.state.name}
                                       id="outlined-basic"
                                       label="Name"
                                       onChange={this.handleChangeName}/>
                            <TextField className="inputText"
                                       error={this.state.errors.site}
                                       defaultValue={this.state.site}
                                       fullWidth={true}
                                       id="outlined-basic"
                                       label="WebSite"
                                       onChange={this.handleChangeSite}/>


                            <div className="FormControlParent">
                                <FormControl className="FormControlChild">
                                    <InputLabel>Thesis availability</InputLabel>
                                    <Select
                                        value={this.thesisAvailabilityText(this.state.thesisAvailability)}
                                        onChange={this.handleChangeThesis}>
                                        <MenuItem value={1}>Available</MenuItem>
                                        <MenuItem value={0}>Unavailable</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <Button className={"Container Child"} variant={"contained"} hidden={!this.state.showEdit}
                                    onClick={this.onCancelButton}>Cancel</Button>
                            <Button className={"Container Child"} variant={"contained"} hidden={!this.state.showEdit}
                                    onClick={this.onSaveButtonPressed}>Save</Button>
                        </div>
                    </Paper>
                </Container>
            </div>
        )
    }
}

export default connect()(ProfileTeacher);
