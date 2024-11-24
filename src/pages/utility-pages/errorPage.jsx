import React from 'react';

const ErrorPage = () => {
    return (
        <div className="d-flexw-100 justify-content-center align-items-center">
            <div className="flex-column text-center">
                <div className="bg_img w-50" style={{height:'10vh'}}></div>
                <div>
                    <p className="display-4">Looks Like You're Lost</p>
                    <p>The page you are looking for is not available...</p>
                    <a href="/" className="text-white text-decoration-none px-4 py-3 bg-success d-inline-block mt-2 rounded">
                        Go to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
