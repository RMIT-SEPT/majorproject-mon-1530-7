import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import UserProfile from '../../UserProfile.js'



class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit = (event) => {
        console.log(this.state)
        console.log(this.state.username)
        var username = this.state.username
        fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        }).then(function (response) {
            if (!response.ok) {
                console.log('reject')
                throw (new Error("Request failed"));
            }


            return response.json();
        }).then(data => {

            console.log(data)
            UserProfile.setLoggedIn(true)
            UserProfile.setUID(username)
            UserProfile.setToken(data.token)
            window.location.reload(false)


        }).catch(error => alert("incorrect username or password"));

        event.preventDefault();

    }


    render() {


        return (
            <div className="login-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUsername" id="form-layout">
                        <Form.Label id="custom-form-label">Username</Form.Label>
                        <Form.Control name="username" value={this.state.value} onChange={this.handleChange} type="username" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="formPassword" id="form-layout">
                        <Form.Label id="custom-form-label">Password</Form.Label>
                        <Form.Control name="password" value={this.state.value} onChange={this.handleChange} type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <button className="btn-filled-alt">Log In</button>
                </Form>
            </div>
        )
    }
}

export default LoginPage;
