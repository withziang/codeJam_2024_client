// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useRef} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Carousel from 'react-bootstrap/Carousel';
// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Typography, Box, Button} from '@mui/material';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
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
            <div className="bs-form-customs-mainBackground w100">
                <Box>
                    <StepperComp currentStep={currentStep} listName={["", "", ""]}/>
                </Box>
                <Box className="d-flex justify-content-center" sx={{height: '80%'}}>
                    <Box sx={{width: '80%', height: '70%'}}>
                        <Carousel activeIndex={currentStep} interval={null} className='h100 w100 centerXY'
                                  controls={false} indicators={false} style={{height: '70%'}}>
                            <Carousel.Item style={{height: '70%'}}>
                                <Typography variant="h5" color="primary">
                                    Choose the Interview Type
                                </Typography>
                                <Box>
                                    
                                </Box>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '70%'}}>
                                <Typography variant="h5" color="primary">
                                    Choose the Question Type
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '70%'}}>
                                <Typography variant="h5" color="primary">
                                    Choose the Case
                                </Typography>
                            </Carousel.Item>
                        </Carousel>

                        <Box className="d-flex justify-content-end">
                            <Stack direction="row" spacing={1}>
                                {
                                    (currentStep !==0)
                                    && <Button variant="outlined" color="tertiary" onClick=
                                        {() => setCurrentStep((prev)=>(prev-1))}>Previous</Button>
                                }
                                {
                                    (currentStep !==2)
                                    && <Button variant="outlined" color="tertiary" onClick=
                                        {() => setCurrentStep((prev)=>(prev+1))}>Next</Button>
                                }
                            </Stack>
                        </Box>

                    </Box>
                </Box>

            </div>
        </>
    );
};

export default QuestionSelection;

