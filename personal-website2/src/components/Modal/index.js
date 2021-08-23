import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";

const ProjectModal = ({ showModal, handleClose, data }) => {
  const { title, description, github } = data;
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <a href={github}>Link to github</a>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectModal;
