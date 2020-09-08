import React, { Component } from 'react'
import Body from '../Body';
import Main from '../Main';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Main>
                    Contact Us.
                </Main>    
                <Body>
                    We look forward to hearing what our cutz-omers have to say about our services, 
                    so please contact us and let us know how your experience with Fresh-Cutz was.
                
                    Phone Number : 1300-CUTZ
                    Email : FreshCutz@gmail.com

                    OR Leave Feedback in this form below!
                </Body>

                <div>
                    <div className="feedbackContainer">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
