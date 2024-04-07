import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpadateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Root from "../Layouts/Root";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/updateProfile',
            element:<UpdateProfile></UpdateProfile>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;