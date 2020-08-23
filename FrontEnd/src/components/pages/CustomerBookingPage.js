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
                        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Services</Card.Title><br/>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">Service 1</Button><br/>
                            <Button variant="outline-primary" size="lg">Service 2</Button><br/>
                            <Button variant="outline-primary" size="lg">Service 3</Button>
                            </ButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Employees</Card.Title><br/>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">Mia</Button><br/>
                            <Button variant="outline-primary" size="lg">Athena</Button><br/>
                            <Button variant="outline-primary" size="lg">Kai</Button>
                            </ButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Times</Card.Title><br/>
                            <ButtonGroup vertical>
                            <Button variant="outline-primary" size="lg">12/09/2020 10:30 am</Button><br/>
                            <Button variant="outline-primary" size="lg">14/09/2020 12:30 pm</Button><br/>
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
