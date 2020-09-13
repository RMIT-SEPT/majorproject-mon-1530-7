import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ManageEmp extends Component {
    render() {
        return (
            <div className="main-container">
                <Jumbotron id="dashboard-jumbotron">
                    <Container>
                        <h2 className="h2-main">Manage Employees</h2>
                        <Row>
                            <Col md={{ span: 1, offset: 10 }}><button className="elongated-btn">Add New Employee</button></Col>
                            <Col className="shadow p-4 mb-5 bg-white rounded" id="emp-col" xs={6} md={{ span: 12, offset: 0 }}>
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
                                            <td>10:30 am - 4:30 pm</td>
                                            <td><Link to="/emp-details"><button className="elongated-btn">View Employee Details</button></Link></td>
                                            <td><Link to="/add-schedule"><button className="elongated-btn">Add Schedule</button></Link></td>
                                            <td><Link to="/edit-schedule"><button className="elongated-btn">Edit Schedule</button></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Kai Lomia</td>
                                            <td>12:30 pm - 5:00 pm</td>
                                            <td><Link to="/emp-details"><button className="elongated-btn">View Employee Details</button></Link></td>
                                            <td><Link to="/add-schedule"><button className="elongated-btn">Add Schedule</button></Link></td>
                                            <td><Link to="/edit-schedule"><button className="elongated-btn">Edit Schedule</button></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Athena Jackson</td>
                                            <td>9:00 am - 4:15 pm</td>
                                            <td><Link to="/emp-details"><button className="elongated-btn">View Employee Details</button></Link></td>
                                            <td><Link to="/add-schedule"><button className="elongated-btn">Add Schedule</button></Link></td>
                                            <td><Link to="/edit-schedule"><button className="elongated-btn">Edit Schedule</button></Link></td>
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
