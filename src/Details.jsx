import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiFillLike } from "react-icons/ai";
const Details = () => {

 const food = useLoaderData()
 console.log(food)
  



    return (
        <>
   <div className="w-10/12 mx-auto mt-10 p-6 bg-white shadow-2xl">
      <img src={food.image}  alt={food.name} className="w-full h-60 object-cover rounded mb-4" />

      <h2 className="text-3xl font-bold text-purple-700 mb-2">{food.name}</h2>

      <p className='text-gray-500 py-2 text-2xl'>
        <span className='text-4xl '>({food.
purchaseCount})</span> people already purchase this recipe
      </p>

     <p className="text-lg mt-2 font-semibold"> {food.description }</p>

      <h3 className="text-xl font-semibold mt-4">Category:{food.category }</h3>
      

      <h3 className="text-xl font-semibold mt-4">Origin:{food.origin }</h3>

      <h3 className="text-xl font-semibold mt-4">Available 
quantity:{food.
quantity }</h3>

      <h3 className="text-xl font-semibold mt-4">Price:{food.
price }</h3>

      <h3 className="text-xl font-semibold mt-4">Purchase Count:{food.

purchaseCount }</h3>

<Link to={`/purchase/${food._id}`} className='btn btn-success font-bold mt-4'>
  Purchase This
</Link>
   

      
   


    </div>



        </>
    );
};

export default Details;