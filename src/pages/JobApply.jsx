import React from 'react';

// Sample JSON data
const jobData = {
  title: "UI/UX Designer",
  company: "Genex Corporate service",
  location: "Mumbai",
  stipend: "₹ 15,000 / month",
  duration: "3 months",
  applyBy: "20 OCT '24",
  openings: 6,
  applicants: "18 Candidates",
  onboarding: "Immediate Join",
  posted: "Today",
  internshipSpotlight: [
    "Proficient in Designing tools like Adobe XD, Figma, etc.",
    "Certification regarding designing courses."
  ],
  skillsRequired: [
    "Figma", "UX Research", "Adobe Photoshop", "Adobe Illustrator", "Sketch", 
    "Mockups", "Userflow", "Prototyping"
  ],
  overview: `Our UI/UX Design Internship program provides a unique opportunity 
             to gain hands-on experience in designing and enhancing digital products. 
             As an intern, you'll collaborate with our seasoned design team, 
             contribute to live projects, and sharpen your skills in a dynamic, 
             team-oriented environment.`,
  requirements: [
    "Should be available for full-time (in-office) internship",
    "Basic understanding of design principles and tools",
    "Portfolio: A portfolio showcasing your design work (academic or personal projects) is a plus",
    "Strong verbal and written communication skills",
    "Enthusiasm for learning and growing in the field of UI/UX design",
    "Should be available for a duration of 3 months"
  ],
  responsibilities: [
    "Develop wireframes, build prototypes, and craft high-fidelity mockups",
    "Gain proficiency with industry-standard tools such as Figma, Sketch, and Adobe XD",
    "Translate design ideas into interactive experiences",
    "Perform user research and conduct usability testing",
    "Collaborate with developers, project managers, and cross-functional team members"
  ]
};

const JobApply = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button className="text-blue-600 mb-6">&larr; Back</button>

      {/* Job Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{jobData.title}</h1>
          <p className="text-gray-600">{jobData.company}</p>
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Apply Now</button>
          <button className="border border-gray-300 px-4 py-2 rounded-md">Save</button>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800 mb-6">
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Location</p>
          <p>{jobData.location}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Stipend</p>
          <p>{jobData.stipend}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Duration</p>
          <p>{jobData.duration}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Apply by</p>
          <p>{jobData.applyBy}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Openings</p>
          <p>{jobData.openings}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Applicants</p>
          <p>{jobData.applicants}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Onboarding</p>
          <p>{jobData.onboarding}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-semibold">Posted</p>
          <p>{jobData.posted}</p>
        </div>
      </div>

      {/* Internship Spotlight */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Internship Spotlight</h2>
        <ul className="list-disc pl-6">
          {jobData.internshipSpotlight.map((spotlight, index) => (
            <li key={index}>{spotlight}</li>
          ))}
        </ul>
      </div>

      {/* Skills Required */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skill(s) Required</h2>
        <div className="flex flex-wrap gap-2">
          {jobData.skillsRequired.map((skill, index) => (
            <span key={index} className="px-3 py-1 border rounded-md text-sm text-gray-600">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{jobData.overview}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {jobData.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {jobData.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold">Apply</button>
      </div>
    </div>
  );
};

export default JobApply;
