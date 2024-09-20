import React, { useState } from 'react'

const Experience = () => {
    let [experience, setExperience] = useState({
        companyName: "",
        jobeRole: "",
        start: "",
        end: ""
    })
    return (
        <>
            <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">

                <label className="block font-semibold text-gray-800 mb-2">
                    Experience
                    <p className="mb-5 font-light">Add any prior experience</p>
                </label>
                <div>
                    <label className="block font-semibold text-gray-800 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        value={experience.companyName}
                        required
                        onChange={(e) =>
                            setExperience((prev) => ({
                                ...prev,
                                companyName: e.target.value,
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
                        Job Role
                    </label>
                    <input
                        type="text"
                        value={experience.jobeRole}
                        required
                        onChange={(e) =>
                            setExperience((prev) => ({
                                ...prev,
                                jobeRole: e.target.value,
                            }))
                        }
                        className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                        placeholder="Enter Certification Name"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                    Worked From
                    <br />
                    <input
                        className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                        type="date"
                        onChange={(e) =>
                            setExperience((prev) => ({
                                ...prev,
                                start: e.target.value,
                            }))
                        }
                    />
                </label>
                <label className="block font-semibold text-gray-800 mb-2">
                    Worked Till
                    <br />
                    <input
                        className="p-3 mt-2 sm:p-2 font-light block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                        type="date"
                        onChange={(e) =>
                            setExperience((prev) => ({
                                ...prev,
                                end: e.target.value,
                            }))
                        }
                    />
                </label>

            </div>
        </>
    )
}

export default Experience