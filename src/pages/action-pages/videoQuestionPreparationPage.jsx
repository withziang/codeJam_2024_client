// ---------------------------      React Lib       ----------------------------------------------------------------
import { useState, useEffect, memo} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import {Stack,Divider, Box, Button} from '@mui/material';
// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const VideoQuestionPreparationPage = () => {
    // ---------------------- hooks --------------------------------------------------
    const [timeLeft, setTimeLeft] = useState(3000);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------
    const goToRecording = () => {
        window.location.href = 'recording-pg';
    }


    useEffect(() => {
        if (timeLeft <= 0) goToRecording(); // Stop when the timer reaches 0

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Decrease the time every second

        return () => clearInterval(timer); // Cleanup on component unmount or timer reset
    }, [timeLeft]);

    const question = "Here’s a concise 100-word mock interview response for a typical behavioral question:\n" +
        "\n" +
        "Question: \"Can you tell me about a time you solved a challenging problem?\"\n" +
        "\n" +
        "Response:\n" +
        "During my internship, " +
        "I worked on a project to improve data processing efficiency. " +
        "We faced frequent crashes due to memory limitations. " +
        "After analyzing logs, I identified inefficient loops as the issue. " +
        "I proposed using batching to reduce memory usage, tested it, and saw a 40% performance improvement. " +
        "The process required debugging under tight deadlines, " +
        "but I collaborated with teammates for optimization ideas. This taught me to approach problems systematically, communicate effectively, and document solutions for future use. The success was rewarding, and the code was later implemented in production, benefiting the team long-term."
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
                    <p>{question}</p>
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