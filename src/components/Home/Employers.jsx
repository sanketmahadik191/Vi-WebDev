import React from 'react'
import img from '../../assets/Employeer.png'
function Employers() {
    
  return (
    <section className="py-20 px-5 bg-white">
        <div className="bg-white py-10 px-6 sm:px-10 flex flex-col items-center">
      <div className="max-w-2xl text-center">
        <span className="text-blue-600 font-semibold">Employers</span>
        <h2 className="text-3xl font-bold mt-2">
          Discover Talented Interns and Onboard Now
        </h2>
        <p className="text-gray-500 mt-4">
          With access to millions of tech professionals and AI-powered matching tools,
          Vorkinsta simplifies finding the perfect candidates, making it easier than ever
          to fill your open roles.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Start Hiring
          </button>
          <button className="bg-white border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-100">
            Post a job
          </button>
        </div>
      </div>
      <div className="mt-8">
        <img
          src={img}
          alt="Job Post Illustration"
          className="w-full max-w-sm"
        />
      </div>
    </div>
    </section>
  )
}

export default Employers
