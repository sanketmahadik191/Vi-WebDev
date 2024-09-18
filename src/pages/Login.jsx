import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center px-4 md:px-0 md:border-r-black">
      <div className="md:border-4 border-gray-200 rounded-lg p-6 md:p-8 w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">
          Connect to My Vorkinsta!
        </h2>
        <div className="w-full">
          <form className="space-y-6 md:space-y-8">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Username or Email"
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

