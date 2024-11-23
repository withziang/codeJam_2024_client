// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, memo, useRef, useState} from 'react'
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Button, Box, Typography, IconButton} from '@mui/material';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const VideoRecordingPage = () => {
    // ---------------------- hooks --------------------------------------------------
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    // --------------------- Handle Function -----------------------------------------
    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            setStream(mediaStream); // Store the stream in state
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (err) {
            console.error('Error accessing camera:', err);
        }
    };
    const stopCamera = () => {
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop()); // Stop all media tracks
            setStream(null); // Clear the stream from the state
        }
    };

    useEffect(() => {

        startCamera().then();

        return () => {
            stopCamera();
        };
    }, []);
    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
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
                    <IconButton color="primary" onClick={stopCamera}>
                        <StopCircleIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="primary" onClick={()=> startCamera().then()}>
                        <PlayCircleOutlineIcon fontSize="large"/>
                    </IconButton>
                </Stack>
            </Stack>
        </>
    );
};

export default memo(VideoRecordingPage);