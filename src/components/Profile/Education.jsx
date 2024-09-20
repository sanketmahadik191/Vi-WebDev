import React, { useState } from 'react'

const Education = () => {
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

    return (
        <>
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
        </>
    )
}

export default Education