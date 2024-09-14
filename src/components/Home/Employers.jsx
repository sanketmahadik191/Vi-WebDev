import React from 'react';
import img from '../../assets/Employeer.png';

function Employers() {
  return (
    <section className="min-h-auto py-10 lg:px-72 px-5 bg-white flex items-center">
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Text Content */}
      <div className="max-w-xl lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-700 ">Employers</h1>
        <h2 className="text-2xl sm:text-4xl font-bold mt-6 text-gray-500">
        Discover Talented Interns and
        Onboard Now
        </h2>
        <p className="text-md sm:text-lg text-gray-500 mt-8">
        With access to millions of tech professionals and AI
powered matching tools, Vorkinsta simplifies finding the
perfect candidates, making it easier than ever to fill your
open roles
        </p>
        <div className="mt-10 flex justify-center lg:justify-start space-x-6">
          <button className="bg-slate-100 text-black px-8 py-3 rounded-full hover:bg-slate-300 text-lg min-w-44">
            Start Hiring
          </button>
          <button className="bg-slate-100 text-black px-8 py-3 rounded-full hover:bg-slate-300 text-lg min-w-44">
           Post Job
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={img}
          alt="Intern Illustration"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  </section>
  );
}

export default Employers;
