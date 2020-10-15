import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import "../../index.css";
import UserProfile from "../../UserProfile.js";
import AdminDashboardCurrentBookingsSection from "./AdminDashboardCurrentBookingsSection"

class AdminDashboardLayout extends Component{
  constructor(props){
    super(props);
    this.state={
      currentBookings:[],
      pastBookings:[],
      showCurrent:true,
      showPast:false,
      loadingCurrentBookings: true,
    }
  }

  componentDidMount(){
    this.fetchCurrentBookings();
    this.fetchPastBookings();
    
    
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

      this.setState({pastBookings: data["bookings"], loadingCurrentBookings: false})
    );
  }

  setCurrentState = () => {
    this.setState({ showCurrent: true });
    this.setState({ showPast: false });
  }
  setPastState = () => {
    this.setState({ showCurrent: false });
    this.setState({ showPast: true });
  }

  render() {
  
    return (
      <Jumbotron id="dashboard-jumbotron">
        <Container>
          <h2 className="h2-main">Admin Dashboard</h2>
            <Row className="shadow p-3 mb-5 bg-white rounded" id="row-custom">
            <Row>
                <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom" xs={6} md={{ span: 6, offset: 0 }}>
                <div>
                  <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off" onChange={this.setCurrentState} checked/> Upcoming Bookings 
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off" onChange={this.setPastState}/> Completed Bookings 
                  </label>
                </div>
                  <AdminDashboardCurrentBookingsSection 
                    currentBookings={this.state.currentBookings}
                    show={this.state.showCurrent}
                  />
                  <AdminDashboardCurrentBookingsSection 
                    currentBookings={this.state.pastBookings}
                    show={this.state.showPast}
                  />
                </Col>
              </Row>
            </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default AdminDashboardLayout;