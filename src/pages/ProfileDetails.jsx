import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { FaArrowRightLong } from "react-icons/fa6";

const ProfileDetails = () => {

    const [logo, setLogo] = useState(null); // Store the image file in state

    const [companyBio, setCompanyBio] = useState('');
    const maxChars = 600;

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(file); // Store the file in the state, but don't display it
        }
    };

    const handleSubmit = () => {
        // Here you can access the file via the logo state
        console.log(logo);
    };


    const handleBioChange = (event) => {
        const text = event.target.value;
        if (text.length <= maxChars) {
            setCompanyBio(text);
        }
    };

    return (
        <div className="min-h-screen pb-12  bg-gray-100 flex flex-col justify-center p-2 space-y-6">

            {/* Profile Details Header */}
            <div className="w-full max-w-6xl mx-auto py-2 md:py-6">
                <h1 className="text-xl md:text-2xl font-bold">
                    Profile Details<span className="text-red-500 ml-1">*</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base mt-1">Fill out the required details below</p>
            </div>

            {/* Card Container */}
            <div className="w-full max-w-6xl  mx-auto bg-white shadow-lg border border-gray-500 rounded-lg  p-6 md:p-12 space-y-6">
                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Name<span className="text-red-500 ml-1">*</span></label>
                        <input
                            type="text"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1 ">Company<span className="text-red-500 ml-1">*</span></label>
                        <input
                            type="text"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company name"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Mobile Number with Flag and Country Code */}
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Mobile No.<span className="text-red-500 ml-1">*</span></label>
                        <div className="flex items-center p-2 border rounded-md focus-within:ring-2 focus-within:ring-blue-500">

                            {/* India Flag Icon */}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                alt="India Flag"
                                className="w-6 h-4 mr-2 rounded-sm"
                            />

                            {/* Country Code */}
                            <span className="mr-2">+91</span>

                            {/* Mobile Number Input */}
                            <input
                                type="text"
                                className="flex-1 focus:outline-none"

                            />
                        </div>
                    </div>

                    {/* Email ID*/}
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Email ID<span className="text-red-500 ml-1">*</span></label>
                        <input
                            type="email"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                {/* Location*/}
                <div className="flex flex-col pr-0 md:pr-4">
                    <label className="font-medium mb-1">Location<span className="text-red-500 ml-1">*</span></label>
                    <input
                        type="text"
                        className="p-2 border rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your location"
                    />
                </div>

                {/* Logo Upload */}
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">
                        Company's Logo<span className="text-red-500 ml-1">*</span>
                    </label>
                    <p className="text-gray-500">Upload the image of the company's logo</p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2  sm:space-y-0 sm:space-x-4 w-full">
                        {/* Upload Button */}
                        <div className="relative">
                            <input
                                type="file"
                                id="logo-upload"
                                accept="image/*, application/pdf, .doc, .docx"
                                onChange={handleLogoUpload}
                                className="hidden" // Hide default input
                            />
                            <label
                                htmlFor="logo-upload"
                                className="cursor-pointer flex items-center space-x-2 py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition duration-150"
                            >
                                <FiUpload className="text-lg" /> {/* Upload Icon */}
                                <span>Upload file</span>
                            </label>
                        </div>

                        {/* Placeholder or File Name */}
                        <span >
                            {logo ? logo.name : 'No file choosen'}
                        </span>
                    </div>

                    {/* File details */}
                    <span className="text-sm text-gray-400">
                        Max file size: 10MB, File types: JPG, PNG, PDF, DOC, DOCX
                    </span>
                </div>

                <div className="flex flex-col">
                    <label className="font-medium mb-1">
                        Company Bio<span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                        rows="5"
                        value={companyBio}
                        onChange={handleBioChange}
                        className="p-2 px-2 md:px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="give a brief description about the company..."
                    />

                    {/* Remaining characters display */}
                    <div className="text-right text-sm text-gray-400 mt-1">
                        {maxChars - companyBio.length} characters left
                    </div>
                </div>

                {/* Your Designation */}
                <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm">Your Designation<span className="text-red-500 ml-1">*</span></label>
                    <input
                        type="text"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ex: Recruiter"
                    />
                </div>

                {/* Dropdown Company Based */}
                <div className="flex flex-col pr-0 md:pr-4">
                    <label className="font-medium mb-1">Company Based<span className="text-red-500 ml-1">*</span></label>
                    <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-1/2 text-gray-500">
                        <option value="" disabled selected >Select company based</option>
                        <option>Remote</option>
                        <option>On-Site</option>
                        <option>Hybrid</option>
                    </select>
                </div>

                {/* Started From date */}
                <div className="flex flex-col ">
                    <label className="font-medium mb-1">Started From<span className="text-red-500 ml-1">*</span></label>
                    <input
                        type="date"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2 text-gray-500"
                    />
                </div>

                {/* Submit button */}
                <div>
                    <button
                        className="bg-[#001F3F] text-white my-8 md:mt-12 py-2 mx-auto px-10 rounded-md hover:bg-[#001A33] focus:outline-none focus:ring-4 focus:ring-[#001F3F] flex items-center justify-center"
                        onClick={handleSubmit}
                    >
                        Submit Your Details
                        <FaArrowRightLong className="ml-2" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProfileDetails;
