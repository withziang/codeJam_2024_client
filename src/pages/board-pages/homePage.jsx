// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, memo} from 'react'
import {NavLink} from 'react-router-dom';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Button, Box} from '@mui/material';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const HomePage = () => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const S = Math.sin, C = Math.cos;
        let t = 0;

        canvas.width = 1920;
        canvas.height = 1920;

        const draw = () => {
            requestAnimationFrame(draw);
            const cx = 1000, cy = 900;

            // Set the background color
            ctx.fillStyle = '#1e1f22';
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with the background color

            // Set the ball color to white
            ctx.fillStyle = '#ffffff';

            for (let i = 99; i--; ) {
                const p = i + t;
                const q = i / 31;
                const Z = 3 + C(p) * S(q);
                const X = S(p) * S(q);
                const xPos = cx + (1 / Z) * X * cx;
                const yPos = cy + (C(q) / Z) * cx;
                const size = 90 / Z / Z;

                // Draw the ball as a filled white rectangle
                ctx.beginPath();
                ctx.arc(xPos, yPos, size / 2, 0, 2 * Math.PI); // Circle with radius size/2
                ctx.fill();
            }

            t += 0.01;
        };

        draw();
    }, []);
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="center_xy w100" style={{minHeight: '91vh'}}>
                <Stack direction="row" sx={{width: '80%'}} className="center_xy">
                    <Stack spacing={5} className="w-50 center_xy">
                        <p className="mainPageTitle">Your Customized <br/>
                            <span style={{fontSize: '4rem'}}>Interview Practice</span>
                        </p>
                        <Button variant="outlined" component={NavLink} to={`/questionSelection-pg`}>
                            Start a new interview</Button>
                    </Stack>
                    <Box className="w-50 center_xy">
                        <canvas id="canvas" style={{display: 'block', width: '100%'}}></canvas>
                    </Box>
                </Stack>
            </Box>

        </>
    );
};

export default memo(HomePage);