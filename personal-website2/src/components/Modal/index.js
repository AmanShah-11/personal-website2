import { Button, Modal, ModalBody } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";
import { CustomModalBody } from "./ModalElements";

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
        <CustomModalBody bsPrefix="modal-title" dialogClassName="modalbody">
          {description}
        </CustomModalBody>
        <Modal.Footer>
          <FaGithub />
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
