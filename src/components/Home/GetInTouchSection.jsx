import React from 'react';

function GetInTouchSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
    >
      <form className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-4xl bg-opacity-90 backdrop-blur-md border border-gray-200">
        {/* Form Heading */}
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-wide">
          Get In Touch
        </h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-lg">
          {/* First Name */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="First Name"
            />
          </div>
          {/* Last Name */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-lg">
          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              E-mail
            </label>
            <input
              type="email"
              className="p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="E-mail"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-800 mb-2">
            Message
          </label>
          <textarea
            className="p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            rows="6"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-gray-700 text-white font-semibold text-xl px-12 py-4 rounded-lg shadow-lg transition-all duration-300"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchSection;
