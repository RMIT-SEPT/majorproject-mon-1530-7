import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

class CustomerPastBookingsPage extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-cus-book-page">
                <Container>
                    <h2 className="h2-cus-book-page">Booking History</h2>
                </Container>
                <Container className="customerBookingPageContainer">
                    <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
                        <Card.Header as="h6">
                            <Row>
                                <Col>Service</Col>
                                <Col>Employee</Col>
                                <Col>Date</Col>
                                <Col>Time</Col>
                                <Col>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>Service 1</Col>
                                <Col>Mia Smith</Col>
                                <Col>12/09/2020</Col>
                                <Col>10:30 am</Col>
                                <Col>
                                    <Button variant="danger" size="sm" type="submit">Cancel</Button>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col>Service 2</Col>
                                <Col>Kai Lomia</Col>
                                <Col>14/09/2020</Col>
                                <Col>12:30 pm</Col>
                                <Col>
                                    <Button variant="danger" size="sm" type="submit">Cancel</Button>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col>Service 3</Col>
                                <Col>Athena Jackson</Col>
                                <Col>20/09/2020</Col>
                                <Col>2:15 am</Col>
                                <Col>
                                    <Button variant="danger" size="sm" type="submit">Cancel</Button>
                                </Col>
                            </Row><br/>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        )
    }
}

export default CustomerPastBookingsPage

// <Container className="customerBookingPageContainer">
//                     <CardDeck>
//                         <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
//                             <Card.Body>
//                             <Card.Title>Available Services</Card.Title><br/>