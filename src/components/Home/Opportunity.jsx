import React from 'react'
import { useNavigate } from 'react-router-dom'
function Opportunity() {
  const navigate = useNavigate()
  return (
    <div className="bg-blue-100 py-10 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl sm:text-5xl font-bold mb-4">Your Opportunity Awaits</h3>
        <p className="text-gray-600 mb-6 text-xl sm:text-2xl">
          Become one of the millions of tech professionals who rely on Vorkinsta to grow
          their careers. Explore jobs, connect with companies, gain insights, and much more!
        </p>
        <button onClick={() => navigate('/createprofile')} className="bg-gray-700 text-white px-6 py-2 sm:py-4 rounded-full hover:bg-gray-500 text-md sm:text-xl">
          Create your free profile
        </button>
      </div>
    </div>
  )
}

export default Opportunity