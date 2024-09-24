const JobCard = ({ title, salary, location, type }) => {
    return (
      <div className="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
        <div>
          <p className="text-green-500">{salary}</p>
          <p>{type}</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Apply Now</button>
      </div>
    );
  };
  
  export default JobCard;
  