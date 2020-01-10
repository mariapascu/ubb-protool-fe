import React from "react";
import './Navbar.css';
import {isEmail, isEmpty, isLength, isContainWhiteSpace} from '../../shared/validator';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light stick">
                <NavLink className="navbar-brand" exact to="/">
                    UbbToolPro
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                // to="/schedule"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                // to="/teachers"
                                activeClassName="active"
                            >
                                Teachers
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;