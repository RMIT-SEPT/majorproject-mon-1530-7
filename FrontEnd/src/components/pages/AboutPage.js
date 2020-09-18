import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron} from 'react-bootstrap';

class AboutPage extends Component {
    render() {
        return (

            <Jumbotron id="jumbotron-custom">
                <Container>
                    <h1>
                        About Us.
                    </h1>    
                    <p>
                        Here at Fresh-Cutz we take pride in having good connections with our cutz-omers 
                        and creating an easy environment online to assists our cutz-omers to book their trips into our selected salons. 
                    </p>

                    <p>
                        To make a booking visit the home page and ensure your logged in!!!
                    </p>

                    <p>
                        Brought to you by some happy RMIT students in the year of 2020.
                    </p>

                    <h4>
                            Not Registered Yet? 
                            <a href="/signup">Register Here</a>
                            <a href="/login">Or log in here!!</a> 
                    </h4>
                    </Container>
            </Jumbotron>
        );
    }
}

export default AboutPage;
