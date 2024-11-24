// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useEffect, memo, useRef, useContext} from 'react';

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import {Stack,Divider, Box, Button} from '@mui/material';
// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {SelectedQuestion} from "../../App";

// ---------------------------      Local Comp      ----------------------------------------------------------------


const CodingPage = () => {
    // ---------------------- hooks --------------------------------------------------

    const [timeLeft, setTimeLeft] = useState(3000);

    const { question } = useContext(SelectedQuestion);

    const editor = useRef(null);
    const { setContainer } = useCodeMirror({
        container: editor.current,
        value: "",
        extensions: [javascript({ jsx: true })],
        width: "40vw",
        height: "70vh",
        minHeight: "70vh",
        maxHeight: "80vh",
        minWidth: "40vw",
        maxWidth: "50vw",
        autoFocus: false,
        placeholder: "Enter script here",
        editable: true,
        readOnly: false
    });
    useEffect(() => {
        if (editor.current) {
            setContainer(editor.current);
        }
    });
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------
    const submitCode = () => {
        window.location.href = '/result-pg';
    }
    // --------------------- Function ------------------------------------------------
    useEffect(() => {
        if (timeLeft <= 0) submitCode(); // Stop when the timer reaches 0

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Decrease the time every second

        return () => clearInterval(timer); // Cleanup on component unmount or timer reset
    }, [timeLeft]);


    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stack className="center_xy w100">
                <div style={{textAlign: 'center', fontSize: '24px', color: '#bfbcbc'}}>
                    <p>Time Left: {timeLeft} seconds</p>
                </div>
                <Divider variant='middle' color="#ffffff" sx={{width: '80%'}}/>
                <Stack direction="row" sx={{width: '80%', marginTop: '2rem'}}>
                    <Box sx={{width: '50%', overFlowY:'auto'}}>
                        <div style={{textAlign: 'left', fontSize: '24px', color: '#bfbcbc'}}>
                            <p>Question:</p>
                        </div>
                        <div style={{textAlign: 'left', fontSize: '15px', color: '#bfbcbc', width: '60%'}}>
                            {question}
                        </div>
                    </Box>
                    <Box sx={{width: '50%'}}>
                        <div style={{margin: "1%"}}>
                            <div style={{width: "40vw", border: "1px solid #ccc"}} ref={editor}/>
                        </div>
                    </Box>
                </Stack>


                <br/>
                <Stack direction="row" spacing={2}>
                    <Button color="primary" onClick={()=>{window.location.href = '/';}} variant="outlined">exit</Button>
                    <Button color="primary" onClick={submitCode} variant="outlined">Submit your code</Button>
                </Stack>
            </Stack>
        </>
    );
};

export default memo(CodingPage);