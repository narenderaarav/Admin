import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "./Content.css";

function PopModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="danger" onClick={handleShow}>
      <FontAwesomeIcon icon={faTrash} />
      </Button>
      
      <Modal size="sm" show={show} onHide={handleClose}>
        <div className="popUp">
          <p>Do you want to Delete</p>
        
        <div className="buttonArea">

        <Button variant="danger" onClick={handleClose}>
            Yes
          </Button> 
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </div>
          
          </div>
      </Modal>
    </>
    
  );
}


export default PopModal;