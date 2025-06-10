import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {

const { createUser,googleSignIn} = use(AuthContext)
const navigate = useNavigate()
const [error,setError]=useState('')


const handleGoogle = () =>{
  googleSignIn()
  .then(result =>{
  console.log(result)
   navigate("/");
})
.catch(error =>{
  console.log(error)
})
}

const handleRegister = (e) => {
  e.preventDefault();
  setError(""); 

  const name = e.target.name.value;
  const email = e.target.email.value;
  const photo = e.target.photo.value;
  const password = e.target.password.value;

  // Password 
  if (!/[A-Z]/.test(password)) {
    setError("Password must contain at least one uppercase letter.");
    return;
  }

  if (!/[a-z]/.test(password)) {
    setError("Password must contain at least one lowercase letter.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  const profile = { name, email, photo, password };
  console.log(profile);

  // Create user
  createUser(email, password)
.then((userCredential)=>{
  const user = userCredential.user;
console.log(user)
})

    .then((result) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You Have Successfully Registered",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      });
      console.log(result);
    })
    .catch((error) => {
       Swal.fire("please try again !");
      console.log(error);
    });
};






    return (
         <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Please Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Link to your photo"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Password"
            />
          </div>

{
  error && (<p className='text-red-500 text-sm mt-1'> {error}</p>)
}

  <button  
  className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >     Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered?
          <Link to="/login" className="text-blue-600 hover:underline">
            Please login
          </Link>
        </p>
        <div>
  <p className='text-gray-600 text-xs text-center' >Or</p>
         <button onClick={handleGoogle} className="btn bg-white text-black text-center mt-1 w-[100%] mx-auto  border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>
      </div>
      
    </div>




        </>
    );
};

export default Register;