import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllPhones from "./components/AllPhones/AllPhones";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SinglePhone from "./components/SinglePhone/SinglePhone";
import Spinner from "./components/Spinner/Spinner";
import Main from "./layout/Main";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import MyOrder from "./components/MyOrder/MyOrder";
import AllUser from "./components/AllUser/AllUser";
import AdminRoute from "./components/PrivateRoute/AdminRoute/AdminRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://swap-server-site.vercel.app/phones"),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/allPhones",
          element: (
            <PrivateRoute>
              <AllPhones></AllPhones>
            </PrivateRoute>
          ),
        },

        {
          path: "/category/:id",
          loader: ({ params }) =>
            fetch(`https://swap-server-site.vercel.app/category/${params.id}`),
          element: (
            <PrivateRoute>
              <SinglePhone></SinglePhone>
            </PrivateRoute>
          ),
        },
      ],
    },

    {
      path: "*",
      element: <Error></Error>,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard",
          element: <MyOrder></MyOrder>,
        },
        {
          path: "/dashboard/allusers",
          element: (
            <AdminRoute>
              <AllUser></AllUser>
            </AdminRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider
        fallbackElement={<Spinner></Spinner>}
        router={router}
      ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
