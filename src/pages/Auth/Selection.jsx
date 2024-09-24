import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { GrCertificate, GrCloudComputer } from "react-icons/gr";

function Selection() {
  const [role, setRole] = useState('');  
  const navigate = useNavigate();  

  const handleRoleChange = (e) => {
    setRole(e.target.id);  
  };

  const handleVerify = () => {
    if (role === 'employer') {
      navigate('/signup/employer');  
    } else if (role === 'intern') {
      navigate('/signup/intern'); 
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-auto bg-gray-100 py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl text-[#0D3451] font-medium mb-4">
          Join our platform
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-md">
          Choose your role to get started and discover new opportunities tailored for you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
        {/* Employer option */}
        <div className="h-[160px] sm:h-[220px] w-full sm:w-[260px] flex flex-col items-center justify-center relative border p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
          <input
            type="radio"
            name="role"
            id="employer"
            className="absolute mb-4 right-4 top-4 transform scale-125 sm:scale-150"
            onChange={handleRoleChange}
            checked={role === 'employer'}
          />
          <label htmlFor="employer" className="block text-lg font-semibold text-[#0D3451]">
            EMPLOYER
          </label>
          <GrCertificate className="text-[3rem] sm:text-[4rem] mt-4 mb-2 text-[#0D3451]" />
          <p className="text-sm text-center sm:text-base font-medium text-gray-700">
            Seeking interns for your company.
          </p>
        </div>

        {/* Intern option */}
        <div className="h-[160px] sm:h-[220px] w-full sm:w-[260px] flex flex-col items-center justify-center relative border p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
          <input
            type="radio"
            name="role"
            id="intern"
            className="absolute mb-4 right-4 top-4 transform scale-125 sm:scale-150"
            onChange={handleRoleChange}
            checked={role === 'intern'}
          />
          <label htmlFor="intern" className="block text-lg font-semibold text-[#0D3451]">
            INTERN
          </label>
          <GrCloudComputer className="text-[3rem] sm:text-[4rem] mt-4 mb-2 text-[#0D3451]" />
          <p className="text-sm text-center sm:text-base font-medium text-gray-700">
            Looking for internship opportunities.
          </p>
        </div>
      </div>

      {/* Verify button */}
      <div className="mt-10">
        <button
          className={`bg-[#0D3451] text-white w-full sm:w-auto px-16 py-2 rounded-md font-semibold hover:bg-[#1a5480] transition-colors ${!role ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleVerify}
          disabled={!role}
        >
          Verify
        </button>
      </div>

      {/* Login Link */}
      <div className="mt-6 text-[12px] font-medium">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 text-sm hover:underline">
          Log In
        </a>
      </div>
    </section>
  );
}

export default Selection;
