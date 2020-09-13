import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';

class EmpDetails extends Component {
    render() {
        return (
            <div className="main-container">
                <Jumbotron id="dashboard-jumbotron">
                    <Container>
                        <h2 className="h2-main">Employee Details</h2>
                        <Row>
                            <Col className="shadow p-4 mb-5 bg-white rounded" id="emp-col" xs={6} md={{ span: 12, offset: 0 }}>
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Schedule</th>
                                            <th scope="col">Working Hours</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
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
