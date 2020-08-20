import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap';

class Account extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="main-container">
                    <Jumbotron id="center-jumbotron">
                        <Container>
                            <h2 className="h2-center">Account</h2>
                            <button className="btnBorder-large">Profile</button>
                            <button className="btnBorder-large">Booking History</button>
                            <button className="btnBorder-large">Log Out</button>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Account;
