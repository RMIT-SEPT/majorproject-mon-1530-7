import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import UserProfile from '../../UserProfile.js'



class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        
      }
    
      handleSubmit = (event) => {
        var username = this.state.username
        fetch(process.env["REACT_APP_API_URL"] + "/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
        })
          .then(function (response) {
            if (!response.ok) {
              console.log("reject");
              throw new Error("Request failed");
            }

            return response.json();
          })
          .then((data) => {
            UserProfile.setLoggedIn();
            UserProfile.setAdmin(data.admin);
            UserProfile.setUID(data.userId);
            UserProfile.setToken(data.token);

            window.location.reload(false);
          })
          .catch((error) => alert("incorrect username or password"));

        event.preventDefault();
        
    }
    
    
    render() {
        
        
        return (
            <div className="loginContainer">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.value} onChange={this.handleChange} type="username"  placeholder="Enter Username"/>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.value} onChange={this.handleChange} type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LoginPage;
