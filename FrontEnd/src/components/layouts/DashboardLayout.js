import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import CustomerDashboardCurrentBookingsSection from './CustomerDashboardCurrentBookingsSection';
import CustomerDashboardBookingHistorySection from './CustomerDashboardBookingHistorySection';
import "../../index.css";

// function DashboardLayout() {
  class DashboardLayout extends Component {

    constructor(props){
      super(props);
      this.state={
        //TODO AUTHENTICATION AND SELECTION OF USERID?
        user_id: null,
        currentBookings:[],
        loadingCurrentBookings: true,
        pastBookings:[],
        loadBookingHistory: true,
        //TODO MORE FOR BOOKING HISTORY
      }
    }

    componentDidMount(){

      this.fetchCurrentBookings();
    }

    fetchCurrentBookings(){
      // TODO SELECTION OF USER_ID
      fetch(process.env.REACT_APP_API_URL + "/bookings?user=:" + {user_id:1})
      .then((response) => response.json())
      .then((data) =>

        this.setState({currentBookings: data["bookings?user=:" + {user_id:1}], loadingCurrentBookings: false})
      );
    }

    fetchBookingHistory(){
      // TODO SELECTION OF USER_ID
      fetch(process.env.REACT_APP_API_URL + "/bookings?user=:" + {user_id:1})
      .then((response) => response.json())
      .then((data) =>

        this.setState({pastBookings: data["bookings?user=:" + {user_id:1}], loadBookingHistory: false})
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