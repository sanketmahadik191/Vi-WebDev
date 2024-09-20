import React, { useState } from 'react'

const Testimonals = () => {
    let [testimonals, setTestimonals] = useState({
        name: "",
        testimonal: ""
    })

    return (
        <>
            <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className="block font-semibold text-gray-800 mb-2">
                    Testimonals
                    <p className="mb-5 font-light">Add any prior experience</p>
                </label>
                <div>
                    <label className="block font-semibold text-gray-800 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        value={testimonals.name}
                        required
                        onChange={(e) =>
                            setTestimonals((prev) => ({
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
                        Testimonal
                    </label>
                    <input
                        type="text"
                        value={testimonals.testimonal}
                        required
                        onChange={(e) =>
                            setTestimonals((prev) => ({
                                ...prev,
                                testimonal: e.target.value,
                            }))
                        }
                        className="p-3 sm:p-2 block w-full required:*: rounded-md border border-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                        placeholder="Enter Certification Name"
                    />
                </div>
            </div>
        </>
    )
}

export default Testimonals