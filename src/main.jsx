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
      Component: Details,
      loader: ({ params }) => fetch(`http://localhost:3000/allfoods/${params.id}`)

    },

    
      { path: "addfood",
       Component: AddFood },
    
    
    
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
