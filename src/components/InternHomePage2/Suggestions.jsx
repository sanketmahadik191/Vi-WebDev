
const Suggestions = () => {

  const suggestions = ['UI Designer', 'UX Designer', 'Graphic Designer', 'video Editor', 'Developer', 'Product Designer', 'Frontend Developer', 'Animator']

  return (
    <div className="bg-white p-6 py-8 rounded-xl shadow-lg flex  mt-2"
      style={{ boxShadow: '0 0 10px  rgba(0, 0, 0, 0.25)' }}>
      {/* Left Side: Suggestion Title */}
      <div className="w-1/4 text-center ">
        <span className="text-gray-500 text-xl font-bold">Suggestions</span>
      </div>

      {/* Right Side: List of Suggestions */}
      <div className="flex flex-wrap gap-2 w-3/4 px-16">
        {suggestions && suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="bg-gray-100 p-2 font-semibold px-8 rounded-full  text-black m-1"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>

  );
};

export default Suggestions;
