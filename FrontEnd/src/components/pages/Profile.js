import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';

class LoginPage extends Component {
    render() {
        return (
            <div className="profile-container">
                <h2 className="h2-main">Profile</h2>
                <Col className="shadow p-3 mb-5 bg-white rounded" id="profile-col" xs={6} md={{ span: 6, offset: 0 }}>
                    <h5 className="h5-main">Name</h5>
                    <p>Mia</p>
                    <h5 className="h5-main">Address</h5>
                    <p>123 Sample St</p>
                    <h5 className="h5-main">Phone Number</h5>
                    <p>0123456789</p>
                    <h5 className="h5-main">Email/Username</h5>
                    <p>mia@email.com</p>
                </Col>
            </div>
        )
    }
}

export default LoginPage;
