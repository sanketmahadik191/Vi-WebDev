import { FiDollarSign, FiMapPin, FiBookmark } from 'react-icons/fi';
import img from "../../assets/InternImg.png"

const JobCard = ({ title, salary, location, type }) => {
  return (
    <>


      {/* bottom div */}
      <div className='w-full  p-6 flex justify-between items-center'>
        <div className='flex  w-1/3'>
          <div className='flex justify-center items-center mx-2'>
            <img
              className="w-12 h-12  object-cover rounded-md"
              src={img} alt="img" />
          </div>
          <div className='mx-4'>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">Genex</p>
          </div>

        </div>
        {/* doller */}
        <div className='flex items-center  w-1/4'>
          <div >
            <FiDollarSign className="text-orange-600 bg-gray-100 p-2 rounded text-3xl font-bold w-9 h-9
         flex items-center justify-center mx-4" />

          </div>

          <div className=' w-2/3'>
            <p className='font-semibold'>{salary}</p>
            <span className='text-gray-500 text-sm'>{type}</span>
          </div>
        </div>


        {/* location */}
        <div className='flex items-center  w-1/5'>
          <div>
            <FiMapPin className="text-blue-600 bg-gray-100 p-2 rounded text-3xl font-bold w-9 h-9 
         flex items-center justify-center mx-4" />
          </div>
          <div>
            <p className='font-semibold'>{location}</p>
            <span className='text-gray-500 text-sm'>Location</span>
          </div>
        </div>

        <div className='flex gap-8 px-4'>
          <div >
            <button className="bg-white font-semibold border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-200 transition">
              Apply Now
            </button>
          </div>
          <div className='flex items-center'>
            <button className="bg-white text-black border border-gray-300 rounded-lg p-2 hover:bg-gray-200 transition flex items-center">
              <FiBookmark className="text-xl" />
            </button>
          </div>
        </div>

      </div>
      <hr className="border-t-2 border-gray-300 my-2" />
    </>
  );
};

export default JobCard;
