import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllPhones from './components/AllPhones/AllPhones';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './layout/Main';

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
          loader: () => fetch('http://localhost:5000/allPhones')
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
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
