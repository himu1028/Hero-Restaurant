import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <>
<div className='bg-gray-300'> 
    <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</div>


        </>
    );
};

export default Root;