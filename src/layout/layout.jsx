import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarTab from "../component/navbar";




function Layout(props) {
    return (
        <div className="bs-form-customs-mainBackground">
            <NavbarTab/>
            <Outlet/>
        </div>
    );
}

export default Layout;

