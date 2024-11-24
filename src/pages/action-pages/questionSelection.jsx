// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useRef, memo, useContext} from "react";

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
import {sqHttpCommon} from "../../utils/auth/http-com"
import { SelectedQuestion } from "../../App";

import StepperComp from "../../component/stepper";
import BackendRequestProcess from "../../component/backendRequestProcess";

const QuestionSelection = () => {
    // ---------------------- hooks --------------------------------------------------
    const [currentStep, setCurrentStep] = useState(0);     // physical steps element
    const [showError, setShowError] = useState(false);
    const data = useRef({"interviewType": "Technical", "questionType": "Software", "cases": []});

    // optimization needed, child component rerender
    const [showRotating, setShowRotating] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const context = useContext(SelectedQuestion);

    // --------------------- Handle Function -----------------------------------------
    const handleStartInterview = () => {
        if (data.current.cases.length > 0) {
            setShowRotating(true);

            async function getQuestion() {
                try {
                    console.log(data.current);
                    const res = await sqHttpCommon.post('/get-question', JSON.stringify(data.current));
                    context.setQuestion(res.data);
                    console.log(res.data);
                    return res.status;
                } catch (e) {
                    return 500;
                }
            }

            getQuestion().then((status) => {
                setShowRotating(false);
                if (status === 200) {
                    setShowSuccess(true);
                } else {
                    setShowFailed(true);
                }
            });

        } else {
            setShowError(true);
        }
    }


    // --------------------- Other ---------------------------------------------------
    const option2Map = useRef({
        "Technical": ["Software", "Marketing", "Finance"],
        "Behaviour": ["Option1", "Option2", "Option3"]
    });

    const option3Map = useRef({
        "Technical": {
            "Software": ["Dynamic Programming", "Tree"],
            "Marketing": ["Social Media", "Sale"], "Finance": ["Option", "Stock"]
        },
        "Behaviour": {"Option1": ["case1", "case2"], "Option2": ["case1", "case2"], "Option3": ["case1", "case2"]}
    });
    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <BackendRequestProcess showRotating={showRotating}
                                   showFailed={showFailed} setShowFailed={setShowFailed} errorMsg="Server not connected"
                                   showSuccess={showSuccess} setShowSuccess={setShowSuccess}
                                   successLink={(data.current.questionType === "Software") ? "/coding-pg/" :
                                       "/question-pg/"}
                                   displayText="Interview Created"
            />
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
                                    &&
                                    <Button variant="outlined" color="tertiary" onClick={handleStartInterview}>Start My
                                        interview</Button>
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

