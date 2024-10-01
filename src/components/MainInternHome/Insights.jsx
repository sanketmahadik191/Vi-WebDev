import React from 'react';

const Insights = () => {
  return (
    <section className="py-10">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-6">
        <span className="text-black">Insights</span> of Vorkinsta Internship
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 gap-6 justify-center px-4 md:flex md:justify-center md:gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm flex flex-col items-center">
          <img
            src="../src/assets/InternTeamCard1.png" // 
            alt="Team Collaboration"
            className="mb-4"
          />
          <p className="text-center text-gray-700">
            Vorkinsta provides a platform that fosters collaboration, learning, and growth with teams who share a passion for innovation and problem-solving throughout your Internship.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm flex flex-col items-center">
          <img
            src="../src/assets/InternTeamCard2.png" 
            alt="Professional Growth"
            className="mb-4"
          />
          <p className="text-center text-gray-700">
            At Vorkinsta, interns are immersed in a supportive environment that encourages professional growth, teamwork, and access to valuable career opportunities within the company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights