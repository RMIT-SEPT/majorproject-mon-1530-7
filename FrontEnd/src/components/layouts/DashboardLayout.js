import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../index.css";
import { Container, Col, Jumbotron, Row } from "react-bootstrap";
import BookingsList from "../components/BookingsList";

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron id="dashboard-jumbotron">
        <Container>
          <h2 className="h2-main">Dashboard</h2>
          <h4 className="">Hello! Welcome to your dashboard!</h4>
          <Row>
            <Col
              className="shadow p-3 mb-5 bg-white rounded"
              id="col-custom"
              xs={6}
              md={{ span: 6, offset: 0 }}
            >
              <h5 className="h5-main">Current Bookings</h5>
              <BookingsList upcoming  />
            </Col>
            <Col
              className="shadow p-3 mb-5 bg-white rounded"
              xs={6}
              md={{ span: 5, offset: 1 }}
            >
              <h5 className="h5-main">Booking History</h5>

              <BookingsList />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default DashboardLayout;
