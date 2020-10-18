import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StaffList from '../StaffList';

class ManageEmp extends Component {
    constructor(props){
        super(props);
        this.state = {
            staff: [],
            loadingStaff: true,
        };
    }

    render() {
        return (
            <div className="main-container">
                <Jumbotron id="dashboard-jumbotron">
                    <Container>
                        <h2 className="h2-main">Manage Employees</h2>
                        <Row>
                            <Col md={{ span: 0, offset: 10 }}><Link to="/new-employee"><button className="elongated-btn">Add New Employee</button></Link></Col>
                            <Col className="shadow p-4 mb-5 bg-white rounded" id="emp-col" xs={6} md={{ span: 12, offset: 0 }}>
                                <StaffList 
                                    cusbooking={false}
                                    empmanage={true}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default ManageEmp;