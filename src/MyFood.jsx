import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const MyFood = () => {
  const { user } = use(AuthContext);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null); 
  console.log(foods);

//   Load Data
  useEffect(() => {
    const myRecipes = async () => {
      const res = await fetch(`http://localhost:3000/myfoods?email=${user?.email}`);
      const data = await res.json();
      setFoods(data);
    };
    myRecipes();
  }, [user?.email]);

//   Handle Delete
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/myfoods/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);

    if (data.deletedCount > 0) {
      setFoods(prev => prev.filter(recipe => recipe._id.toString() !== id.toString()));
    }
  };

//   Update

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const updatedFood = {
//       image: form.image.value,
//       title: form.title.value,
//       ingredients: form.ingredients.value,
//       instruction: form.instruction.value,
//       cuisine: form.cuisine.value,
//       time: form.time.value,
//     };

//     const res = await fetch(`http://localhost:3000/allfoods/{selectedFood._id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedFood)
//     });

//     const data = await res.json();
//     if (data.modifiedCount > 0) {
//       setFoods(prev =>
//         prev.map(food =>
//           food._id === selectedFood._id ? { ...food, ...updatedFood } : food
//         )
//       );
//       document.getElementById('my_modal_4').close();
//     }
//   };

  return (
    <>
     <section className='bg-gray-300 w-11/12 mx-auto py-5 mt-3 rounded-lg'>
     <h2 className='text-4xl font-bold text-center py-5'>My Added Recipe </h2>
       <div className='w-11/12 mt-5 mx-auto grid grid-cols-3'>
        {
          foods.map((food) => (
            <div key={food._id} className="card bg-base-100 w-96 shadow-sm ">


              <figure>
                <img
                  src={food.image || "https://i.ibb.co/vCzbmLwB/hhh.jpg"}
                  alt="Recipe" />
              </figure>

 <div className="card-body">
                <h2 className="card-title text-amber-900 font-bold text-2xl">{food.title}</h2>
                 <p className=' text-2xl font-bold'><span className='font-bold'></span>  {food.name}</p>



 <h3 className='text-xl' ><span className='font-bold'></span>   {food.description}</h3>
           

                <h2 className='text-xl'><span className='font-bold'>Origin:</span>   {food.origin}</h2>
               
                <p className=' text-xl'><span className='font-bold'>Price:</span>{food.price}</p>
                <p className=' text-xl'><span className='font-bold'>Available Quantity:</span>{food.quantity}</p>

                <div className="card-actions justify-between mt-2">
                  <button 
                   data-tooltip-id="like-tooltip" 
      data-tooltip-content="Total Likes"
                  className="badge font-bold cursor-pointer text-3xl mt-1"><AiFillLike />{food.likes}</button>
                   <Tooltip id="like-tooltip"/>

                  <button 
                  data-tooltip-id="like-tooltip" 
      data-tooltip-content="Update Recipe"
                  className="btn btn-accent"
                    onClick={() => {
                      setSelectedFood(food);
                      document.getElementById('my_modal_4').showModal();
                    }}>
                    Update
                  </button>
                  <Tooltip id="like-tooltip"/>

                  <Link>
                    <button 
                    data-tooltip-id="like-tooltip" 
      data-tooltip-content="Remove it"
                    onClick={() => handleDelete(food._id)} className="font-bold cursor-pointer btn btn-accent">Delete</button>
                    <Tooltip id="like-tooltip"/>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Update Modal */}
      {/* <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleUpdate} className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Update Recipe</h2>

            <label className="block font-semibold mb-1">Image URL</label>
            <input className="input input-bordered w-full" name="image" placeholder="Image URL" defaultValue={selectedFood?.image} />

<label className="block font-semibold mb-1">Title</label>
            <input className="input input-bordered w-full" name="title" placeholder="Title" defaultValue={selectedFood?.title} />

<label className="block font-semibold mb-1">Ingredients</label>
       <textarea className="textarea textarea-bordered w-full" name="ingredients" placeholder="Ingredients" defaultValue={selectedFood?.ingredients}></textarea>

<label className="block font-semibold mb-1">Instruction</label>
            <textarea className="textarea textarea-bordered w-full" name="instruction" placeholder="Instructions" defaultValue={selectedFood?.instruction}></textarea>

<label className="block font-semibold mb-1">Cuisine</label>
            <select name="cuisine" className="select select-bordered w-full" defaultValue={selectedFood?.cuisine}>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>

<label className="block font-semibold mb-1">Preparation Time</label>
            <input className="input input-bordered w-full" type="number" name="time" placeholder="Time (minutes)" defaultValue={selectedFood?.time} />

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full">Update Recipe</button>
            </div>

          </form>
          <div className="flex justify-center text-accent mt-3">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
     </section>
    </>
  );
};

export default MyFood;