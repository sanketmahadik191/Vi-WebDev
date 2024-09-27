const Suggestions = () => {
  const suggestions = ['UI Designer', 'UX Designer', 'Graphic Designer', 'Video Editor', 'Developer', 'Product Designer', 'Frontend Developer', 'Animator'];

  return (
    <div className="bg-white p-4 md:p-6 py-6 md:py-8 rounded-xl shadow-lg flex flex-col md:flex-row mt-2 "
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)' }}>

      {/* Left Side: Suggestion Title */}
      <div className="w-full md:w-1/4 text-center  mb-4 md:mb-0">
        <span className="text-gray-500 text-lg md:text-xl font-bold">Suggestions</span>
      </div>

      {/* Right Side: List of Suggestions */}
      <div className="flex flex-wrap gap-2 w-full md:w-3/4 justify-center md:justify-start">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="bg-gray-100 p-1 text-xs md:text-base font-semibold px-4 md:px-8 rounded-full text-black"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;