
const ProfileDetails = ({ personaDetails, setpersonalDetails }) => {

    return (
        <>
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
                            Address<span className="text-red-500">*</span>
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

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
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
                </div>




            </div>

        </>
    )
}

export default ProfileDetails