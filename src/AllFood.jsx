import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { AiFillLike } from 'react-icons/ai';

const AllFood = () => {
  const [search, setSearch] = useState('');
  const [all, setAll] = useState([]);

  const imageUrl = 'https://i.ibb.co/7xBX8FtS/bgggg.jpg';

  useEffect(() => {
    fetch(`https://restaurant-hero-eta.vercel.app/allfoods?searchParams=${search}`)
      .then(res => res.json())
      .then(data => {
        setAll(data);
      });
  }, [search]);

  return (
    <>
    <div    >
      {/* <div 
       
      className="w-11/12 mx-auto mt-6 flex justify-center"

      >
        <label className="input w-full max-w-md flex items-center gap-2 bg-white shadow px-4 py-2 rounded-md">
          <svg
            className="h-5 w-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search Food"
            className="w-full outline-none"
          />
        </label>
      </div> */}

      <div 
         style={{ backgroundImage: `url(${imageUrl})`}}
      className=" w-11/12 mx-auto mt-6 rounded-lg">
        <div className="text-3xl md:text-5xl pt-10 my-4 text-center text-purple-700 font-bold">
          <Typewriter
            words={['All Food', 'Welcome to All Food!', 'All Food']}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
         <div 
       
      className="w-11/12 mx-auto mt-6 flex justify-center"

      >
        <label className="input w-full max-w-md flex items-center gap-2 bg-white shadow px-4 py-2 rounded-md">
          <svg
            className="h-5 w-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search Food"
            className="w-full outline-none"
          />
        </label>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-5">
          {all.map((topCard) => (
            <div
              key={topCard._id}
              className="card bg-base-100 w-full h-full shadow-sm"
            >
              <figure>
                <img
                  className="w-full h-48 object-cover"
                  src={topCard.image}
                  alt="Recipe"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-900 text-2xl font-bold">
                  {topCard.name}
                  <div className="badge badge-secondary">Delicious</div>
                </h2>
                <p className="text-xl">{topCard.description}</p>
                <div className="card-actions justify-between mt-2">
                  <Link to={`/allfoods/${topCard._id}`}>
                    <button
                      data-tooltip-id="like-tooltip"
                      data-tooltip-content="You can see details"
                      className="font-bold cursor-pointer btn btn-accent"
                    >
                      See Details
                    </button>
                    <Tooltip id="like-tooltip" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default AllFood;
