import React, { useEffect, useState } from "react";

const Skills = ({ personaDetails, setpersonalDetails }) => {
  let [skills, setSkills] = useState([]);
  let [newSkill, setNewSkill] = useState("");
  let handleaddSkills = () => {
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };
  useEffect(() => {
    setpersonalDetails((prev) => ({ ...prev, skills: skills }));
  }, [skills]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Skills<span className="text-red-500">*</span>
          </label>
          <h5 className="mb-5 font-extralight">
            Add the skills that highlight your expertise, eg. Software Engineer,
            Developer, etc. (At least 1 required)
          </h5>
          {skills.map((skill) => (
            <div className="bg-cyan-200 inline-block p-2 my-2 mr-2 rounded-3xl">
              {skill}{" "}
              <button
                className="inline font-extralight"
                onClick={() =>
                  setSkills((prev) =>
                    prev.filter((Iskill) => (Iskill === skill ? false : true))
                  )
                }
              >
                ✕
              </button>
            </div>
          ))}

          {skills.length > 0 ? (
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="eg: Python Developer, Ui/Ux"
            />
          ) : (
            <input
              type="text"
              value={newSkill}
              required
              onChange={(e) => setNewSkill(e.target.value)}
              className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="eg: Python Developer, Ui/Ux"
            />
          )}
        </div>
        <div>
          <button
            onClick={handleaddSkills}
            className=" text-white bg-blue-950 rounded-md font-semibold w-16"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;
