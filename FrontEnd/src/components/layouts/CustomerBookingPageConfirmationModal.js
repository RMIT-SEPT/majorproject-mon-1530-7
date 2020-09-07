import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                <h4>Successful Booking</h4>
                <p>
                    Thank you for making a booking with us!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomerBookingPageConfirmationModal;
