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
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Service</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Service 1</td>
                  <td>Mia Smith</td>
                  <td>12/09/2020</td>
                  <td>10:30am</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Service 2</td>
                  <td>Kai Lomia</td>
                  <td>14/09/2020</td>
                  <td>12:30pm</td>
                </tr>
              </tbody>
            </table>
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