// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Backdrop, Stack} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------


const BackendRequestProcess = ({
                                   showRotating,
                                   showFailed, setShowFailed, errorMsg,
                                   showSuccess, setShowSuccess, successLink, displayText
                               }) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Backdrop open={showRotating} sx={{color: '#ffffff', zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <CircularProgress color="tertiary"/>
            </Backdrop>
            <Backdrop open={showFailed} onClick={() => setShowFailed(false)}
                      sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Stack className="center_xy" sx={{
                    width: '400px',
                    height: '300px',
                    backgroundColor: 'rgb(255,255,255)',
                    borderRadius: '1rem'
                }}>
                    <CancelIcon color="error" fontSize="large"/>
                    {errorMsg}
                </Stack>
            </Backdrop>
            <Backdrop open={showSuccess} onClick={() => {
                setShowSuccess(false);
                window.location.href = successLink;
            }} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Stack className="center_xy" sx={{
                    width: '400px',
                    height: '300px',
                    backgroundColor: 'rgb(255,255,255)',
                    borderRadius: '1rem'
                }}>
                    <CheckCircleIcon color="success" fontSize="large"/>
                    {displayText}
                </Stack>
            </Backdrop>
        </>
    );
};

export default memo(BackendRequestProcess);