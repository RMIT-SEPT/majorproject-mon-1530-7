import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Jumbotron, Button, ButtonGroup} from 'react-bootstrap'
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
                        <Card className = "text-center" border="primary" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Services</Card.Title>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">Service 1</Button>
                            <Button variant="outline-primary" size="lg">Service 2</Button>
                            <Button variant="outline-primary" size="lg">Service 3</Button>
                            </ButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className = "text-center" border="primary">
                            <Card.Body>
                            <Card.Title>Available Employees</Card.Title>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">Mia</Button>
                            <Button variant="outline-primary" size="lg">Athena</Button>
                            <Button variant="outline-primary" size="lg">Kai</Button>
                            </ButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className = "text-center" border="primary">
                            <Card.Body>
                            <Card.Title>Available Times</Card.Title>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">12/09/2020 10:30 am</Button>
                            <Button variant="outline-primary" size="lg">14/09/2020 12:30 pm</Button>
                            <Button variant="outline-primary" size="lg">20/09/2020 2:15 pm</Button>
                            </ButtonGroup>
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
