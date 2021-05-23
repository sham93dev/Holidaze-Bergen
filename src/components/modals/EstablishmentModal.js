import React from "react";
import { Modal, Button } from "react-bootstrap";

function EstablishmentModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-body">
        <h3 className="modal-heading-message">Your establishment has been added!</h3>
        <p className="modal-text-message">Thank you</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EstablishmentModal;
