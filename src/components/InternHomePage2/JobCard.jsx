import { FiDollarSign, FiMapPin, FiBookmark } from 'react-icons/fi';
import img from "../../assets/InternImg.png";

const JobCard = ({ title, salary, location, type }) => {
  return (
    <>
      {/* Card Container */}
      <div className='w-full py-4 md:py-8 p-2 md:p-6 flex flex-col md:flex-row justify-between items-center border'>
        <div className='flex w-full md:w-1/3 mb-4 md:mb-0 '>
          <div className='flex justify-center items-center mx-0 md:mx-2'>
            <img
              className="w-10 md:w-12 h-10 md:h-12 object-cover rounded-md"
              src={img} alt="img" />
          </div>
          <div className='mx-4  w-8/12 md:w-auto'>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">Genex</p>
          </div>
          <div className='w-1/4 '>
            <button className="bg-white  text-black border border-gray-300 rounded-lg p-2 hover:bg-gray-200 transition flex md:hidden items-center mx-auto">
              <FiBookmark className="text-sm md:text-xl" />
            </button>
          </div>
        </div>

        <div className='w-full md:w-5/12 flex mb-4 md:mb-0 '>
          {/* Salary Section */}
          <div className='flex items-center w-3/5 md:w-1/2  '>
            <FiDollarSign className="text-orange-600 bg-gray-100 p-2 rounded text-3xl font-bold w-8 h-8 md:w-9 md:h-9 flex items-center justify-center mx-4" />
            <div className='w-2/3'>
              <p className='font-semibold text-sm md:text-base'>{salary}</p>
              <span className='text-gray-500 text-xs md:text-sm'>{type}</span>
            </div>
          </div>

          {/* Location Section */}
          <div className='flex items-center w-2/5 md:w-1/2 '>
            <FiMapPin className="text-blue-600 bg-gray-100 p-2 rounded text-3xl font-bold w-8 h-8 md:w-9 md:h-9 flex items-center justify-center mx-4" />
            <div>
              <p className='font-semibold text-sm md:text-base'>{location}</p>
              <span className='text-gray-500 text-xs md:text-sm'>Location</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-8 px-4 w-full md:w-auto'>
          <button className="bg-white font-semibold border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-200 transition text-sm md:text-base">
            Apply Now
          </button>
          <button className="bg-white  text-black border border-gray-300 rounded-lg p-2 hover:bg-gray-200 transition hidden md:flex items-center">
            <FiBookmark className="text-sm md:text-xl" />
          </button>
        </div>

      </div>
      <hr className="border-t-2 border-gray-300" />
    </>
  );
};

export default JobCard;
