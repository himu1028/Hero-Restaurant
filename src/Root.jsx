import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Root = () => {
    return (
        <>
<Navbar></Navbar>
<Outlet></Outlet>


        </>
    );
};

export default Root;