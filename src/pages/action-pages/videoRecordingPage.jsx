// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, memo, useRef, useState} from 'react'
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Button, Box, IconButton} from '@mui/material';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import BackendRequestProcess from "../../component/backendRequestProcess";
import {sqHttpCommon} from "../../utils/auth/http-com";


const VideoRecordingPage = ({selectedQuestion}) => {
    // ---------------------- hooks --------------------------------------------------
    // optimization needed, child component rerender
    const [showRotating, setShowRotating] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    // audio + video variable
    const videoRef = useRef(null); // Reference to the video element
    const videoStreamRef = useRef(null); // To store the video stream
    const videoRecorderRef = useRef(null); // To store the MediaRecorder for video
    const videoChunksRef = useRef([]); // To store video data chunks


    const [timeLeft, setTimeLeft] = useState(3000);
    // --------------------- Handle Function -----------------------------------------

    // Start video streaming
    const startVideoStreaming = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoStreamRef.current = stream;

            // Attach the video stream to the <video> element
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
        }
    };

    // Start video recording
    const startVideoRecording = () => {
        if (videoStreamRef.current) {
            videoChunksRef.current = [];
            const recorder = new MediaRecorder(videoStreamRef.current);
            videoRecorderRef.current = recorder;

            recorder.ondataavailable = (event) => {
                videoChunksRef.current.push(event.data);
            };

            recorder.onstop = () => {
                const videoBlob = new Blob(videoChunksRef.current, { type: "video/webm" });
                uploadToBackend(videoBlob, "video").then((status) => {
                    setShowRotating(false);
                    if (status === 200) {
                        setShowSuccess(true);
                    } else {
                        setShowFailed(true);
                    }
                });
            };

            recorder.start();
        }
    };

    // Stop video recording
    const stopVideoRecording = () => {
        if (videoRecorderRef.current) {
            setShowRotating(true);
            videoRecorderRef.current.stop();
            videoStreamRef.current.getTracks().forEach((track) => track.stop());
        }
    };

    // Upload the video blob to the backend
    const uploadToBackend = async (blob, type) => {
        const formData = new FormData();
        formData.append(type, blob, `${type}-${Date.now()}.webm`);

        try {
            const res = await sqHttpCommon.post('/get-feedback', formData);
            console.log(res.data);
            return res.status;
        } catch (err) {
            return 500;
        }
    };





    useEffect(() => {
        if (timeLeft <= 0) endRecording(); // Stop when the timer reaches 0

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Decrease the time every second

        return () => clearInterval(timer); // Cleanup on component unmount or timer reset
    }, [timeLeft]);
    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    const startRecording = () => {
        startVideoStreaming().then(() => startVideoRecording());
    }

    const endRecording = () => {
        stopVideoRecording();
    }
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <BackendRequestProcess showRotating={showRotating}
                                   showFailed={showFailed} setShowFailed={setShowFailed}
                                   errorMsg="Interview Failed to Upload"
                                   showSuccess={showSuccess} setShowSuccess={setShowSuccess}
                                   successLink="/result-pg"
                                   displayText="Interview Successfully Uploaded"
            />
            <Stack className="center_xy w100">
                <Box className="w100 center_xy" sx={{minWidth:'10rem'}}>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        style={{width: 'auto', height: '80%', border: '1px solid black'}}
                    />
                </Box>
                <Stack direction="row">
                    <IconButton color="primary" onClick={startRecording}>
                        <PlayCircleOutlineIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="primary" onClick={endRecording}>
                        <StopCircleIcon fontSize="large"/>
                    </IconButton>
                </Stack>
                <Box className="d-flex justify-content-end" sx={{width:'80%'}}>
                    <Button color="primary" onClick={()=>{window.location.href = '/';}} variant="outlined">exit</Button>
                </Box>
            </Stack>
        </>
    );
};

export default memo(VideoRecordingPage);