import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ContactPage extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-alt2">
                <Container>
                    <h2 className="h2-center">Contact Us</h2>

                    <h5 className="h5-center">Phone Number : 1300 0000</h5>
                    <h5 className="h5-center">Email : bookingsystem@gmail.com</h5>

                    <Row>
                        <Col className="shadow p-3 mb-5 bg-white rounded" id="contact-card">

                            <h4 className="h5-main3">Have any questions?</h4>
                            <Form>
                                <Form.Group controlId="formName" id="form-custom">
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="formEmail" id="form-custom">
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group controlId="formFeedback" id="form-custom">
                                    <Form.Control type="text" placeholder="Enter Feedback" />
                                </Form.Group>
                                <Link to="/signup"><button className="btn-filled" id="align-btn">Submit Now</button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default ContactPage;
