import React, { useState, useEffect } from "react";

function ProfileIntern() {
  let [firstpage, setFirstpage] = useState(true);
  let [personaDetails, setpersonalDetails] = useState({
    firsname: "",
    lastname: "",
    countryCode: "+91",
    phone: "",
    email: "",
    address: "",
    streetname: "",
    city: "",
    state: "",
    country: "India",
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

  let [education, setEducation] = useState({
    education: "",
    university: "",
    course: "",
    specialization: "",
    courseType: "",
    courseStart: "",
    courseEnd: "",
    grades: "",
  });

  let [projectDetails, setprojectDetails] = useState({
    title: "",
    courseType: "",
    start: "",
    end: "",
    details: "",
  });

  let [certification, setCertification] = useState({
    name: "",
    provider: "",
    url: "",
    completionDate: "",
  });

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
        }
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
      } else {
        if (filesize > maxresume) {
          alert("Resume size should be smaller than 5mb");
          return;
        }
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
      }
    }
  };

  let handleCancel = () => {
    setpersonalDetails({});
    setuserFiles({});
    setEducation({});
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

  ///////////////////////////////////////////////////////////////////////////////////

  const [courseType, setCourseType] = useState("");
  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-cover bg-center mt-8 mb-8  px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-2xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.7)]  w-full max-w-xl sm:max-w-2xl lg:max-w-4xl border border-gray-300"
      >
        {" "}
        {firstpage ? (
          <>
            <h2 className="text-2xl font-bold mb-6 sm:mb-1 text-start text-gray-900 tracking-wide">
              Profile Details
            </h2>
            <h5 className="mb-5 font-light">
              Fill out the required details below
            </h5>

            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.firsname}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        firsname: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Albert"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.lastname}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        lastname: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Einstein"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border border-gray-800 shadow-sm rounded-lg overflow-hidden">
                    <select
                      className="bg-gray-100 p-2 border-r border-gray-300"
                      value={personaDetails.countryCode}
                      onChange={(e) =>
                        setpersonalDetails((prev) => ({
                          ...prev,
                          countryCode: e.target.value,
                        }))
                      }
                    >
                      <option value="+91">in +91</option>
                      <option value="+1">rus +7</option>
                      <option value="+44">sf +27</option>
                      {/* Add more options as needed */}
                    </select>
                    <input
                      type="number"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="eg. 9783-343-134"
                      value={personaDetails.phone}
                      onChange={(e) =>
                        setpersonalDetails((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={personaDetails.email}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: xyz@gmail.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Door Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.address}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg. No. 19"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Street Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.streetname}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        streetname: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Gandhi Street"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.city}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Mumbai"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.state}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Maharashtra"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={personaDetails.country}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: India"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Pin Code<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={personaDetails.pincode}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        pincode: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: 400004"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-24 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className=" mb-0 font-semibold text-gray-800">
                  Profile Photo<span className="text-red-500">*</span>
                  <br />
                  <p className="font-light text-sm">
                    Kindly Upload a picture of Yourself
                  </p>
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500 light:text-gray-400">
                        <span className="font-semibold">Upload File</span> or
                        drag and drop
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      onChange={(e) => handleFileChange(e, true)}
                      accept="image/png, image/jpeg"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="font-light text-sm">
                  Max file size: 5Mb. File type - PNG, JPEG
                </p>
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className=" mb-0 font-semibold text-gray-800">
                  Upload Resume<span className="text-red-500">*</span>
                  <br />
                  <p className="font-light text-sm">
                    Employers can download and view this resume
                  </p>
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-resume-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500 light:text-gray-400">
                        <span className="font-semibold">Upload File</span> or
                        drag and drop
                      </p>
                    </div>
                    <input
                      id="dropzone-resume-file"
                      type="file"
                      onChange={(e) => handleFileChange(e, false)}
                      accept="image/png, image/jpeg, .pdf, .doc, .docx"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="font-light text-sm">
                  Max file size: 10Mb. File type - PDF, DOC, DOCX, PNG, JPEG
                </p>
              </div>

              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Education<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        education: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p className="font-light">Select Education</p>
                    </option>
                    <option value="PG">PG</option>
                    <option value="UG">UG</option>
                    <option value="12th">12th</option>
                    <option value="10th">10th</option>
                    <option value="Diploma">Diploma</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  University/Institute<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        university: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p>Select University/Institute</p>
                    </option>
                    <option value="Xyz university">Xyz university</option>
                    <option value="xyz institute">xyz institute</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Course<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        course: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p className="font-light">Select Course</p>
                    </option>
                    <option value="Bsc">Bsc</option>
                    <option value="Btech">BTech</option>
                    <option value="Bca">Bca</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Specialization<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 block font-light w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        specialization: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p className="font-light">Select Specialization</p>
                    </option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Maths">Maths</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Course Type<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Full Time"
                      checked={education.courseType === "Full Time"}
                      onChange={(e) =>
                        setEducation((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Full Time</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Part Time"
                      checked={education.courseType === "Part Time"}
                      onChange={(e) =>
                        setEducation((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Part Time</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Correspondence/Distance learning"
                      checked={
                        education.courseType ===
                        "Correspondence/Distance learning"
                      }
                      onChange={(e) =>
                        setEducation((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Correspondence/ Distance learning</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800">
                  Course Duration<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  <select
                    value={education.courseStart}
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        courseStart: e.target.value,
                      }))
                    }
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <option value="">Starting Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>

                  <span className="flex items-center font-bold">to</span>

                  <select
                    value={education.courseEnd}
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        courseEnd: e.target.value,
                      }))
                    }
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <option value="">Ending Year</option>
                    {/* Add more options dynamically as needed */}
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    CGPA/Grade<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={education.grades}
                    required
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        grades: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter your cgpa or grade"
                  />
                </div>
              </div>
              <div className="flex justify-end mb-6 sm:mb-8 sm:text-lg">
                <button
                  onClick={() => setFirstpage(false)}
                  className=" text-white h-8 bg-blue-950 rounded-md font-semibold w-20"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 sm:mb-1 text-start text-gray-900 tracking-wide">
              Profile Details
            </h2>
            <h5 className="mb-5 font-light">
              Fill out the required details below
            </h5>
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Skills<span className="text-red-500">*</span>
                  </label>
                  <h5 className="mb-5 font-extralight">
                    Add the skills that highlight your expertise, eg. Software
                    Engineer, Developer, etc. (At least 1 required)
                  </h5>
                  <input
                    type="text"
                    value={personaDetails.skills}
                    required
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        skills: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Python Developer, Ui/Ux"
                  />
                </div>
                <div>
                  <button
                    onClick={() => setFirstpage(false)}
                    className=" text-white bg-blue-950 rounded-md font-semibold w-16"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Project Details<span className="text-red-500">*</span>
                </label>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Project Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={projectDetails.title}
                    required
                    onChange={(e) =>
                      setprojectDetails((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter project title"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Course Type<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Full Time"
                      checked={projectDetails.courseType === "Full Time"}
                      onChange={(e) =>
                        setprojectDetails((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>In Progress</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Part Time"
                      checked={projectDetails.courseType === "Part Time"}
                      onChange={(e) =>
                        setprojectDetails((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                    />
                    <span>Completed</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Worked Till<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-52 border border-black p-2 rounded-md"
                  type="date"
                  onChange={(e) =>
                    setprojectDetails((prev) => ({
                      ...prev,
                      start: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Worked from<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-52 border border-black p-2 rounded-md"
                  type="date"
                  onChange={(e) =>
                    setprojectDetails((prev) => ({
                      ...prev,
                      end: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Details of Project<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    style={{ resize: "none" }}
                    value={projectDetails.details}
                    required
                    maxLength={1000}
                    rows="5"
                    cols="15"
                    onChange={(e) =>
                      setprojectDetails((prev) => ({
                        ...prev,
                        details: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Certification
                  <p className="mb-5 font-light">
                    Add details of certifications you have completed
                  </p>
                </label>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Certificate Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={certification.name}
                    required
                    onChange={(e) =>
                      setCertification((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter Certification Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Certificate Provider
                  </label>
                  <input
                    type="text"
                    value={certification.provider}
                    required
                    onChange={(e) =>
                      setCertification((prev) => ({
                        ...prev,
                        provider: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter Certification Provider Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Certificate URL
                  </label>
                  <input
                    type="text"
                    value={certification.url}
                    required
                    onChange={(e) =>
                      setCertification((prev) => ({
                        ...prev,
                        url: e.target.value,
                      }))
                    }
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter Certification URL"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Certificate Completed
                </label>
                <input
                  className="w-52 border border-black p-2 rounded-md"
                  type="date"
                  onChange={(e) =>
                    setCertification((prev) => ({
                      ...prev,
                      completionDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>

              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Personal Details<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Date of Birth<span className="text-red-500">*</span>
                  <br />
                  <input
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    type="date"
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
                    }
                  />
                </label>
                <label className="block font-semibold text-gray-800 mb-2">
                  Gender<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p>Select </p>
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Language<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        language: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p>Select </p>
                    </option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Marathi">Marathi</option>
                  </select>
                </label>
                <label className="block font-semibold text-gray-800 mb-2">
                  Career Gap<span className="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    onChange={(e) =>
                      setpersonalDetails((prev) => ({
                        ...prev,
                        careerGap: e.target.value,
                      }))
                    }
                  >
                    <option value="">
                      <p>Select </p>
                    </option>
                    <option value="1year">1year</option>
                    <option value="2year">2year</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
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

              {/* <div className="flex justify-start sm:text-lg">
              </div>
              <div className="flex justify-end mb-6 sm:mb-8 sm:text-lg"></div> */}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ProfileIntern;