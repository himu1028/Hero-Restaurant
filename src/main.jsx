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
    
    
    
    ]
  },
]);




// Main part
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
