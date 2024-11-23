import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


function LoadingPage(props) {
    return (
        <div>
            <div className="d-flexw-100 justify-content-center align-items-center">
                <div className="flex-column text-center">
                    <div className="bg_img w-50" style={{height: '10vh'}}></div>
                    <div>
                        <p className="display-4">Loading ... </p>
                        <CircularProgress color="secondary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;