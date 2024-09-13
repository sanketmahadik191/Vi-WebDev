import React from 'react';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 py-10">
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        {/* Sign-Up form */}
        <div className="flex flex-col justify-center bg-white p-8 shadow-lg rounded-lg" style={{ width: '24rem', height: '32rem' }}>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Create your account</h1>
            <p className="text-gray-500 mb-6">Fill in the details to sign up.</p>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900" 
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm your password" 
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900" 
                />
              </div>

              <button 
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded-md">
                Sign Up
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Already have an account? <a href="#" className="text-purple-700 font-semibold">Login</a></p>
            </div>
          </div>
        </div>

        {/* Text banner */}
        <div className="flex items-center justify-center bg-purple-700 text-white" style={{ width: '24rem', height: '32rem' }}>
          <div className="text-center p-6">
            <h1 className="text-6xl font-extrabold leading-tight">MY</h1>
            <h2 className="text-5xl font-semibold mt-2">VORKINSTA</h2>
          </div>
        </div>
      </div>

   
    </div>
  );
}

export default SignUp;
