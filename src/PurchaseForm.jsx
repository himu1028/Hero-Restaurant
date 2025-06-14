import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router';

const PurchaseForm = () => {
    const navigate = useNavigate()
const {user} = use(AuthContext)
const { id : foodId } = useParams();
const today = new Date().toLocaleDateString();
const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const buyerName = user?.displayName || 'Unknown';
    const email = user?.email || 'Unknown';
    const buyingDate = Date.now(); 
    const readableDate = new Date(buyingDate).toLocaleString();
console.log(readableDate);
    

    const orderData = {
        foodId,
      foodName,
      price,
      quantity,
      buyerName,
      email,
      buyingDate,
      readableDate,
    };
  //API call 
    fetch('http://localhost:3000/orders',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(orderData)
})
.then(res => res.json())
.then(data =>{
  console.log('after post',data)
  Swal.fire('Purchase Successful!', 'Your order has been placed.', 'success');
    form.reset();
  navigate("/myorder");
})

    
  };






    return (
         <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Purchase This: <Link className='btn' to={`/allfoods/${foodId}`}>Details</Link></h2>
      
      
      <form onSubmit={handlePurchase} className="space-y-4">
         
        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input type="text" name='name' placeholder="Write Food Name"
            className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block  font-semibold mb-1">Price</label>
          <input type="number" name='price' className="border-2 w-full" />
        </div>
        <div>
          <label className="block  font-semibold mb-1">Quantity</label>
          <input type="number" name='quantity' className="border-2 w-full" />
        </div>

         
        <div>
          <label className="block font-semibold mb-1">Buyer Name</label>
<input type="text" defaultValue={user?.displayName} readOnly name='buyername' placeholder="Your Name"
            className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Buyer Email</label>
          <input type="text" defaultValue={user?.email} readOnly name='buyeremail' placeholder="Your Email"
            className="input input-bordered w-full" />
        </div>

        <div>
            <h1 className='text-xl'>Buying Date: {today}</h1>
        </div>

        <div className="text-center pt-4">
          <button className="btn btn-primary w-full">Purchase</button>
        </div>
      </form>
    </div>
    );
};

export default PurchaseForm;