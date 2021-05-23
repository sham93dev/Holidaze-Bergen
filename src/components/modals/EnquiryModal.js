import React from "react";
import { Modal, Button } from "react-bootstrap";

function EnquiryModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-body">
        <h3 className="modal-heading-message">Your order has been registered!</h3>
        <p className="modal-text-message">You will soon receive your receipt by email</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnquiryModal;
