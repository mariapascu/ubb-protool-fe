import React from "react";
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import './Register.css';
import {isEmail, isEmpty, isContainWhiteSpace} from '../../shared/validator';
import {createStudent, createTeacher} from "../../rest/registerRest";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {}, // Contains register form data
            typeSelected: false, // Indicates if the user chose his type
            localErrors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    setType = (event) => {
        this.setState({typeSelected: true});
        this.handleInputChange(event);
    };

    validateRegistration = (e) => {
        let errors = {};
        const {formData} = this.state;

        if (!isEmail(formData.email)) {
            errors.email = "Invalid email!";
        }
        if (formData.password.length < 6) {
            errors.password = "Password must contain at least 6 characters!";
        } else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password can't contain white spaces!";
        }
        if (!(formData.password === formData.confirmPassword)) {
            errors.confirmPassword = "Passwords don't match!";
        }
        if (this.state.typeSelected === false) {
            errors.type = "A type of user must be chosen!";
        }
        if (formData.type === "student") {
            //isNan(n) returns true if n is not a number
            if (isNaN(formData.group)) {
                errors.group = "Group must be a number!";
            }
            if (isNaN(formData.subgroup)) {
                errors.subgroup = "Subgroup must be a number!";
            }
        }
        console.log(errors);
        if (isEmpty(errors)) {
            return true;
        }
        return errors;

    };

    addStudent = () => {
        const {formData} = this.state;
        console.log(formData);
        let firstName = formData.firstName;
        let lastName = formData.lastName;
        let email = formData.email;
        let password = formData.password;
        let major = formData.specialization;
        let university = formData.university;
        let faculty = formData.faculty;
        let studentGroup = formData.group;
        let studentSubGroup = formData.subgroup;
        createStudent(firstName, lastName, email, password, major, university,
            faculty, studentGroup, studentSubGroup)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    addTeacher = () => {
        const {formData} = this.state;
        let teacherDepartment = formData.department;
        let teacherAvailability = (formData.available === "yes")
        let teacherFirstName = formData.firstName;
        let teacherLastName = formData.lastName;
        let email = formData.email;
        let password = formData.password;
        let teacherUniversity = formData.university;
        let teacherFaculty = formData.faculty;
        let teacherWebSite = formData.teacher;
        createTeacher(teacherDepartment, teacherAvailability, teacherFirstName, teacherLastName,
            email, password, teacherUniversity, teacherFaculty, teacherWebSite)
            .then((data) => console.log("data")).catch((err) => console.log(err));


    }

    registerMe = (e) => {
        console.log(this.state);
        e.preventDefault();
        let errors = this.validateRegistration();
        if (errors === true) {
            if (this.state.formData['type'] === 'student') {
                this.addStudent();
            }
            else {
                this.addTeacher();
            }
            this.props.history.push('/login');
        } else {
            this.setState({
                localErrors: errors
            });
        }

    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let {formData} = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    };

    render() {
        var studentOrTeacher;
        if (this.state.typeSelected) {
            if (this.state.formData['type'] === 'student') {
                studentOrTeacher = <div>
                    <TextField
                        className="GroupTextField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id=""
                        label="Specialization"
                        autoFocus
                        name="specialization"
                        onChange={this.handleInputChange}/>
                    <TextField
                        className="GroupTextField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="group"
                        label="Group"
                        autoFocus
                        name="group"
                        error={!(this.state.localErrors.group == null)}
                        helperText={this.state.localErrors.group}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        className="GroupTextField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="subgroup"
                        label="Subgroup"
                        autoFocus
                        name="subgroup"
                        error={!(this.state.localErrors.subgroup == null)}
                        helperText={this.state.localErrors.subgroup}
                        onChange={this.handleInputChange}
                    />
                </div>;
            } else {
                studentOrTeacher = <div>
                    <TextField
                        className="GroupTextField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="department"
                        label="Department"
                        autoFocus
                        name="department"
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        className="GroupTextField"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="website"
                        label="Website"
                        autoFocus
                        name="website"
                        onChange={this.handleInputChange}
                    />
                    <div>Are you available for Bachelor's Thesis?</div>
                    <RadioGroup aria-label="available" defaultValue="yes" name="available" required row
                                onChange={this.handleInputChange}>
                        <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes"/>
                        <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"/>
                    </RadioGroup>
                </div>;
            }

        }
        return <MuiThemeProvider>
            <div className="Register">

                <div className="HeroSide">
                    <div className="MainTitle">
                        <div className="TitleUbbTool">
                            <span className="UBB">UBB</span>
                            <span className="Tool">Tool</span>
                        </div>
                        <div className="TitlePro">
                            PRO
                        </div>
                    </div>

                    <img className="HeroImage"
                         alt="hero"/>
                    <div className="MidDivider">
                    </div>
                </div>

                <div className="RegisterFormSide">
                    <div className="RegisterTitle">Register</div>
                    <div className="RegisterForm">
                        <form onSubmit={this.registerMe}>
                            <TextField
                                className="GroupTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                name="firstName"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="GroupTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                                name="lastName"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="EmailTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                name="email"
                                error={!(this.state.localErrors.email == null)}
                                helperText={this.state.localErrors.email}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="PasswordTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="Password"
                                autoComplete="email"
                                autoFocus
                                name="password"
                                error={!(this.state.localErrors.password == null)}
                                helperText={this.state.localErrors.password}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="PasswordTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                id="confirmPassword"
                                label="Confirm Password"
                                autoFocus
                                name="confirmPassword"
                                error={!(this.state.localErrors.confirmPassword == null)}
                                helperText={this.state.localErrors.confirmPassword}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="GroupTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="university"
                                label="University"
                                autoFocus
                                name="university"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="GroupTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="faculty"
                                label="Faculty"
                                autoFocus
                                name="faculty"
                                onChange={this.handleInputChange}
                            />
                            <RadioGroup className="radioGroup" aria-label="type" name="type" row
                                        onChange={this.setType}>
                                <FormControlLabel control={<Radio color="primary"/>}
                                                  value="student"
                                                  label="Student"/>
                                <FormControlLabel value="teacher" control={<Radio color="primary"/>}
                                                  label="Teacher"/>
                            </RadioGroup>
                            {studentOrTeacher}
                            <div>
                                <button type="submit" className="btn btn-secondary myButton"
                                        style={{float: "left"}}>Submit
                                </button>
                                <div style={{float: "left", marginTop: "6%", marginLeft: "5%"}}>Already have an
                                    account? <a href="/login">Login </a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>;
    }
}

export default connect()(Register);