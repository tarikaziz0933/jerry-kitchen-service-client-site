import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Paybill from "../Pages/Paybill/Paybill";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/allservices',
        element: <AllServices></AllServices>,
        loader: ({ params }) => fetch(`http://localhost:5000/services`)
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/paybill',
        element: <Paybill></Paybill>
      }
    ]
  }
])

export default router;