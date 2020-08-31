import React, { Component, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Jumbotron, Button, ToggleButtonGroup, ToggleButton, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import '../../react_dates_overrides.css';
// import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../../react-datepicker_overrides.css";
import { setMinutes, setHours } from 'date-fns'
import CustomerBookingPageErrorModal from '../modals/CustomerBookingPageErrorModal'



const DateSelector = () => {
    const[startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 10)
    );
    return (
        <DatePicker className="datePickerContainer" selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    includeTimes={[
                        setHours(setMinutes(new Date(), 0), 10),
                        setHours(setMinutes(new Date(), 30), 10),
                        setHours(setMinutes(new Date(), 0), 11),
                        setHours(setMinutes(new Date(), 30), 11),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 30), 12),
                        setHours(setMinutes(new Date(), 0), 13),
                        setHours(setMinutes(new Date(), 30), 13),
                        setHours(setMinutes(new Date(), 0), 14),
                        setHours(setMinutes(new Date(), 30), 14),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 30), 15)
                    ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
    );
}


// const [modalShow, setModalShow] = React.useState(false);

class CustomerBookingPage extends Component {

    // const [modalShow, setModalShow] = React.useState(false);

    // const [radio, setRadio] = React.useState(1);

    constructor(props){

        super(props);
        this.state = {
            
            value: 0,
        };
        
        // console.log(this.state.value);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    // state = {}

    handleChange(event){
        
        this.setState({value: event});
        // this.setState({value: event.selected.value})
    }

    // handleChange = (e, {value}) => this.setState({value});

    // handleChange = (val) => setValue(val);

    handleSubmit(event){

        alert('Your booking is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Jumbotron id="jumbotron-cus-book-page">
                <Container>
                    <h2 className="h2-cus-book-page">Booking</h2>
                </Container>
                <Container className="customerBookingPageContainer">
                    <CardDeck>
                        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Services</Card.Title><br/>
                            <ToggleButtonGroup type="radio" name="options" 
                                onChange={this.handleChange}
                                // onChange={(e) => {this.handleChange(e)}}
                                // onChange={(e) => {setRadio(e.target.value)}}
                                // onChange={(e) => this.setState({value: 1})}
                                className="mb-2" 
                                vertical>
                                <ToggleButton variant="outline-primary" value={1} size="lg">Service 1</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={2} size="lg">Service 2</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={3} size="lg">Service 3</ToggleButton>
                            </ToggleButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Available Employees</Card.Title><br/>
                            <ToggleButtonGroup type="radio" name="options" 
                                onChange={this.handleChange}
                                // onChange={(e) => {this.handleChange(e)}}
                                // onChange={(e) => {setRadio(e.target.value)}}
                                className="mb-2" 
                                vertical>
                                <ToggleButton variant="outline-primary" value={4} size="lg">Mia</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={5} size="lg">Athena</ToggleButton><br/>
                                <ToggleButton variant="outline-primary" value={6} size="lg">Kai</ToggleButton>
                            </ToggleButtonGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow p-3 mb-5 bg-white rounded" border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                            <Card.Title>Select Time</Card.Title><br/>
                            <DateSelector/>
                            </Card.Body>
                        </Card>
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

export default CustomerBookingPage;

// <Button variant="primary" size="lg" type="submit"
//                         onClick={() => setModalShow(true)}>Make Booking</Button>
//                     <CustomerBookingPageErrorModal 
//                         className="customer-booking-page-error-modal"
//                         show={modalShow}
//                         onHide={() => setModalShow(false)}
//                         />



