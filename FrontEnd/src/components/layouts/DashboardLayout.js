import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import "../../index.css";

function DashboardLayout() {
  return (
    <Jumbotron id="dashboard-jumbotron">
      <Container>
        <h2 className="h2-main">Dashboard</h2>
        <h4 className="">Hello! Welcome to your dashboard!</h4>
        <Row>
          <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom" xs={6} md={{ span: 6, offset: 0 }}>
            <h5 className="h5-main">Current Bookings</h5>
            <p>Current Bookings Go here</p>
          </Col>
          <Col className="shadow p-3 mb-5 bg-white rounded" xs={6} md={{ span: 5, offset: 1 }}>
            <h5 className="h5-main">Upcoming Bookings</h5>
            <p>Upcoming Bookings Go here</p>
          </Col>
        </Row>
        <Row>
          <Col className="shadow p-3 mb-5 bg-white rounded" xs={6} md={{ span: 5, offset: 7 }}>
            <h5 className="h5-main">Booking History</h5>
            <p>Booking History Goes here</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default DashboardLayout;