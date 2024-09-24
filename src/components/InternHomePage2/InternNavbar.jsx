const InternNavBar = () => {
    return (
      <div className="bg-white shadow p-4 flex justify-between">
        <input type="text" placeholder="Enter Course" className="border p-2 rounded w-1/4" />
        <input type="text" placeholder="Enter Location" className="border p-2 rounded w-1/4 ml-2" />
        <button className="bg-black text-white p-2 rounded">Search</button>
      </div>
    );
  };
  
  export default InternNavBar;
  