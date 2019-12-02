import React from "react";
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material-ui/core'
import TextField from '@material-ui/core/TextField';

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
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let {formData} = this.state;
        formData[name] = value;
        this.setState({typeSelected: true});
    };

    register = (e) => {
        console.log("register");
    };

    render() {
        var a;
        if (this.state.typeSelected) {
            if (this.state.formData['type'] === 'student') {
                a = <TextField
                    className="GroupTextField"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Group"
                    autoFocus
                    name="password"
                    outline size="sm"
                />;
            } else {
                a = <div>
                    <div>Are you available?</div>
                    <RadioGroup aria-label="gender" name="available" row>
                        <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                        <FormControlLabel value="no" control={<Radio/>} label="No"/>
                    </RadioGroup>
                </div>;
            }

        }
        return (
            <MuiThemeProvider>
                <div className="Login">

                    <div className="HeroSide">
                        <h1>Ceva</h1>
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
                        <form onSubmit={this.register} className="LoginForm">
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
                                outline size="sm"
                            />
                            <TextField
                                className="PasswordTextField"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Confirm Password"
                                autoFocus
                                name="password"
                                outline size="sm"
                            />
                            <RadioGroup aria-label="gender" name="type" row onChange={this.setType}>
                                <FormControlLabel value="student" control={<Radio/>} label="Student"/>
                                <FormControlLabel value="teacher" control={<Radio/>} label="Teacher"/>
                            </RadioGroup>
                            {a}
                            <button type="submit" className="btn btn-secondary myButton">Submit</button>
                        </form>

                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(Register);