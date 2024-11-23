// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, memo} from 'react'
import {NavLink} from 'react-router-dom';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Button} from '@mui/material';
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
            <div className="bs-form-customs-mainBackground w100 center_xy">

                <Stack direction="row" sx={{width:'80%', height:'92%'}}>
                    <Stack className="w-50 d-flex justify-content-around" style={{height:'90%'}} spacing={2}>
                        <p className="mainPageTitle" style={{paddingTop:'10%'}}>Your Customized <br/>
                            <span style={{fontSize:'65px'}}>Interview Practice</span>
                        </p>
                        <div className="center_xy">
                            <Button variant="outlined" component={NavLink} to={`/questionSelection-pg`}>Start a new interview</Button>
                        </div>
                    </Stack>
                    <div className="w-50">
                        <canvas id="canvas" style={{display: 'block', width: '100%'}}></canvas>
                    </div>
                </Stack>

            </div>
        </>
    );
};

export default memo(HomePage);