import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
     const { user, loading } = use(AuthContext);
 
  if (loading) {
    return <div className="text-center py-10 text-xl font-bold">Loading...</div>; // Or spinner
  }
  
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;