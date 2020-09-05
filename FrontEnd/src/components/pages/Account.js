import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Account extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="main-container">
                    <Jumbotron id="center-jumbotron">
                        <Container>
                            <h2 className="h2-center">Account</h2>
                            <Link to="/profile">
                            <button className="btnBorder-large">Profile</button>
                            </Link>
                            <Link to="/booking_history">
                            <button className="btnBorder-large">Booking History</button>
                            </Link>
                            <Link to="/logout">
                            <button className="btnBorder-large">Log Out</button>
                            </Link>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Account;
