import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router';

const PurchaseForm = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id: foodId } = useParams();
    const today = new Date().toLocaleDateString();

    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/allfoods/${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data));
    }, [foodId]);

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

        // quantity
        if (quantity > food.quantity) {
            return Swal.fire('Error', `You cannot buy more than available quantity (${food.quantity})`, 'error');
        }
// email
        {user?.email === food?.email && (
    <div className="text-red-500 font-bold text-center mb-4">
        You cannot purchase your own added food item.
    </div>
)}

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

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire('Purchase Successful!', 'Your order has been placed.', 'success');
                form.reset();
                navigate("/myorder");
            });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Purchase This: <Link className='btn' to={`/allfoods/${foodId}`}>Details</Link>
            </h2>

            {food?.quantity === 0 && (
                <div className="text-red-500 font-bold text-center mb-4">
                    This item is not available for purchase.
                </div>
            )}

            <form onSubmit={handlePurchase} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Food Name</label>
                    <input type="text" name='name' defaultValue={food?.name} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Price</label>
                    <input type="number" name='price' defaultValue={food?.price} className="border-2 w-full" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Quantity</label>
                    <input 
                        type="number" 
                        name='quantity' 
                        className="border-2 w-full" 
                        min="1" 
                        
                        required 
                        disabled={food?.quantity === 0}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Buyer Name</label>
                    <input type="text" defaultValue={user?.displayName} readOnly name='buyername' className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Buyer Email</label>
                    <input type="text" defaultValue={user?.email} readOnly name='buyeremail' className="input input-bordered w-full" />
                </div>

                <div>
                    <h1 className='text-xl'>Buying Date: {today}</h1>
                </div>

                <div className="text-center pt-4">
                    <button
                        className="btn btn-primary w-full"
                        disabled={food?.quantity === 0 || user?.email === food?.email}
                    >
                        Purchase
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseForm;
