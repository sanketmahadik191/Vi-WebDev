import React, { useState } from 'react'

const ProjectDetails = () => {
    let [projectDetails, setprojectDetails] = useState({
        title: "",
        courseType: "",
        start: "",
        end: "",
        details: "",
    });

    return (
        <>
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
        </>
    )
}

export default ProjectDetails