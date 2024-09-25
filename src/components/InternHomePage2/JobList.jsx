import { useState } from 'react';
import JobCard from './JobCard';
import { FiFilter } from 'react-icons/fi';

const JobList = () => {
  const jobs = [
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Pune', type: 'Paid' },
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Pune', type: 'Paid' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs to display per page

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get current jobs for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Pagination handler
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg border mt-4">
        {/* top div */}
        <div className="flex items-center p-6 rounded-t-lg justify-between bg-cyan-100">
          <div className="pr-6">
            <h2 className="text-lg font-bold">Showing {currentJobs.length} Results</h2>
            <p>According to your preferences</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="paid" className="w-3 h-3" />
              <label htmlFor="paid" className="text-lg text-pink-600 font-semibold">Paid</label>
            </div>
            <div className="flex items-center gap-2">
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

        {/* Display current jobs */}
        {currentJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}

        {/* Pagination buttons */}
        <div className="flex justify-center py-4">
          <button
            className="mx-2 px-4 py-2 bg-gray-200 rounded-lg"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-lg">Page {currentPage} of {totalPages}</span>
          <button
            className="mx-2 px-4 py-2 bg-gray-200 rounded-lg"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default JobList;
