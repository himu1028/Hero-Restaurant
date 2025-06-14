import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
console.log(myOrder)

      const { user } = use(AuthContext);
      
      useEffect(() => {
          const myOrders = async () => {
            const res = await fetch(`http://localhost:3000/orders?email=${user?.email}`);
            const data = await res.json();
            setMyOrder(data);
          };
          myOrders();
        }, [user?.email]);




    return (
        <div>
            
        </div>
    );
};

export default MyOrder;