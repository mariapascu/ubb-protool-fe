import React from "react";
import './Login.css';
import {isEmail, isEmpty} from '../../shared/validator';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {Teacher} from "../../model/Teacher";
import {getUserByUsernameAndPassword} from "../../rest/loginRest";
import {Student} from "../../model/Student";
import {Subgroup} from "../../model/Subgroup";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {}, // Contains login form data
            localErrors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false, // Indicates in progress state of login form
            student: null,
            teacher: null
        }
    }

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

    validateLoginForm = (e) => {

        let errors = {};
        const {formData} = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank!";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email!";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank!";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    };

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();
        const {formData} = this.state;

        if (errors === true) {
            getUserByUsernameAndPassword(formData.email, formData.password).then((data) => {
                console.log(data + "Data from login");
                if (data == null) {

                } else if (data.studentId != null) {
                    console.log(data + "I am a student");
                    this.setState({student: data});
                    console.log(this.state.student.firstName);
                    this.setState({
                        student: new Student(data.studentId,
                            new Subgroup(0,data.studentGroup,data.studentSubGroup),
                            data.firstName,data.lastName,data.email,data.major,data.university,data.faculty)
                    });
                    this.props.addUser(this.state.student);
                    this.props.history.push('/user');
                } else {
                    console.log(data + "I am a teacher");
                    this.setState({teacher: data});
                    console.log(this.state.teacher);
                    this.setState({teacher: new Teacher(data.teacherId,data.teacherDepartment,
                        data.teacherAvailability,data.teacherFirstName,
                        data.teacherLastName,data.email,data.teacherUniversity,
                        data.teacherFaculty,data.teacherWebSite)});
                    this.props.addUser(this.state.teacher);
                    this.props.history.push('/teacher');
                }
            }).catch((err) => console.log(err));
        } else {
            this.setState({
                localErrors: errors,
                formSubmitted: true
            });
        }

        console.log("errors " + this.state.localErrors);
    };

    render() {

        const {errors, formSubmitted} = this.state;

        return (
            <MuiThemeProvider>
                <div className="Login">

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

                        <img className="HeroImageLogin"
                             alt="hero"/>
                        <div className="MidDivider">
                        </div>
                    </div>

                    <div className="FormSide">
                        <div className="LoginForm">
                            <form onSubmit={this.login}>
                                <div className="SignIn">Sign in</div>
                                <TextField
                                    className="ceva"
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
                                    error={!(this.state.localErrors.email == null)}
                                    helperText={this.state.localErrors.email}
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
                                    onChange={this.handleInputChange}
                                    name="password"
                                    error={!(this.state.localErrors.password == null)}
                                    helperText={this.state.localErrors.password}
                                />
                                <div>
                                    <div style={{float: "left"}}>
                                        <button type="submit" className="btn btn-secondary myButton">Submit</button>
                                    </div>
                                    <div style={{float: "left", marginTop: "7%", marginLeft: "5%"}}>Already have an
                                        account? <a href="/register">Register</a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect()(Login);
