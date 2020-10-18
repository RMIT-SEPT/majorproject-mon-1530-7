import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Jumbotron, Row } from "react-bootstrap";
import "../../index.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserProfile from "../../UserProfile.js";
import AdminDashboardCurrentBookingsSection from "./AdminDashboardCurrentBookingsSection";

class AdminDashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBookings: [],
      pastBookings: [],
      showCurrent: true,
      loadingCurrentBookings: true,
    };
  }

  componentDidMount() {
    this.fetchCurrentBookings();
    this.fetchPastBookings();
  }

  fetchCurrentBookings() {
    const fetchBookingsURL = new URL("bookings", process.env.REACT_APP_API_URL);
    fetchBookingsURL.searchParams.append("user", UserProfile.getUID());
    fetchBookingsURL.searchParams.append("status", "upcoming");
    fetch(fetchBookingsURL, {
      headers: {
        Authorization: UserProfile.getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          currentBookings: data["bookings"],
          loadingCurrentBookings: false,
        })
      );
  }

  fetchPastBookings() {
    const fetchBookingsURL = new URL("bookings", process.env.REACT_APP_API_URL);
    console.log(fetchBookingsURL);
    fetchBookingsURL.searchParams.append("user", UserProfile.getUID());
    fetchBookingsURL.searchParams.append("status", "completed");
    fetch(fetchBookingsURL, {
      headers: {
        Authorization: UserProfile.getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          pastBookings: data["bookings"],
          loadingCurrentBookings: false,
        })
      );
  }

  setCurrentState = () => {
    this.setState({ showCurrent: true });
  };
  setPastState = () => {
    this.setState({ showCurrent: false });
  };

  render() {
    return (
      <Jumbotron id="dashboard-jumbotron">
        <Container>
          <h2 className="h2-main">Admin Dashboard</h2>
          <Row className="shadow p-3 mb-5 bg-white rounded" id="row-custom">
            <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom">
              <ButtonGroup toggle horizontal>
                <ToggleButton
                  type="radio"
                  variant="outline-primary"
                  checked={this.state.showCurrent === true}
                  name="radio"
                  size="lg"
                  onChange={this.setCurrentState}
                >
                  Upcoming
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  variant="outline-primary"
                  checked={this.state.showCurrent === false}
                  name="radio"
                  size="lg"
                  onChange={this.setPastState}
                >
                  Completed
                </ToggleButton>
              </ButtonGroup>
              {this.state.showCurrent ? (
                <AdminDashboardCurrentBookingsSection
                  currentBookings={this.state.currentBookings}
                />
              ) : (
                <AdminDashboardCurrentBookingsSection
                  currentBookings={this.state.pastBookings}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default AdminDashboardLayout;
