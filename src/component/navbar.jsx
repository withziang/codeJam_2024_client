// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo} from 'react'
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Typography} from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const Navbar = () => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <div className="w100 d-flex align-items-center" style={{minHeight: '9vh', backgroundColor: ' var(--bs-form-customs-bg-main)'}}>
                <Stack direction="row" spacing={2} style={{marginLeft:'6vw'}}>
                    <CameraIcon fontSize="large" color="secondary"/>
                    <Typography variant="h5" color="secondary" sx={{fontWeight: 'bold', paddingTop:'2px'}}>
                        Mock Interview
                    </Typography>
                </Stack>
            </div>
        </>
    );
};

export default memo(Navbar);