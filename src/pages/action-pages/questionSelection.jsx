// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useRef, memo} from "react";

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Carousel from 'react-bootstrap/Carousel';
// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Typography, Box, Button} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import FirstLevelOption from "./questionSelection-component/firstLevelOption";
import SecondLevelOption from "./questionSelection-component/secondLevelOption";
import ThirdLevelOption from "./questionSelection-component/thirdLevelOption";
import StepperComp from "../../component/stepper";

const QuestionSelection = () => {
    // ---------------------- hooks --------------------------------------------------
    const [currentStep, setCurrentStep] = useState(0);     // physical steps element
    const [showError, setShowError] = useState(false);
    const data = useRef({"interviewType":"Technical", "questionType":"Software", "cases":[]});
    // --------------------- Handle Function -----------------------------------------
    const handleStartInterview = () => {
        if (data.current.cases.length > 0) {
            window.location.href = (data.current.questionType === "Software") ? "/coding-pg" : "/question-pg";
        }else{
            setShowError(true);
        }
    }


    // --------------------- Other ---------------------------------------------------
    const option2Map = useRef({"Technical":["Software", "Marketing", "Finance"],
        "Behaviour":["Option1", "Option2", "Option3"]});

    const option3Map = useRef({"Technical":{"Software":["Dynamic Programming", "Tree"],
            "Marketing":["Social Media","Sale"], "Finance":["Option", "Stock"]},
        "Behaviour":{"Option1":["case1","case2"], "Option2":["case1","case2"], "Option3":["case1","case2"]}});
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
                                <FirstLevelOption data={data} setCurrentStep={setCurrentStep}/>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '65vh', minHeight: '30rem'}}>
                                <Stack direction="row" spacing={3} className="d-flex align-items-center">
                                    <Typography variant="h5" color="primary">
                                        {data.current["interviewType"]}
                                    </Typography>
                                    <ArrowForwardIosIcon color="primary"/>
                                    <Typography variant="h5" color='#2b8fb3'>
                                        Choose a Question Type
                                    </Typography>
                                </Stack>
                                <SecondLevelOption optionList={
                                    option2Map.current[data.current["interviewType"]]} setCurrentStep={setCurrentStep}
                                                    data={data}/>
                            </Carousel.Item>
                            <Carousel.Item style={{height: '65vh', minHeight: '30rem'}}>
                                <Stack direction="row" spacing={3} className="d-flex align-items-center">
                                    <Typography variant="h5" color="primary">
                                        {data.current["interviewType"]}
                                    </Typography>
                                    <ArrowForwardIosIcon color="primary"/>
                                    <Typography variant="h5" color='primary'>
                                        {data.current["questionType"]}
                                    </Typography>
                                    <ArrowForwardIosIcon color="primary"/>
                                    <Typography variant="h5" color='#2b8fb3'>
                                        Choose some Cases
                                    </Typography>
                                </Stack>
                                <ThirdLevelOption optionList={
                                    option3Map.current[data.current["interviewType"]][data.current["questionType"]]}
                                data={data} currentStep={currentStep}/>

                            </Carousel.Item>
                        </Carousel>

                        <Box className="d-flex justify-content-end">
                            <Stack direction="row" spacing={1}>
                                {
                                    (showError) &&
                                    <Typography variant="h6" color="error">
                                        You must choose one
                                    </Typography>
                                }
                                {
                                    (currentStep !== 0)
                                    && <Button variant="outlined" color="tertiary" onClick=
                                        {() => {
                                            setCurrentStep((prev) => (prev - 1));
                                            data.current['cases'] = [];
                                            setShowError(false);
                                        }}>Previous</Button>
                                }
                                {
                                    (currentStep === 2)
                                    && <Button variant="outlined" color="tertiary" onClick={handleStartInterview}>Start My interview</Button>
                                }
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default memo(QuestionSelection);

