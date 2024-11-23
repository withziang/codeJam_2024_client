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
            <div className="bs-form-customs-mainBackground w100 d-flex align-items-center" style={{height: '9vh'}}>
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