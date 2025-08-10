import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router';



const AddFood = () => {
const { user} = use(AuthContext)
const email =user?.email

const handleAdd = e => {
  e.preventDefault();


const name = e.target.name.value
const image = e.target.image.value
const description = e.target.description.value
const origin = e.target.origin.value
const price = e.target.price.value
const purchaseCount = parseInt(0)
const quantity = e.target.quantity.value
const categoryInputs = e.target.querySelectorAll('input[name="category"]:checked');
  const category = Array.from(categoryInputs).map(input => input.value);

  const _id =Math.floor(Math.random()*1000000000);
const form = {name,purchaseCount,image,description,origin,price,quantity,category,email,_id}




// Send data to db
fetch('https://restaurant-hero-eta.vercel.app/allfoods', {
  method:'POST',
  headers:{
     
    'content-type':'application/json',
    authorization: `Bearer ${user?.accessToken}` 
  },
  body:JSON.stringify(form)
})
.then(res => res.json())
.then(data =>{
  console.log('after post',data)
  Swal.fire("Successfully Added")
  Navigate("/myfood");
})


}







  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Food</h2>
      
      <form onSubmit={handleAdd} className="space-y-4">

{/* Name */}
        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input type="text" name='name' placeholder="Write Recipe Title"
            className="input input-bordered w-full" />
        </div>
{/* Image */}
        <div>
          <label className="block font-semibold mb-1">Food Image link</label>
          <input type="text" name='image' placeholder="Enter image URL"
            className="input input-bordered w-full" />
        </div>

{/* Description */}
       
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Write your ingredients..."></textarea>
        </div>

{/* Origin */}
        <div>
          <label className="block font-semibold mb-1">Food Origin</label>
           <select name='origin' className="select select-bordered w-full">
            <option>India</option>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>China</option>
            <option>UK</option>
            <option>Italy</option>
            <option>Turkey</option>
            <option>Mixed</option>
          </select>
        </div>

       {/*Price  */}
        <div>
          <label className="block  font-semibold mb-1">Price</label>
          <input type="number" name='price' className="border-2 w-full" />
        </div>
        <div>

            {/* Quantity */}
          <label className="block  font-semibold mb-1">Quantity</label>
          <input type="number" name='quantity' className="border-2 w-full" />
        </div>

       {/* Category */}
        <div>
          <label name='category2' className="block font-semibold mb-1">Categories</label>
          <div className="flex flex-wrap gap-4">
            {['BBQ', 'Fast Food', 'Street Food', 'Curry', 'Rice','Snacks','Dessert','Middle Eastern'].map(cat => (
              <label key={cat} className="flex items-center gap-2">
                <input type="checkbox" value={cat} name='category' className="checkbox" />
                {cat}
              </label>
            ))}
          </div>
        </div>

        
      
        
        <div className="text-center pt-4">
          <button className="btn btn-accent w-full">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;