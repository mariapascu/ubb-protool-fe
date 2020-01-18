import * as React from "react";
import NavbarStudent from "../../navbar/NavbarStudent";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import "./ProfileStudent.css"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


class ProfileStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFields: true,
            showEdit: false,
            group: 935,
            subgroup: 1,
            name: "Nicoara",
            surname: "Stefania",
            initialGroup: 935,
            initialSubgroup: 1,
            initialName: "Nicoara",
            initialSurname: "Stefania",
            university: "UBB",
            faculty: "Informatics",
            speciality: "English",
            errors: {
                group: false,
                name: false,
                surname: false
            }
        }
    }

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
            group: this.state.initialGroup,
            subgroup: this.state.initialSubgroup,
            name: this.state.initialName,
            surname: this.state.initialSurname
        })
    };

    onSaveButtonPressed = () => {
        console.log("I was pressed");
        this.setState({
            showFields: true,
            showEdit: false,
            initialGroup: this.state.group,
            initialSubgroup: this.state.subgroup,
            initialName: this.state.name,
            initialSurname: this.state.surname
        })
    };

    handleChangeGroup = event => {
        if (event.target.value <= 100 || event.target.value >= 1000) {
            this.setState({
                errors: {
                    group: true
                }
            })
        } else this.setState({
            group: event.target.value,
            errors: {
                group: false
            }
        });
    };

    handleChangeSubgroup = event => {
        this.setState({
            subgroup: event.target.value
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

    render() {
        let currentValues = {
            group: this.state.group
        };
        return (
            <div>
                <NavbarStudent/>
                <Container className="profileContainer">
                    <Paper className="profileCard" rounded={true} elevation={2}>
                        <Avatar className="Avatar">{this.state.initialName[0]}</Avatar>
                        <div className="FieldContainer" hidden={!this.state.showFields}>
                            <Typography variant={"h4"}
                                        className="ContainerChild">{this.state.initialSurname} {this.state.initialName}</Typography>
                            <Typography variant={"h5"}
                                        className="ContainerChild">{this.state.university} {this.state.faculty} {this.state.speciality}</Typography>
                            <Typography variant={"h5"}
                                        className="ContainerChild">{this.state.initialGroup}/{this.state.initialSubgroup}</Typography>
                            <Button className={"ContainerChild"} variant={"contained"} hidden={!this.state.showFields}
                                    onClick={this.onEditButtonPressed}>Edit</Button>
                        </div>

                        <div className="FieldContainerEdit" hidden={!this.state.showEdit}>
                            <TextField className="inputText"
                                       error={this.state.errors.surname}
                                       defaultValue={this.state.surname}
                                       id="outlined-basic"
                                       label="Surename"
                                       onChange={this.handleChangeSurname}/>
                            <TextField className="inputText"
                                       error={this.state.errors.name}
                                       defaultValue={this.state.name}
                                       id="outlined-basic"
                                       label="Name"
                                       onChange={this.handleChangeName}/>
                            <div className="FormControlParent">
                                <TextField className="FormControlChild"
                                           error={this.state.errors.group}
                                           id="outlined-basic"
                                           label="Group"
                                           type="number"
                                           defaultValue={this.state.initialGroup}
                                           onChange={this.handleChangeGroup}/>
                                <FormControl className="FormControlChild">
                                    <InputLabel>Subgroup</InputLabel>
                                    <Select
                                        value={this.state.subgroup}
                                        onChange={this.handleChangeSubgroup}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
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

export default connect()(ProfileStudent)
