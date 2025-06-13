import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate()
      const {user,signOutUser} = use(AuthContext)

      const handleSignOut = ()=>{
  signOutUser()
  .then(()=>{
    navigate("/");
      Swal.fire("please try again !");
  })
}

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
                  
                       {
    user ? <>
    
      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL || "https://i.ibb.co/YTjW3vF/default-avatar.png"}/>
                            </div>
                       
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                         <NavLink className='text-xl' to={'/addfood'}>Add Food</NavLink>
                            {/* <li><a className='text-xl'>Add Food</a></li> */}
                            <li><a className='text-xl'>My Food</a></li>
                            <li><a className='text-xl'>My Orders</a></li>
                            <li><a onClick={handleSignOut } className='text-xl'>Log Out</a></li>
                        </ul>
                    </div>
    </> : 
    <>
    <div className="navbar-end gap-2">
   <NavLink to={"/register"}>
     <button className="btn btn-success">Registration</button>
   </NavLink>
    <NavLink to={"/login"}>
      <button className="btn btn-accent">Login</button>
    </NavLink>
  </div>
    </>
  }
    
                </div>
            
            </div>
              
        </div>
    );
};

export default Navbar;