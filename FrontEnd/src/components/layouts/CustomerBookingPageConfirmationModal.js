import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function CustomerBookingPageConfirmationModal(props) {
    return (

        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Success!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Alert variant="success">
                <h4>Successful Booking</h4>
                <p>
                    Thank you for making a booking with us!
                </p>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomerBookingPageConfirmationModal;
