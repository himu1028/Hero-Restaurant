import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/");
      Swal.fire("Successfully Logout !");
    });
  };

  return (
    <div className="w-full sticky text-gray-800 top-0 z-50 bg-gray-300 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3 relative">
        
        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-1 text-2xl font-bold text-sky-500">
          <i>Hero</i> <span className="text-gray-800">Restaurant</span>
        </Link>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links - Center on Tablet/Desktop */}
        <div
          className={`
            hidden md:flex md:flex-row md:items-center md:gap-6
            md:absolute md:left-1/2 md:-translate-x-1/2
          `}
        >
          <NavLink to="/" className="p-2 font-semibold hover:bg-gray-400 rounded-md">Home</NavLink>
          <NavLink to="/allfood" className="p-2 font-semibold hover:bg-gray-400 rounded-md">All Foods</NavLink>
          <NavLink to="/gallery" className="p-2 font-semibold hover:bg-gray-400 rounded-md">Gallery</NavLink>
        </div>

        {/* Right Side - Auth Buttons / Avatar */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user.photoURL || "https://i.ibb.co/YTjW3vF/default-avatar.png"}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                <NavLink className="text-xl" to="/addfood">Add Food</NavLink>
                <NavLink className="text-xl" to="/myfood">My Food</NavLink>
                <NavLink className="text-xl" to="/myorder">My Orders</NavLink>
                <li>
                  <a onClick={handleSignOut} className="text-xl cursor-pointer">Log Out</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/register">
                <button className="btn btn-outline text-sky-400">Registration</button>
              </NavLink>
              <NavLink to="/login">
                <button className="btn btn-outline text-sky-400">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-gray-300 flex flex-col p-4 border-t gap-4">
          
          {/* Routes Section */}
          <div className="flex flex-col gap-2">
            <NavLink to="/" className="p-2 font-semibold hover:bg-gray-400 rounded-md">Home</NavLink>
            <NavLink to="/allfood" className="p-2 font-semibold hover:bg-gray-400 rounded-md">All Foods</NavLink>
            <NavLink to="/gallery" className="p-2 font-semibold hover:bg-gray-400 rounded-md">Gallery</NavLink>
          </div>

          <hr className="border-gray-400" />

          {/* Auth Section */}
          <div className="flex flex-col gap-2">
            {user ? (
              <>
                <NavLink to="/addfood" className="p-2 hover:bg-gray-400 rounded-md">Add Food</NavLink>
                <NavLink to="/myfood" className="p-2 hover:bg-gray-400 rounded-md">My Food</NavLink>
                <NavLink to="/myorder" className="p-2 hover:bg-gray-400 rounded-md">My Orders</NavLink>
                <button onClick={handleSignOut} className="btn btn-outline text-red-500">Log Out</button>
              </>
            ) : (
              <>
                <NavLink to="/register">
                  <button className="btn btn-outline text-sky-400 w-full">Registration</button>
                </NavLink>
                <NavLink to="/login">
                  <button className="btn btn-outline text-sky-400 w-full">Login</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
