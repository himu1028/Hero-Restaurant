import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto py-5 rounded-2xl'>

            <div className="navbar justify-between  bg-gray-300 shadow-xl p-5">

                <div >

                    <a className="btn hover:bg-amber-200 text-xl"><span className='text-2xl font-bold text-sky-400'><i>Hero</i></span>Restaurant</a>
                </div>

<div >
    
<NavLink className='text-lg p-2 bg-gray-100 hover:bg-amber-200'>Home</NavLink>
<NavLink className='text-lg mx-2 p-2 bg-gray-100 hover:bg-amber-200'>All Foods</NavLink>
<NavLink className='text-lg p-2 bg-gray-100 hover:bg-amber-200'>Gallery</NavLink>



</div>

                <div >
                    {/* IMAGE */}
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                       
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                            <li><a className='text-xl'>Add Food</a></li>
                            <li><a className='text-xl'>My Food</a></li>
                            <li><a className='text-xl'>My Orders</a></li>
                            <li><a className='text-xl'>Log Out</a></li>
                        </ul>
                    </div> */}
                    <NavLink to={'/login'} className='ml-2 btn btn-success btn-outline'>Login</NavLink>
                    <NavLink className='ml-2 btn btn-success btn-outline' to={'/register'}>Register</NavLink>
                </div>
              
            </div>
              
        </div>
    );
};

export default Navbar;