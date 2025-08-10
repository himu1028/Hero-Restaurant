import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    const [theme, setTheme] = useState('light');


  // Load theme 
 useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);


   // Update theme 
 useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

    return (
        <>
         {/* <div className=' w-0.5 mx-auto'>
          <button onClick={toggleTheme} className="btn btn-secondary w-8 h-8">
           <input type="checkbox" defaultChecked className="toggle toggle-success w-5 h-5" /> 
        </button>
        </div> */}


        {/* Content */}
<div className='bg-gray-300 ' > 
    <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</div>


        </>
    );
};

export default Root;