import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {username:'',
                      password:''};
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        
      }
    
      handleSubmit = (event) => {
        
        
        fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)     
          }).then(function(response) {
            console.log(response);
            return response.json();
        });
          
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
