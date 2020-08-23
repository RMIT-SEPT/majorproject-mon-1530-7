import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Jumbotron, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class CustomerBookingPage extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-cus-book-page">
                <Container>
                    <h2 className="h2-cus-book-page">Booking</h2>
                </Container>
                <Container className="customerBookingPageContainer">
                    <CardDeck>
                        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Services</Card.Title><br/>
                            <ToggleButtonGroup type="radio" name="options" className="mb-2" vertical>
                                <ToggleButton variant="outline-primary" value={1} size="lg">Service 1</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={2} size="lg">Service 2</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={3} size="lg">Service 3</ToggleButton>
                            </ToggleButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Employees</Card.Title><br/>
                            <ToggleButtonGroup type="radio" name="options" className="mb-2" vertical>
                                <ToggleButton variant="outline-primary" value={1} size="lg">Mia</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={2} size="lg">Athena</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={3} size="lg">Kai</ToggleButton>
                            </ToggleButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Times</Card.Title><br/>
                            <ToggleButtonGroup type="radio" name="options" className="mb-2" vertical>
                                <ToggleButton variant="outline-primary" value={1} size="lg">12/09/2020 10:30 am</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={2} size="lg">14/09/2020 12:30 pm</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={3} size="lg">20/09/2020 2:15 pm</ToggleButton>
                            </ToggleButtonGroup>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
                <Container className="makeCusBooking">
                    <Button variant="primary" size="lg" type="submit">Make Booking</Button>
                </Container>
          </Jumbotron>
        )
    }
}

export default CustomerBookingPage;
