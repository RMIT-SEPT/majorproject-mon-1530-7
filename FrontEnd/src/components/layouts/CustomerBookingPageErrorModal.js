import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

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
            <Alert variant="danger">
                <h4>There was a problem with your booking</h4>
                <p>
                        {props.message}
                </p>
            </Alert>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerBookingPageErrorModal;
