import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100 p-4 w-11/12 mx-auto">
      <div className="text-center">

        <img className='w-100 h-100' src="https://i.ibb.co/qKQ0P62/errrrror.jpg" alt="" />
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন তা খুঁজে পাওয়া যায়নি।
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
        </>
    );
};

export default Error;