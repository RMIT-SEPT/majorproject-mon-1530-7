import React, {Component} from 'react'
import ServiceCard from '../layouts/ServiceCard';
import EmployeeCard from '../layouts/EmployeeCard';
import TimeSelectorCard from '../layouts/TimeSelectorCard';
import { Container, Jumbotron, CardDeck, Form, Button} from 'react-bootstrap';

class CustomerBookingPageTest extends Component {

    constructor(props){

        super(props);
        this.state = {
            
            showError:false,
            showSuccess:false
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event){

        if(this.state.showError){
            alert('Invalid Booking: Please select a service, employee, and an available time.');
            event.preventDefault();
        }
        else{
            alert('Booking Successfull!');
            event.preventDefault();
        }
        
    }

    showSuccessAlert = () =>{

        this.setState({showSuccess:true});
    }

    hideSuccessAlert = () =>{

        this.setState({showSuccess:false})
    }

    showErrorAlert = () =>{

        this.setState({showError:true});
    }

    hideErrorAlert = () =>{

        this.setState({showError:false})
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Jumbotron id="jumbotron-cus-book-page">
                    <h2 className="h2-cus-book-page">Booking</h2>
                    <Container className="customerBookingPageContainer">
                        <CardDeck>
                            <ServiceCard />
                            <EmployeeCard/>
                            <TimeSelectorCard/>
                        </CardDeck>
                    </Container>
                    <Container className="makeCusBooking">
                        <Button variant="primary" size="lg" type="submit"
                            onClick={this.showErrorAlert}>
                            Make Booking
                        </Button>
                    </Container>
                </Jumbotron>
            </Form>
        )
    }
}

export default CustomerBookingPageTest;
