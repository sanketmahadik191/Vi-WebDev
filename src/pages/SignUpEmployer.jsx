import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function SignUpEmployer() {
  return (
    <>
      <div className="text-right px-4 py-2">
        <h2 className="text-base sm:text-lg font-semibold">
          Already Registered?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </h2>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-900 mb-4 sm:mb-6 whitespace-nowrap">
        Welcome to the Vorkinsta Team
      </h1>

      <h2 className="text-lg sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
        Sign up to connect as an Employer
      </h2>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
        <div className="w-full max-w-md rounded-lg p-6 sm:p-8">
          <div className="space-y-4">
            <button className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition duration-150">
              <FcGoogle className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              Continue with Google
            </button>
            <button className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition duration-150">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-3"
              />
              Continue with Apple
            </button>
          </div>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-6 sm:space-y-8">
            <div>
              <span className="text-gray-700 font-medium">Company Name</span>
              <input
                type="text"
                id="company-name"
                placeholder="Enter your company name"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <span className="text-gray-700 font-medium">Contact Person</span>
              <input
                type="text"
                id="contact-person"
                placeholder="Enter your contact person's name"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <span className="text-gray-700 font-medium">Password</span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <span className="text-gray-700 font-medium">Country</span>
              <select
                id="country"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
           
              </select>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="keep-informed"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="keep-informed" className="ml-2 text-gray-700 text-sm sm:text-base">
                  Keep me informed with emails about updates and opportunities.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="terms-agreement"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="terms-agreement" className="ml-2 text-gray-700 text-sm sm:text-base">
                  Yes, I understand and agree to the{' '}
                  <a href="#" className="text-blue-600 underline">
                    Vorkinsta Terms of Service
                  </a>
                  , including the{' '}
                  <a href="#" className="text-blue-600 underline">
                    User Agreement
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-950 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpEmployer;
