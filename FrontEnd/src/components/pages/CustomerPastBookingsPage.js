import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import PastBookingsRows from '../layouts/PastBookingsRows';
import UserProfile from "../../UserProfile.js";
import CustomerDashboardBookingHistorySection from "../layouts/CustomerDashboardBookingHistorySection";

class CustomerPastBookingsPage extends Component {

    constructor(props){
        super(props);
        this.state={
            pastBookings:[],
            loadingPastBookings: true,
        }
    }

    componentDidMount(){

        this.fetchPastBookings();
    }

    fetchPastBookings(){
        const fetchBookingsURL = new URL("bookings", process.env.REACT_APP_API_URL);
        fetchBookingsURL.searchParams.append("user", UserProfile.getUID());
        fetchBookingsURL.searchParams.append("status", "completed");
        fetch(fetchBookingsURL, {
            headers : {
                Authorization: UserProfile.getToken()
            }
        })
        .then((response) => response.json())
        .then((data) => 
        
            this.setState({pastBookings: data["bookings"], loadingPastBookings: false})
        );
    }

    renderCustomerPastBookingsPage(){
        return(
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
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <PastBookingsRows
                                pastBookings={this.state.pastBookings}
                                loading={this.state.loadingPastBookings}
                            />
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        );
    }

    renderCustomerDashboardBookingHistorySection(){
        return(
            <CustomerDashboardBookingHistorySection
                pastBookings={this.state.pastBookings}
                loading={this.state.loadingPastBookings}
            />
        );
    }

    renderAppropriateCustomerPastBookingComponent(){
        if(this.props.loadingCustomerPastBookingsPage && !this.props.loadingCustomerDashboardBookingHistorySection){
            return(this.renderCustomerPastBookingsPage());
        }else if(this.props.loadingCustomerDashboardBookingHistorySection && !this.props.loadingCustomerPastBookingsPage){
            return(this.renderCustomerDashboardBookingHistorySection());
        }
    }

    render() {
        return (
            <div>
                {this.renderAppropriateCustomerPastBookingComponent()}
            </div>
        )
    }
}

CustomerPastBookingsPage.defaultProps = {
    loadingCustomerPastBookingsPage: true,
    loadingCustomerDashboardBookingHistorySection: false,
};

export default CustomerPastBookingsPage;
