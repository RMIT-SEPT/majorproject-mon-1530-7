import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserProfile from '../../UserProfile.js'

class EditCustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { username: UserProfile.getUID() };
    }
    loadInfo(items) {

    }
    handleLoad() {

        var phoneNumber = ''
        fetch('http://localhost:8080/api/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();

        }).then(data => {
            this.setState({
                phoneNumber: data.phoneNumber,
                name: data.fullName
            })
        }
        )

    }
    componentWillMount() {
        this.handleLoad();
    }
    render() {

        return (
            <div className="profile-container">
                <h2 className="h2-main">Edit Profile</h2>
                <Col className="shadow p-3 mb-5 bg-white rounded" id="profile-col" xs={6} md={{ span: 6, offset: 0 }}>
                    {/* TO DO */}
                </Col>
            </div >
        )
    }
}

export default EditCustomerDetails;
