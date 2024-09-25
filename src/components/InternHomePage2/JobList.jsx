import react, { useState } from 'react';
import JobCard from './JobCard';
import { FiFilter } from 'react-icons/fi';
import Pagination from './Pagination';

const JobList = () => {

  const jobs = [
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },

    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },


    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'pune', type: 'Paid' },

    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },

    { title: 'UI Designer', salary: 'Unpaid', location: ' Mumbai ', type: 'Unpaid' },

    // Add more jobs here
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // Get current items for the current page
  const currentItems = jobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <>

      <div className="bg-white  shadow-lg rounded-lg border mt-4 ">
        {/* top div */}
        <div className="flex items-center  p-6 rounded-t-lg justify-between bg-cyan-100 ">
          <div className=' pr-6'>
            <h2 className="text-lg font-bold"> Showing <span> 0 </span> Results</h2>
            <p>According to your preferences</p>
          </div>
          <div className="flex items-center gap-5 ">

            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="paid" className="w-3 h-3" />
              <label htmlFor="paid" className="text-lg text-pink-600 font-semibold">Paid</label>
            </div>

            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="unpaid" className="w-3 h-3" />
              <label htmlFor="unpaid" className="text-lg font-semibold text-pink-600">Unpaid</label>
            </div>

            <div>
              <select className="border border-gray-300 rounded-lg p-2 text-md ml-12">
                <option value="recent">Recent</option>
                <option value="oldest">Oldest</option>
                <option value="most_viewed">Most Viewed</option>
              </select>
            </div>

            <div>
              <FiFilter className="text-gray-600 text-xl cursor-pointer mx-2" />
            </div>

          </div>

        </div>

        {currentItems.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}


      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

    </>
  );
};

export default JobList;