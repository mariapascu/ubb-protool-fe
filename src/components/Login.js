import React from "react";
import './login.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../shared/validator';
import { connect } from 'react-redux'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {
        
        e.preventDefault();

        let errors = this.validateLoginForm();
        const { formData } = this.state;
      

        if(errors === true){
            this.props.addUser(formData.email,formData.password)
            this.props.history.push('/welcomeUser')
           
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Login">
                <div>
                    <form onSubmit={this.login}>
                        <form controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email &&
                            <label>{errors.email}</label>
                        }
                        </form>
                        <form controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password &&
                            <label>{errors.password}</label>
                        }
                        </form>
                        <button type="submit" >Sign-In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Login);