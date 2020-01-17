import * as React from "react";
import NavbarStudent from "../../navbar/NavbarStudent";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import "./ProfileStudent.css"
import Card from "@material-ui/core/Card";


class ProfileStudent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarStudent/>
                <Container className="profileContainer">
                    <Card className="profileCard">

                    </Card>
                </Container>
            </div>
        )
    }
}

export default connect()(ProfileStudent)
