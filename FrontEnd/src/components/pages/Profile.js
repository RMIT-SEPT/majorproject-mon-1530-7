import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import UserProfile from '../../UserProfile.js'

class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {username:UserProfile.getUID()};
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
          }).then(function(response) {
            return response.json();
            
        }).then(data => this.setState({phoneNumber:data.phoneNumber,
                                        name:data.fullName }))
        console.log(this.state)
   
    }
    componentWillMount() {
        this.handleLoad();
    }
    render() {
        
        return (
            <div className="profile-container">
                <h2 className="h2-main">Profile</h2>
                <Col className="shadow p-3 mb-5 bg-white rounded" id="profile-col" xs={6} md={{ span: 6, offset: 0 }}>
                    <h5 className="h5-main">Name</h5>
                    <p>{this.state.name}</p>
                    <h5 className="h5-main">Username</h5>
                    <p>{this.state.username}</p>
                    <h5 className="h5-main">Phone Number</h5>
                    <p>{this.state.phoneNumber}</p>
                    
                    <button className="edit-btn">Edit Profile</button>
                </Col>
            </div>
        )
    }
}

export default Profile;
