import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [loading, setLoading] = useState(true); // spinner state

  // Load Data
  useEffect(() => {
    const myRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://restaurant-hero-eta.vercel.app/myfoods?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`
          }
        });
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) {
      myRecipes();
    }
  }, [user?.email, user?.accessToken]);

  // Handle Delete
  const handleDelete = async (id) => {
    const res = await fetch(`https://restaurant-hero-eta.vercel.app/myfoods/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      setFoods(prev => prev.filter(recipe => recipe._id.toString() !== id.toString()));
    }
  };

  // Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const origin = e.target.origin.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const categoryInputs = e.target.querySelectorAll('input[name="category"]:checked');
    const category = Array.from(categoryInputs).map(input => input.value);

    const updatedFood = { name, image, description, origin, price, quantity, category };

    const res = await fetch(`https://restaurant-hero-eta.vercel.app/myfoods/${selectedFood._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFood)
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      setFoods(prev =>
        prev.map(food =>
          food._id === selectedFood._id ? { ...food, ...updatedFood } : food
        )
      );
      document.getElementById('my_modal_4').close();
    }
  };

  return (
    <>
      <section className='bg-gray-300 w-11/12 mx-auto py-5 mt-3 rounded-lg'>
        <h2 className='text-4xl font-bold text-center py-5'>My Added Recipe</h2>

        {loading ? (
          // Spinner while loading
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : foods.length === 0 ? (
          // No data found message
          <div className="text-center py-10 text-2xl font-semibold text-gray-700">
            No food found
          </div>
        ) : (
          // Data grid
          <div className='w-11/12 mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {foods.map((food) => (
              <div key={food._id} className="card bg-base-100 shadow-sm">
                <figure>
                  <img
                    src={food.image || "https://i.ibb.co/vCzbmLwB/hhh.jpg"}
                    alt="Recipe"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-amber-900 font-bold text-2xl">{food.title}</h2>
                  <p className=' text-2xl font-bold'>{food.name}</p>
                  <h3 className='text-xl'>{food.description}</h3>
                  <h2 className='text-xl'><span className='font-bold'>Origin:</span> {food.origin}</h2>
                  <p className=' text-xl'><span className='font-bold'>Price:</span> {food.price}</p>
                  <p className=' text-xl'><span className='font-bold'>Available Quantity:</span> {food.quantity}</p>

                  <div className="card-actions justify-between mt-2">
                    <Tooltip id="like-tooltip" />
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
                    <Tooltip id="like-tooltip" />
                    <Link>
                      <button
                        data-tooltip-id="like-tooltip"
                        data-tooltip-content="Remove it"
                        onClick={() => handleDelete(food._id)}
                        className="font-bold cursor-pointer btn btn-accent">
                        Delete
                      </button>
                      <Tooltip id="like-tooltip" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Update Modal */}
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleUpdate} className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Update Your Food</h2>

              <label className="block font-semibold mb-1">Food Name</label>
              <input className="input input-bordered w-full" name="name" placeholder="Food name" defaultValue={selectedFood?.name} />

              <label className="block font-semibold mb-1">Image</label>
              <input className="input input-bordered w-full" name="image" placeholder="Image URL" defaultValue={selectedFood?.image} />

              <label className="block font-semibold mb-1">Description</label>
              <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Description" defaultValue={selectedFood?.description}></textarea>

              <label className="block font-semibold mb-1">Origin</label>
              <select name="origin" className="select select-bordered w-full" defaultValue={selectedFood?.origin}>
                <option>India</option>
                <option>Bangladesh</option>
                <option>USA</option>
                <option>China</option>
                <option>UK</option>
                <option>Italy</option>
                <option>Turkey</option>
                <option>Mixed</option>
              </select>

              <label className="block font-semibold mb-1">Price</label>
              <input className="input input-bordered w-full" type="number" name="price" placeholder="Price" defaultValue={selectedFood?.price} />

              <label className="block font-semibold mb-1">Quantity</label>
              <input className="input input-bordered w-full" type="number" name="quantity" placeholder="Quantity" defaultValue={selectedFood?.quantity} />

              <label className="block font-semibold mb-1">Categories</label>
              {['BBQ', 'Fast Food', 'Street Food', 'Curry', 'Rice', 'Snacks', 'Dessert', 'Middle Eastern'].map(cat => (
                <label key={cat} className="flex items-center gap-2">
                  <input type="checkbox" value={cat} name='category' className="checkbox" />
                  {cat}
                </label>
              ))}

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
        </dialog>
      </section>
    </>
  );
};

export default MyFood;
