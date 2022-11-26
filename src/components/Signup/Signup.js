import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const dropdown = form.dropdown.value;
    const confirmedPassword = form.confirmedPassword.value;
    console.log(email, password,dropdown);
    creatUser(email, password,confirmedPassword)
      .then((result) => {
        const user = result.user;
        saveUser(email,dropdown)
        console.log(user);
        form.reset();
      
      })
      .catch((error) => console.error(error));
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const saveUser =(name, email ,role)=>{
    const usersSaved  ={name ,email,role};
    console.log(usersSaved);
    fetch("http://localhost:5000/usersList", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(usersSaved),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        
        })
        .catch((err) => console.log(err));

}

  return (
    <div>
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-white-400 text-gray-700">
        <h2 className="mb-3 text-3xl font-semibold text-center text-red-600">
          Create An Account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Dont have account?
          <Link to={'/signup'}
            
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Sign up here
          </Link>
        </p>
        
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-red-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-red-600"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-red-600">Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-red-400" />
          <p className="px-3 text-red-400">OR</p>
          <hr className="w-full text-red-400" />
        </div>
       

        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          
           <select type="dropdown" name="dropdown" id="dropdown" className="select text-white bg-red-500  select-bordered w-full">
                    <option disabled selected>Select User</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="email" className="block text-sm text-red-600">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border rounded-md border-red-700 bg-red-500 text-gray-100 focus:border-violet-400"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                
                  className="text-xs hover:underline text-red-500"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border rounded-md border-red-700 bg-red-500 text-gray-100 focus:border-violet-400"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="confirmedPassword" className="text-sm">
                  Confirm Password
                </label>
                <Link
                  rel="noopener noreferrer"
                 
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="confirmedPassword"
                id="confirmedPassword"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border rounded-md border-red-700 bg-red-500 text-white focus:border-violet-400"
                required
              />
            </div>
          </div>
         
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 hover:text-white"
          >
            Sign up
          </button>
          <p className="px-6 text-sm text-center text-red-400">
              Already have an Account Login?
              <Link
                to={"/login"}
                href="#"
                className="hover:underline text-white"
              >
                Log in
              </Link>
              .
            </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
