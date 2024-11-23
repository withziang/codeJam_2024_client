// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useRef} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Carousel from 'react-bootstrap/Carousel';
// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Typography, Box, Button, Divider} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import FirstLevelOption from "./questionSelection-component/firstLevelOption";
import StepperComp from "../../component/stepper";

const QuestionSelection = () => {
    // ---------------------- hooks --------------------------------------------------
    const [currentStep, setCurrentStep] = useState(0);     // physical steps element
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="w100" style={{minHeight: '91vh'}}>
                <Box>
                    <StepperComp currentStep={currentStep} listName={["", "", ""]}/>
                </Box>
                <Box className="d-flex justify-content-center" sx={{height: '80%', marginTop: '2rem'}}>
                    <Box sx={{width: '80%', height: '100%'}}>
                        <Carousel activeIndex={currentStep} interval={null} className='w100 centerXY'
                                  controls={false} indicators={false} style={{minHeight: '65vh'}}>
                            <Carousel.Item style={{height: '65vh', minHeight: '30rem'}}>
                                <Typography variant="h5" color="primary">
                                    Choose an Interview Type
                                </Typography>
                                <FirstLevelOption/>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '70%'}}>
                                <Typography variant="h5" color="primary">
                                    Choose a Question Type
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '70%'}}>
                                <Typography variant="h5" color="primary">
                                    Choose Cases
                                </Typography>
                            </Carousel.Item>
                        </Carousel>

                        <Box className="d-flex justify-content-end">
                            <Stack direction="row" spacing={1}>
                                {
                                    (currentStep !== 0)
                                    && <Button variant="outlined" color="tertiary" onClick=
                                        {() => setCurrentStep((prev) => (prev - 1))}>Previous</Button>
                                }
                                {
                                    (currentStep !== 2)
                                    && <Button variant="outlined" color="tertiary" onClick=
                                        {() => setCurrentStep((prev) => (prev + 1))}>Next</Button>
                                }
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default QuestionSelection;

