import React, {useState, Component} from 'react'
import ServiceCard from './ServiceCard';
import EmployeeCard from './EmployeeCard';
import { Container, Jumbotron, CardDeck, Form, Button} from 'react-bootstrap';

class CustomerBookingPageTest extends Component {

    constructor(props){

        super(props);
        this.state = {
            
            // value: 0,
            // Service
            service_id: 0,
            service_name: "",
            service_description: "",
            service_duration: 0,
            service_price: 0,

            // Employee
            employee_id: 0,
            user_id: 0,
            employee_services: [],
            user_preferredName: ""
        };
        
        // console.log(this.state.value);

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event){

        alert('Your booking is: ' + this.state.service_name);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Jumbotron id="jumbotron-cus-book-page">
                    <h2>Bookings</h2>
                    <Container className="customerBookingPageContainer">
                        <CardDeck>
                            <ServiceCard 
                                id={this.state.service_id}
                                name={this.state.service_name}
                                description={this.state.service_description}
                                duration={this.state.duration}
                                price={this.state.price}/>
                            <EmployeeCard/>
                        </CardDeck>
                    </Container>
                    <Container className="makeCusBooking">
                        <Button variant="primary" size="lg" type="submit">Make Booking</Button>        
                    </Container>
                </Jumbotron>
            </Form>
        )
    }
}

export default CustomerBookingPageTest;
