import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class EmpDetails extends Component {
    render() {
        return (
          <div className="main-container">
            <Jumbotron id="dashboard-jumbotron">
              <Container>
                <h2 className="h2-main">Employee Details</h2>
                <Row>
                  <Col md={{ span: 0, offset: 8 }}>
                    <Link to="/add-schedule">
                      <button className="elongated-btn">Add Schedule</button>
                    </Link>
                  </Col>
                  <Col md={{ span: 0, offset: 0 }}>
                    <Link to="/edit-schedule">
                      <button className="elongated-btn">Edit Schedule</button>
                    </Link>
                  </Col>
                  <Col
                    className="shadow p-4 mb-5 bg-white rounded"
                    id="emp-col"
                    xs={6}
                    md={{ span: 12, offset: 0 }}
                  >
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">
                            <b>Sunday</b>
                          </th>
                          <th scope="col">
                            <b>Monday</b>
                          </th>
                          <th scope="col">
                            <b>Tuesday</b>
                          </th>
                          <th scope="col">
                            <b>Wednesday</b>
                          </th>
                          <th scope="col">
                            <b>Thursday</b>
                          </th>
                          <th scope="col">
                            <b>Friday</b>
                          </th>
                          <th scope="col">
                            <b>Saturday</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Hairdressing [ 10:30 am ]</td>
                          <td>Hair-cut [ 10:30 am ]</td>
                          <td></td>
                          <td></td>
                          <td>Hair-cut [ 10:30 am ]</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          </div>
        );
    }
}

export default EmpDetails;
