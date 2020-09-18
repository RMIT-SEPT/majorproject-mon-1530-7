import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron, Button, Form} from 'react-bootstrap';


class ContactPage extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-custom">
                <Container>
                    <h1>
                        Contact Us.
                    </h1>    
                    <p>
                        We look forward to hearing what our cutz-omers have to say about our services, 
                        so please contact us and let us know how your experience with Fresh-Cutz was.
                    </p>

                    <p>
                        Phone Number : 1300-CUTZ
                        Email : FreshCutz@gmail.com
                    </p>

                    <h4>
                        OR Leave Feedback in this form below!
                    </h4>

                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name"/>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email (If you want a reply!)" />
                        </Form.Group>
                        <Form.Group controlId="formFeedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control type="text" placeholder="Enter Feedback" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Leave Feedback!
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>  
        );
    }
}

export default ContactPage;
