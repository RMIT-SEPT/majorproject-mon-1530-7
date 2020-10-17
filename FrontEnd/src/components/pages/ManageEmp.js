import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ManageEmpRows from '../layouts/ManageEmpRows';
import UserProfile from '../../UserProfile';
import StaffList from '../StaffList';

class ManageEmp extends Component {
    constructor(props){
        super(props);
        this.state = {
            staff: [],
            loadingStaff: true,
        };
    }

    // componentDidMount(){
    //     this.fetchStaff();
    // }

    // fetchStaff() {
    //     fetch(process.env.REACT_APP_API_URL + "staff", {
    //       headers: {
    //         Authorization: UserProfile.getToken(),
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) =>
    //         this.setState({ staff: data["staff"], loadingStaff: false })
    //       )
    //       .catch((e) => console.log(e));
    //   }

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

// <ManageEmpRows 
//                                     staff={this.state.staff}
//                                     loading={this.state.loadingStaff}
//                                 />