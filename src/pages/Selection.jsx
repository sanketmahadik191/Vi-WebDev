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
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl text-[#0D3451] font-medium mb-2">Join our platform</h1>
      </div>

      <div className="sm:flex sm:space-x-8">
        {/* Employer option */}
        <div className="h-[200px] w-[250px] flex flex-col items-center justify-center relative border p-6 rounded-lg shadow-lg bg-white">
          <input
            type="radio"
            name="role"
            id="employer"
            className="absolute mb-4 right-5 top-8 transform scale-150"
            onChange={handleRoleChange}
            checked={role === 'employer'}
          />
          <label htmlFor="employer" className="block text-lg font-semibold">
            EMPLOYER
          </label>
          <GrCertificate className="text-[4rem] mt-4 mb-2 text-[#0D3451]" />
          <p className="text-sm font-semibold">As an Employer, I'm seeking Interns.</p>
        </div>

        {/* Intern option */}
        <div className="h-[200px] w-[250px] mt-2 sm:mt-0 flex flex-col items-center justify-center relative border p-6 rounded-lg shadow-lg bg-white">
          <input
            type="radio"
            name="role"
            id="intern"
            className="absolute mb-4 right-5 top-8 transform scale-150"
            onChange={handleRoleChange}
            checked={role === 'intern'}
          />
          <label htmlFor="intern" className="block text-lg font-semibold">
            INTERN
          </label>
          <GrCloudComputer className="text-[4rem] mt-4 mb-2 text-[#0D3451]" />
          <p className="text-sm font-semibold">As an Intern, I'm seeking for new opportunities.</p>
        </div>
      </div>

      {/* Verify button */}
      <div className="mt-8">
        <button
          className="bg-[#0D3451] text-white px-28 py-2 rounded-md hover:bg-[#1a5480]"
          onClick={handleVerify}
          disabled={!role}  
        >
          Verify
        </button>
      </div>

      {/* Login Link */}
      <div className="mt-4 text-[12px] font-semibold">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 text-sm">
          Log In
        </a>
      </div>
    </section>
  );
}

export default Selection;

