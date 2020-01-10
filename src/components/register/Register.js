import React from "react";
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import './Register.css';
import {withStyles} from '@material-ui/core/styles/withStyles';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import purple from "@material-ui/core/es/colors/purple";
import {isEmpty} from "../../shared/validator";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {}, // Contains register form data
            typeSelected: false, // Indicates if the user chose his type
            errors: {}, // Contains login field errors
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
        console.log(formData);
        if (formData.password.length < 6) {
            errors.password = "Password must contain at least 6 characters!";
        }
        if (!(formData.password === formData.confirmPassword)) {
            errors.password = "Passwords don't match!";
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

    registerMe = (e) => {
        console.log(this.state);
        e.preventDefault();
        let errors = this.validateRegistration();
        if (errors === true) {
            this.props.history.push('/login');
        }

    };

    handleInputChange = (event) => {
        console.log("handle input change " + event.target.name + " " + event.target.value);
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
                    <div>Are you available for Bachelor's Thesis?</div>
                    <RadioGroup aria-label="available" name="available" required row onChange={this.handleInputChange}>
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
                    <div className="RegisterForm" >
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
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="PasswordTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                autoComplete="email"
                                autoFocus
                                name="password"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                className="PasswordTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="confirmPassword"
                                label="Confirm Password"
                                autoFocus
                                name="confirmPassword"
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
                                <button type="submit" className="btn btn-secondary myButton" style={{float:"left"}}>Submit</button>
                                <div style={{float:"left", marginTop: "6%", marginLeft: "5%"}}>Already have an account? <a href="/login">Login </a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>;
    }
}

export default connect()(Register);