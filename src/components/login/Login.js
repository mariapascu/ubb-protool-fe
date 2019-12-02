import React from "react";
import './Login.css';
import {isEmail, isEmpty, isLength, isContainWhiteSpace} from '../../shared/validator';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import TextField from '@material-ui/core/TextField';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        console.log("handle input change " + event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let {formData} = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const {formData} = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        } else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, {gte: 6, lte: 16, trim: true})) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {
        console.log(this.state);
        e.preventDefault();

        let errors = this.validateLoginForm();
        const {formData} = this.state;


        if (errors === true) {
            this.props.addUser(formData.email, formData.password)
            this.props.history.push('/welcomeUser')

        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

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

                        <img className="HeroImage"
                             alt="hero"/>
                        <div className="MidDivider">
                        </div>
                    </div>

                    <div className="FormSide">
                        <form onSubmit={this.login} className="LoginForm">
                            <div className="SignIn">Sign in</div>
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
                                onChange={this.handleInputChange}
                                name="password"
                                outline size="sm"
                            />
                            <button type="submit" className="btn btn-secondary myButton">Submit</button>
                        </form>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect()(Login);