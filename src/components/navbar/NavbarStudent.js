import React from "react";
import './NavbarStudent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

class NavbarStudent extends React.Component {
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
                                to="/user"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/user"
                                activeClassName="active"
                            >
                                Teachers
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/login"
                                activeClassName="active"
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarStudent;