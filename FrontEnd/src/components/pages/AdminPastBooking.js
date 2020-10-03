import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import AdminPastBookingLayout from '../layouts/AdminPastBookingLayout';

class AdminPastBooking extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-cus-book-page">
                <Container>
                    <h2 className="h2-cus-book-page">Admin Booking History</h2>
                </Container>
                <Container className="customerBookingPageContainer">
                    <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
                        <Card.Header as="h6">
                            <Row>
                                <Col>Service</Col>
                                <Col>Employee</Col>
                                <Col>Date</Col>
                                <Col>Time</Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <AdminPastBookingLayout/>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        );
    }
}

export default AdminPastBooking;