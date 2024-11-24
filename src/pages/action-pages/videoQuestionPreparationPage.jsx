// ---------------------------      React Lib       ----------------------------------------------------------------
import { useState, useEffect, memo, useContext} from 'react';

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import {Stack,Divider, Box, Button} from '@mui/material';
// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import {SelectedQuestion} from "../../App";

const VideoQuestionPreparationPage = () => {
    // ---------------------- hooks --------------------------------------------------
    const [timeLeft, setTimeLeft] = useState(3000);
    const context = useContext(SelectedQuestion);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------
    const goToRecording = () => {
        window.location.href = '/recording-pg';
    }

    useEffect(() => {
        if (timeLeft <= 0) goToRecording(); // Stop when the timer reaches 0

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Decrease the time every second

        return () => clearInterval(timer); // Cleanup on component unmount or timer reset
    }, [timeLeft]);

    useEffect(() => {
        console.log(context.question);
    }, [context.question])
    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stack className="center_xy w100">
                <div style={{textAlign: 'center', fontSize: '24px', color: '#bfbcbc'}}>
                    <p>Time Left: {timeLeft} seconds</p>
                </div>
                <Divider variant='middle' color="#ffffff" sx={{width: '80%'}}/>
                <Box className="d-flex justify-content-begin" sx={{width: '80%', marginTop: '2rem'}}>
                    <div style={{textAlign: 'center', fontSize: '24px', color: '#bfbcbc'}}>
                        <p>Question:</p>
                    </div>
                </Box>
                <div style={{textAlign: 'left', fontSize: '15px', color: '#bfbcbc', width: '60%'}}>
                    <p>{context.question}</p>
                </div>
                <br/>
                <Stack direction="row" spacing={2}>
                    <Button color="primary" onClick={()=>{window.location.href = '/';}} variant="outlined">exit</Button>
                    <Button color="primary" onClick={goToRecording} variant="outlined">Skip the preparation</Button>
                </Stack>

            </Stack>
        </>
    );
};

export default memo(VideoQuestionPreparationPage);