import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';

class ManageEmp extends Component {
    render() {
        return (
            <div className="main-container">
                <Jumbotron id="dashboard-jumbotron">
                    <Container>
                        <h2 className="h2-main">Manage Employees</h2>
                        <Row>
                            <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom" xs={6} md={{ span: 12, offset: 0 }}>
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Working Hours</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mia Smith</td>
                                            <td>10:30am</td>
                                            <td><button className="elongated-btn">Edit Employee Details</button></td>
                                            <td><button className="elongated-btn">Add Schedule</button></td>
                                            <td><button className="elongated-btn">Edit Schedule</button></td>
                                        </tr>
                                        <tr>
                                            <td>Kai Lomia</td>
                                            <td>12:30pm</td>
                                            <td><button className="elongated-btn">Edit Employee Details</button></td>
                                            <td><button className="elongated-btn">Add Schedule</button></td>
                                            <td><button className="elongated-btn">Edit Schedule</button></td>
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

export default ManageEmp;
