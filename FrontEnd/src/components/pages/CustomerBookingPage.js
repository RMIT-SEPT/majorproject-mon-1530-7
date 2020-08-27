import React, { Component, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Jumbotron, Button, ToggleButtonGroup, ToggleButton, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../react_dates_overrides.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { setMinutes, setHours } from 'date-fns'



const DateSelector = () => {
    const[startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 10)
    );
    return (
        <DatePicker selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    includeTimes={[
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



// const Example = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const ExampleCustomInput = ({ value, onClick }) => (
//         <button className="example-custom-input" onClick={onClick}>
//           {value}
//         </button>
//     );
//     return (
//       <DatePicker selected={startDate} 
//                 onChange={date => setStartDate(date)}
//                 customInput={<ExampleCustomInput />}
//         />
//     );
//   };


// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import { DateUtils } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import '../../react_day_picker_input_overrides.css';

// import dateFnsFormat from 'date-fns/format';
// import dateFnsParse from 'date-fns/parse';

// function parseDate(str, format, locale) {
//   const parsed = dateFnsParse(str, format, new Date(), { locale });
//   if (DateUtils.isDate(parsed)) {
//     return parsed;
//   }
//   return undefined;
// }

// function formatDate(date, format, locale) {
//   return dateFnsFormat(date, format, { locale });
// }


// const FORMAT = 'dd/MM/yyyy';








class CustomerBookingPage extends Component {


    // constructor(props){
    //     super(props);
    //     this.state ={
    //         date: null,
    //         block: true,
    //         small: true,
    //         horizontalMargin: 5,
    //         noBorder: true
    //     }
    // }

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
        )
    }
}

export default CustomerBookingPage;


// <SingleDatePicker
//                                 date={this.state.date} 
//                                 onDateChange={date => this.setState({ date })} 
//                                 focused={this.state.focused}
//                                 onFocusChange={({ focused }) => this.setState({ focused })} 
//                                 id="booking_date_selection" 
//                                 block={this.state.block}
//                                 // small={this.state.small}
//                                 horizontalMargin={this.state.horizontalMargin}
//                                 // noBorder={this.state.noBorder}
//                             /><br/>


// <Form>
//                                 <Form.Group controlId="Date">
//                                     <Form.Control type="date" name="Date" required placeholder="Date"/>
//                                 </Form.Group>
//                             </Form>


// <DayPickerInput
//                             formatDate={formatDate}
//                             format={FORMAT}
//                             parseDate={parseDate}
//                             placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
//                           />


// <ToggleButtonGroup type="radio" name="options" vertical><br/>
                                
//                                 <ToggleButton variant="outline-primary" value={1} size="lg">10:00 am</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={3} size="lg">11:00 am</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={5} size="lg">12:00 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={7} size="lg">1:00 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={9} size="lg">2:00 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={11} size="lg">3:00 pm</ToggleButton><br/>
                            
                            
//                                 <ToggleButton variant="outline-primary" value={2} size="lg">10:30 am</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={4} size="lg">11:30 am</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={6} size="lg">12:30 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={8} size="lg">1:30 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={10} size="lg">2:30 pm</ToggleButton><br/>
//                                 <ToggleButton variant="outline-primary" value={12} size="lg">3:30 pm</ToggleButton>
//                             </ToggleButtonGroup>