import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  // State to hold form data (email, password)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // To redirect after login

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData({
      ...formData,
      [type]: value,
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Make POST request to login API with form data
      const response = await axios.post('api/login', formData);

      // If login is successful (status code 200)
      if (response.status === 200) {
        toast.success('Login successful!'); // Show success toast
        // navigate('/homepage'); // Redirect to dashboard after login
      }
    } catch (error) {
      // Handle error if login fails
      if (error.response) {
        // If error response from server (non-2xx status code)
        toast.error(error.response.data.message || 'Login failed'); // Show error message from server
      } else {
        // If network or other errors
        toast.error('Network error, please try again.'); // Show network error message
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4 md:px-0 md:border-r-black">
      <Toaster  reverseOrder={false} /> 
      <div className="md:border-4 border-gray-200 rounded-lg p-6 md:p-8 w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">
          Connect to My Vorkinsta!
        </h2>
        <div className="w-full">
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Username or Email"
                value={formData.email} // Controlled input for email
                onChange={handleChange} // Handle input change
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password} // Controlled input for password
                onChange={handleChange} // Handle input change
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot"
                  className="text-sm text-blue-900 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-950 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150"
            >
              Log in
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-4">
            <button className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition duration-150">
              <FcGoogle className="w-6 h-6 mr-3" />
              Continue with Google
            </button>
            <button className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition duration-150">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-6 h-6 mr-3"
              />
              Continue with Apple
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
