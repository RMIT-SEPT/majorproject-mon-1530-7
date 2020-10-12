import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import CustomerDashboardCurrentBookingsSection from './CustomerDashboardCurrentBookingsSection';
import "../../index.css";
import UserProfile from "../../UserProfile.js";
import CustomerPastBookingsPage from '../pages/CustomerPastBookingsPage';

  class DashboardLayout extends Component {

    constructor(props){
      super(props);
      this.state={
        currentBookings:[],
        loadingCurrentBookings: true,
      }
    }

    componentDidMount(){

      this.fetchCurrentBookings();
    }
    
    fetchCurrentBookings(){
      const fetchBookingsURL = new URL("bookings", process.env.REACT_APP_API_URL);
      fetchBookingsURL.searchParams.append("user", UserProfile.getUID());
      fetchBookingsURL.searchParams.append("status", "upcoming");
      fetch(fetchBookingsURL, {
        headers : {
          Authorization: UserProfile.getToken()
        }
      })
      .then((response) => response.json())
      .then((data) =>

        this.setState({currentBookings: data["bookings"], loadingCurrentBookings: false})
      );
    }

    render(){
      return (
        <Jumbotron id="dashboard-jumbotron">
          <Container>
            <h2 className="h2-main">Dashboard</h2>
            <h4 className="">Hello! Welcome to your dashboard!</h4>
            <Row>
              <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom" xs={6} md={{ span: 6, offset: 0 }}>
                <h5 className="h5-main">Current Bookings</h5>
                <CustomerDashboardCurrentBookingsSection 
                  currentBookings={this.state.currentBookings}
                  loading={this.state.loadingCurrentBookings}
                />
              </Col>
              <Col className="shadow p-3 mb-5 bg-white rounded" xs={6} md={{ span: 5, offset: 1 }}>
                <h5 className="h5-main">Booking History</h5>
                
                <CustomerPastBookingsPage
                  loadingCustomerDashboardBookingHistorySection={true}
                  loadingCustomerPastBookingsPage={false}
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      )
    }
}

export default DashboardLayout;