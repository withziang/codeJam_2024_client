// ---------------------------      React Lib       ----------------------------------------------------------------

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Modal from 'react-bootstrap/Modal';
import {Button, Stack} from "@mui/material";
// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const ModalConfirm = ({show, handleClose, handleContinue}) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Load data?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    All your changes will not be saved.
                </Modal.Body>
                <Modal.Body className="d-flex justify-content-end">
                    <Stack direction="row" spacing={1}>
                        <Button color="primary" onClick={handleClose}>Cancel</Button>
                        <Button color="info" onClick={handleContinue}>Submit</Button>
                    </Stack>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalConfirm;