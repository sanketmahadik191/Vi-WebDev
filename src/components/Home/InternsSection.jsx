import React from 'react';
import img from '../../assets/Intern.png';

function InternsSection() {
  return (
    <section className="min-h-auto lg:px-72 py-10 px-5 bg-white flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="max-w-xl lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-700">Interns</h1>
          <h2 className="text-2xl sm:text-4xl font-bold mt-6">
            Explore internship offers that align with your terms
          </h2>
          <p className="text-md sm:text-lg text-gray-500 mt-8">
            Vorkinsta equips you with the tools to quickly find and filter jobs that align with your skills, experience, and career aspirations—empowering you to confidently choose your next role.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-lg">
              Create Profile
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

export default InternsSection;
