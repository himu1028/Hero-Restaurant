import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import AuthProvider from '../Context/AuthProvider.jsx';
import AllFood from './AllFood.jsx';
import Details from './Details.jsx';
import AddFood from './AddFood.jsx';
import MyFood from './MyFood.jsx';
import PurchaseForm from './PurchaseForm.jsx';
import MyOrder from './MyOrder.jsx';
import GalleryPage from './GalleryPage.jsx';

import PrivateRoute from './Routs/PrivateRoute.jsx';
// import AuthProvider from '../Context/AuthProvider.jsx';



// Router
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,
       Component: Home },

      { path: "about",
       Component: About },

      { path: "register",
       Component: Register },

      { path: "login",
       Component: Login },

      { path: "allfood",
       Component: AllFood },

       { path: "/allfoods/:id",
      element: <Details></Details>,
      loader: ({ params }) => fetch(`https://restaurant-hero-eta.vercel.app/allfoods/${params.id}`)

    },
      { path: "addfood",
       element:<PrivateRoute><AddFood></AddFood></PrivateRoute>  },

      { path: "myfood",
       element:<PrivateRoute><MyFood></MyFood></PrivateRoute> },

      { path: "myorder",
       element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute> },

      { path: "gallery",
       element:<GalleryPage></GalleryPage>},

      { path: "purchase/:id",
       element:<PrivateRoute><PurchaseForm></PurchaseForm></PrivateRoute> },
    
    
    
    ]
  },
]);




// Main part
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
