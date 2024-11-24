// ---------------------------      React Lib       ----------------------------------------------------------------

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalIncompleteForm = ({show, handleClose, text, title='Incomplete form'}) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:'red'}}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text.map((string, index) => (
                        <h6 key={index}>- {string}</h6>
                    ))}
                </Modal.Body>
                <Modal.Body className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalIncompleteForm;