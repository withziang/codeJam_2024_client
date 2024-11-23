// ---------------------------      React Lib       ----------------------------------------------------------------
import { useState, useEffect, memo} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import {Stack, Button, Box, Typography, IconButton} from '@mui/material';
// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const VideoRecordingProcess = () => {
    // ---------------------- hooks --------------------------------------------------
    const [timeLeft, setTimeLeft] = useState(30);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------
    useEffect(() => {
        if (timeLeft <= 0) return; // Stop when the timer reaches 0

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

            </Stack>
        </>
    );
};

export default memo(VideoRecordingProcess);