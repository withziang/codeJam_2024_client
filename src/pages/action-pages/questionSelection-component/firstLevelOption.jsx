// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo} from 'react'
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box, Button, Divider, Stack} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import PsychologyIcon from "@mui/icons-material/Psychology";
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------



const FirstLevelOption = ({data, setCurrentStep}) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="center_xy h100">
                <Box component="section"
                     sx={{
                         borderRadius: '1rem',
                         width: '30rem',
                         height: '9rem',
                         backgroundColor: 'var(--root-custom-color-card-bg-secondary)',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',

                     }}>
                    <Stack direction="row" sx={{width: '100%', height: '90%'}}>
                        <Box component="section" sx={{width: '50%', height: '100%'}}>
                            <Button className="w100 h100" onClick={()=>{
                                data.current["interviewType"] = "Technical";
                                setCurrentStep(1);
                            }}>
                                <Stack spacing={3} className="center_xy h100">
                                    <TerminalIcon sx={{fontSize: '3rem'}}/>
                                    <h6>Technical</h6>
                                </Stack>
                            </Button>
                        </Box>
                        {/*--------------------------------------------------------------------------------*/}
                        <Divider variant='middle' orientation="vertical" color="#ffffff"
                                 sx={{height: '90%'}}/>
                        {/*--------------------------------------------------------------------------------*/}
                        <Box component="section" sx={{width: '50%', height: '100%'}}>
                            <Button className="w100 h100" onClick={()=>{
                                data.current["interviewType"] = "Behaviour";
                                setCurrentStep(1);
                            }}>
                                <Stack spacing={3} className="center_xy h100">
                                    <PsychologyIcon sx={{fontSize: '3rem'}}/>
                                    <h6>Behaviour</h6>
                                </Stack>
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default memo(FirstLevelOption);