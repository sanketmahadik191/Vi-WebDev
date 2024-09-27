const InternNavBar = () => {
  return (
    <div className="flex items-center justify-center px-2 md:px-6 mt-16 md:mt-6 ">
      {/* Search Bar Container */}
      <div className="flex items-center w-full max-w-md md:max-w-2xl lg:max-w-4xl rounded-full overflow-hidden shadow-md mb-2 border">
        {/* Search Icon */}
        <div className="px-2 md:px-6 flex items-center justify-center">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17.1 10.5a6.6 6.6 0 11-13.2 0 6.6 6.6 0 0113.2 0z"
            ></path>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Enter Course  |  Enter Location"
          className="w-full px-2 py-2 text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none placeholder:text-center  placeholder:text-xs md:placeholder:text-lg"
        />

        <button className="bg-black text-white px-4 md:px-8 lg:px-10 font-semibold text-sm md:text-base lg:text-lg py-2 rounded-r-full focus:outline-none">
          Search
        </button>
      </div>
    </div>
  );
};

export default InternNavBar;
