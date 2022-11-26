import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllPhones from './components/AllPhones/AllPhones';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SinglePhone from './components/SinglePhone/SinglePhone';
import Spinner from './components/Spinner/Spinner';
import Main from './layout/Main';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('http://localhost:5000/phones')
          
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/allPhones',
          element:<AllPhones></AllPhones>,
         
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
         
        },
        {
          path: "/category/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/category/${params.id}`),
          element: <PrivateRoute><SinglePhone></SinglePhone></PrivateRoute>,
        },
      ]
    },

 {
    path: "*",
    element: <Error></Error>,
  },
  ])
  return (
    <div>
   <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
 <Toaster></Toaster>
    </div>
  );
}

export default App;
