import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:3000/orders?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`
          }
        });

        const data = await res.json();

        
        if (Array.isArray(data)) {
          setMyOrder(data);
        } else {
          console.error("Unexpected response:", data);
          setMyOrder([]); 
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setMyOrder([]);
      }
    };

    if (user?.email && user?.accessToken) {
      fetchOrders();
    }
  }, [user?.email, user?.accessToken]);

  return (
    <section className='w-11/12 mx-auto'>
      <div className="p-6">
        <h2 className="text-3xl text-center font-bold mb-4">My Orders</h2>

        {
          myOrder.length === 0 ? (
            <p className="text-gray-500">No orders found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border">Serial</th>
                    <th className="px-4 py-2 border">Food Name</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Quantity</th>
                    <th className="px-4 py-2 border">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    myOrder.map((order, index) => (
                      <tr key={order._id}>
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{order.foodName}</td>
                        <td className="px-4 py-2 border">${order.price}</td>
                        <td className="px-4 py-2 border">{order.quantity || 1}</td>
                        <td className="px-4 py-2 border">
                          {new Date(order.buyingDate).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default MyOrder;
