const Suggestions = () => {
    return (
      <div className="bg-gray-100 p-4 flex space-x-2">
        {['UI Designer', 'UX Designer', 'Graphic Designer', 'Frontend', 'Developer', 'Animator'].map((suggestion, index) => (
          <button key={index} className="bg-white p-2 rounded shadow">{suggestion}</button>
        ))}
      </div>
    );
  };
  
  export default Suggestions;
  