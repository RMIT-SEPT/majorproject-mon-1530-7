import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import CustomerDashboardCurrentBookingsSection from './CustomerDashboardCurrentBookingsSection';
import CustomerDashboardBookingHistorySection from './CustomerDashboardBookingHistorySection';
import "../../index.css";
import UserProfile from "../../UserProfile.js";

// function DashboardLayout() {
  class DashboardLayout extends Component {

    constructor(props){
      super(props);
      this.state={
        user_id: UserProfile.getUID(),
        currentBookings:[],
        loadingCurrentBookings: true,
        pastBookings:[],
        loadBookingHistory: true,
        //TODO MORE FOR BOOKING HISTORY?
      }
    }

    componentDidMount(){

      this.fetchCurrentBookings();
      this.fetchBookingHistory();
    }
    
    fetchCurrentBookings(){
      fetch(process.env.REACT_APP_API_URL + "/bookings?user=" + this.state.user_id, {
        headers : {
          Authorization: UserProfile.getToken()
        }
      })
      .then((response) => response.json())
      .then((data) =>

        this.setState({currentBookings: data["bookings"], loadingCurrentBookings: false})
      );
    }

    fetchBookingHistory(){
      fetch(process.env.REACT_APP_API_URL + "/bookings?user=" + this.state.user_id, {
        headers : {
          Authorization: UserProfile.getToken()
        }
      })
      .then((response) => response.json())
      .then((data) =>

        this.setState({pastBookings: data["bookings"], loadBookingHistory: false})
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
                
                <CustomerDashboardBookingHistorySection
                  pastBookings={this.state.pastBookings}
                  loading={this.state.loadBookingHistory}  
                />

              </Col>
            </Row>
          </Container>
        </Jumbotron>
      )
    }
}

export default DashboardLayout;