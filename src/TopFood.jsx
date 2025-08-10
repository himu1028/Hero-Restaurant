import React, { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const TopFood = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetch('https://restaurant-hero-eta.vercel.app/tops')
      .then(res => res.json())
      .then(data => {
        setTop(data)
      });
  }, []);

  return (
    <>
      <div className='bg-gray-300 w-11/12 mx-auto mt-3 rounded-lg'>
        <div className="text-xl md:text-3xl pt-10 my-4 text-center text-blue-400 font-bold">
          <Typewriter
            words={['Top Food', 'Welcome to Top Food!', 'Top Food']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  py-5'>
          {
            top.map(topCard => (
              <div key={topCard._id} className="card bg-base-100 w-full h-full shadow-sm">
                <figure>
                  <img className='w-full h-48 object-cover' src={topCard.image} alt="Recipe" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-amber-900 text-2xl font-bold">
                    {topCard.name}
                    <div className="badge badge-secondary">TOP</div>
                  </h2>
                  <p className='text-xl'>{topCard.description}</p>
                  <div className="card-actions justify-between mt-2">
                    <Link to={`/allfoods/${topCard._id}`}>
                      <button
                        data-tooltip-id="like-tooltip"
                        data-tooltip-content="You can see details"
                        className="font-bold cursor-pointer btn btn-accent">
                        See Details
                      </button>
                      <Tooltip id="like-tooltip" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='text-center my-4 pb-6'>
          <Link to={"/allfood"}>
            <button
              data-tooltip-id="like-tooltip"
              data-tooltip-content="You can see details"
              className='p-4 md:p-6 btn btn-primary text-xl md:text-2xl'>
              See All
            </button>
            <Tooltip id="like-tooltip" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopFood;
