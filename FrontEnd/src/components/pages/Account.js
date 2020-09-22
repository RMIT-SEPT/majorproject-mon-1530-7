import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserProfile from '../../UserProfile.js'

class Account extends Component {
    handleLogout = (event) => {
        UserProfile.setLoggedOut()
        window.location.reload(false)
        
      }
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
                            <Link to="/customer-past-bookings">
                            <button className="btnBorder-large">Booking History</button>
                            </Link>
                            <Link to="/account">
                            <button onClick={this.handleLogout} className="btnBorder-large">Log Out</button>
                            </Link>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Account;
