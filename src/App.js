import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes/routeList';

//---------------------------- General     CSS ----------------------------------------------------------------------
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createTheme, ThemeProvider} from '@mui/material/styles';
//---------------------------- main   --------------------------------------------------------------------------------
const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#bfbcbc',
            },
            secondary: {
                main: '#3f4953',
            },
            tertiary: {
                main: '#b0b7c1',
            },
            error: {
                main: '#e92828',
            },
            warning: {
                main: '#f25e30',
            },
            info: {
                main: '#2b8fb3'
            },
            success: {
                main: '#21d312'
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>  {/*color theme for materialUI*/}
                <BrowserRouter>
                    <RouteList/>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
