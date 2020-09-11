import React, {Component} from 'react'
import ServiceCard from '../layouts/ServiceCard';
import EmployeeCard from '../layouts/EmployeeCard';
import TimeSelectorCard from '../layouts/TimeSelectorCard';
import { Container, Jumbotron, CardDeck, Button} from 'react-bootstrap';
import CustomerBookingPageErrorModal from '../layouts/CustomerBookingPageErrorModal';
import CustomerBookingPageConfirmationModal from '../layouts/CustomerBookingPageConfirmationModal';

class CustomerBookingPageTest extends Component {

    constructor(props){

        super(props);
        this.state = {
            
            showError:false,
            showSuccess:false
        };

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
                            // Change to this.showSuccessAlert to signal confirmation modal
                            onClick={this.showErrorAlert}>
                            Make Booking
                        </Button>
                        <CustomerBookingPageErrorModal 
                            className="customer-booking-page-error-modal"
                            show={this.state.showError}
                            onHide={this.hideErrorAlert}
                            />
                        <CustomerBookingPageConfirmationModal
                            className="customer-booking-page-confirmation-modal"
                            show={this.state.showSuccess}
                            onHide={this.hideSuccessAlert}
                            />
                    </Container>
                </Jumbotron>
        )
    }
}

export default CustomerBookingPageTest;
