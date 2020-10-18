import React, { Component } from "react";
import { Container, Col, Jumbotron, Row } from "react-bootstrap";
import UserProfile from "../../UserProfile.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: UserProfile.getUID(),
                   userData:[] };
  }
  loadInfo(items) {}
  handleLoad() {
    const fetchProfileURL = new URL("user/"+UserProfile.getUID(), process.env.REACT_APP_API_URL);
    
    fetch(fetchProfileURL, {
      headers: {
        Authorization: UserProfile.getToken(),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        
        this.setState({
          userData: data["user"],
        });
      });
      
  }

  componentWillMount() {
    this.handleLoad();
  }
  render() {
    return (
      <div className="profile-container">
        <h2 className="h2-main">Profile</h2>
        <Col
          className="shadow p-3 mb-5 bg-white rounded"
          id="profile-col"
          xs={6}
          md={{ span: 6, offset: 0 }}
        >
          <h5 className="h5-main">Name</h5>
          <p>{this.state.userData.fullName}</p>
          <h5 className="h5-main">Username</h5>
          <p>{this.state.userData.email}</p>
          <h5 className="h5-main">Phone Number</h5>
          <p>{this.state.userData.phoneNumber}</p>

          <button className="edit-btn">Edit Profile</button>
        </Col>
      </div>
    );
  }
}

export default Profile;
