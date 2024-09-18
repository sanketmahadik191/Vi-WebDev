import React, { useState } from "react";

function ProfileCreation() {
  const [countryCode, setCountryCode] = useState("+91");
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");
  let [firstpage, setFirstpage] = useState(true);
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let handlesubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      alert("message sent");
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [courseType, setCourseType] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleCourseTypeChange = (e) => {
    setCourseType(e.target.value);
  };
  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-cover bg-center mt-8 mb-8  px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handlesubmit}
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
                    First Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Albert"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Last Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
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
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+91">in +91</option>
                      <option value="+1">rus +7</option>
                      <option value="+44">sf +27</option>
                      {/* Add more options as needed */}
                    </select>
                    <input
                      type="text"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="eg. 9783-343-134"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Email<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: xyz@gmail.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Door Address<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg. No. 19"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Street Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Gandhi Street"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    City<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Mumbai"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    State<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Maharashtra"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Country<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: India"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Pin Code<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: 400004"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-24 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className=" mb-0 font-semibold text-gray-800">
                  Profile Photo<span class="text-red-500">*</span>
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
                  Upload Resume<span class="text-red-500">*</span>
                  <br />
                  <p className="font-light text-sm">
                    Employers can download and view this resume
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
                  Education<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  University/Institute<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  Course<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  Specialization<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 mt-2 sm:p-2 block font-light w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  Course Type<span class="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Full Time"
                      checked={courseType === "Full Time"}
                      onChange={handleCourseTypeChange}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Full Time</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Part Time"
                      checked={courseType === "Part Time"}
                      onChange={handleCourseTypeChange}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Part Time</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Correspondence/Distance learning"
                      checked={
                        courseType === "Correspondence/Distance learning"
                      }
                      onChange={handleCourseTypeChange}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Correspondence/ Distance learning</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800">
                  Course Duration<span class="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  <select
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <option value="">Starting Year</option>
                    {/* Add more options dynamically as needed */}
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>

                  <span className="flex items-center font-bold">to</span>

                  <select
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
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
                    CGPA/Grade<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
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
                    Skills<span class="text-red-500">*</span>
                  </label>
                  <h5 className="mb-5 font-extralight">
                    Add the skills that highlight your expertise, eg. Software
                    Engineer, Developer, etc. (At least 1 required)
                  </h5>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="eg: Albert"
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
                  Project Details<span class="text-red-500">*</span>
                </label>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Project Title<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter project title"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Course Type<span class="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Full Time"
                      checked={courseType === "Full Time"}
                      onChange={handleCourseTypeChange}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>In Progress</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Part Time"
                      checked={courseType === "Part Time"}
                      onChange={handleCourseTypeChange}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span>Completed</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Worked Till<span class="text-red-500">*</span>
                </label>
                <input
                  className="w-52 border border-black p-2 rounded-md"
                  type="date"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 ">
                  Worked from<span class="text-red-500">*</span>
                </label>
                <input
                  className="w-52 border border-black p-2 rounded-md"
                  type="date"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">
                    Details of Project<span class="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    style={{ resize: "none" }}
                    value={fname}
                    required
                    maxLength={1000}
                    rows="5"
                    cols="15"
                    onChange={(e) => setFname(e.target.value)}
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
                    Certificate Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter project title"
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
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter project title"
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
                    value={fname}
                    required
                    onChange={(e) => setFname(e.target.value)}
                    className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter project title"
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
                />
              </div>
              <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>

              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Personal Details<span class="text-red-500">*</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                  Date of Birth<span class="text-red-500">*</span>
                  <br />
                  <input
                    className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    type="date"
                  />
                </label>
                <label className="block font-semibold text-gray-800 mb-2">
                  Gender<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  Language<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                  Career Gap<span class="text-red-500">*</span>
                  <br />
                  <select
                    className="p-3 h-12 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                    name="Education"
                    id=""
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
                {/* Left aligned Save button */}
                <button
                  type="submit"
                  className="text-white bg-blue-950 rounded-md h-8 font-semibold w-20"
                  onClick={() => setFirstpage(true)}
                >
                  Back
                </button>

                {/* Right aligned Cancel and Save buttons */}
                <div className="flex space-x-4 sm:ml-auto">
                  <button className="text-blue-950 bg-white rounded-md font-semibold w-20">
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

export default ProfileCreation;
