import React, { useState } from 'react'

const Certification = () => {
    let [certification, setCertification] = useState({
        name: "",
        provider: "",
        url: "",
        completionDate: "",
    });

    return (
        <>
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
        </>
    )
}

export default Certification