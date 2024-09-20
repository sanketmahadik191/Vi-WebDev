import React, { useState, useEffect } from "react";
import Education from "../components/Profile/Education";
import Skills from "../components/Profile/Skills";
import Experience from "../components/Profile/Experience";
import Testimonals from "../components/Profile/Testimonals";
import ProjectDetails from "../components/Profile/ProjectDetails";
import Certification from "../components/Profile/Certification";
import PersonalDetails from "../components/Profile/PersonalDetails";
import ProfileDetails from "../components/Profile/ProfileDetails";
import ProfileUpload from "../components/Profile/ProfileUpload";
import ResumeUpload from "../components/Profile/ResumeUpload";

function ProfileCreation() {
  let [firstpage, setFirstpage] = useState(true);

  let [personaDetails, setpersonalDetails] = useState({
    firsname: "",
    lastname: "",
    countryCode: "+91",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    dob: "",
    gender: "",
    language: "",
    careerGap: "",
    skills: "",
  });

  let [userFiles, setuserFiles] = useState({
    profilePic: {},
    resume: {},
  });

  let [profileUpload, setprofileUpload] = useState(null);
  let [resumeUpload, setresumeUpload] = useState(null);

  let handleFileChange = (e, isprofilepic) => {
    let maxprofilephoto = 5;
    let maxresume = 10;
    console.log(isprofilepic);
    let file = e.target.files[0];
    let filesize = file.size / (1024 * 1024);
    if (file) {
      if (isprofilepic) {
        if (filesize > maxprofilephoto) {
          alert("Profile photo size should be smaller than 5mb");
          return;
        } else {
          setuserFiles((prev) => {
            return {
              ...prev,
              profilePic: {
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type,
                fileContent: file,
              },
            };
          });

          setprofileUpload(URL.createObjectURL(file));
        }
      } else {
        if (filesize > maxresume) {
          alert("Resume size should be smaller than 5mb");
          return;
        } else {
          setuserFiles((prev) => {
            return {
              ...prev,
              resume: {
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type,
                fileContent: file,
              },
            };
          });
          setresumeUpload(URL.createObjectURL(file));
        }
      }
    }
  };

  let handleCancel = () => {
    setpersonalDetails({});
    setuserFiles({});
    setEducation({});
    setExperience({})
    setTestimonals({})
    setprojectDetails({});
    setCertification({});
    setFirstpage(true);
  };

  const logFormDataContents = (formData) => {
    const formDataObject = {};
    for (let [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    console.log(formDataObject);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!personaDetails.email || !personaDetails.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();

    formData.append("personaDetails", JSON.stringify(personaDetails));

    if (userFiles.profilePic.fileContent) {
      formData.append("profilePic", userFiles.profilePic.fileContent);
    }
    if (userFiles.resume.fileContent) {
      formData.append("resume", userFiles.resume.fileContent);
    }

    formData.append("education", JSON.stringify(education));

    formData.append("experience", JSON.stringify(experience));

    formData.append("testimonals", JSON.stringify(testimonals));

    formData.append("projectDetails", JSON.stringify(projectDetails));

    formData.append("certification", JSON.stringify(certification));

    logFormDataContents(formData);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the submission.");
    }
  };


  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-cover bg-center mt-8 mb-8 profile px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-2xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.7)]  w-full max-w-xl sm:max-w-2xl lg:max-w-4xl border border-gray-300"
      >
        <h2 className="text-2xl font-bold mb-6 sm:mb-1 text-start text-gray-900 tracking-wide">
          Profile Details
        </h2>
        <h5 className="mb-5 font-light">
          Fill out the required details below
        </h5>

        {firstpage ? (
          <>
            <ProfileDetails
              personaDetails={personaDetails}
              setpersonalDetails={setpersonalDetails} />

            <ProfileUpload
              profileUpload={profileUpload}
              handleFileChange={handleFileChange}
              userFiles={userFiles}
              setprofileUpload={setprofileUpload}
              setuserFiles={setuserFiles}
            />
            <ResumeUpload
              resumeUpload={resumeUpload}
              handleFileChange={handleFileChange}
              userFiles={userFiles}
              setresumeUpload={setresumeUpload}
              setuserFiles={setuserFiles}
            />

            <Education />

            <div className="flex justify-end mb-6 sm:mb-8 sm:text-lg">
              <button
                onClick={() => setFirstpage(false)}
                className=" text-white h-8 bg-blue-950 rounded-md font-semibold w-20"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="p-5">

              <Skills
                setpersonalDetails={setpersonalDetails}
                personaDetails={personaDetails} />

              <Experience />
              <Testimonals />
              <ProjectDetails />
              <Certification />
              <PersonalDetails />

              <div className="flex flex-col sm:flex-row justify-between sm:space-y-0 space-y-4">
                <button
                  className="text-white bg-blue-950 rounded-md h-8 font-semibold w-20"
                  onClick={() => setFirstpage(true)}
                >
                  Back
                </button>
                <div className="flex space-x-4 sm:ml-auto">
                  <button
                    onClick={handleCancel}
                    className="text-blue-950 bg-white rounded-md font-semibold w-20"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-blue-950 rounded-md h-8 font-semibold w-20"
                  >
                    Save
                  </button>
                </div>
              </div>

            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ProfileCreation;
