import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CustomerBookingPageErrorModal(props) {
    return (
        
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Invalid Booking</h4>
                <p>
                    Please select one service, one employee, and an available date and time,
                    then click "Make Booking"
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerBookingPageErrorModal;
