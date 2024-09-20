import React from 'react'

const PersonalDetails = () => {
    return (
        <>
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
        </>
    )
}

export default PersonalDetails