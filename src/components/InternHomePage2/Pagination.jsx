import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Page 1 Button */}
      <button
        onClick={() => handlePageChange(1)}
        className={`px-4 py-2 rounded-md shadow-md shadow-gray-600 transition ${currentPage === 1 ? ' bg-[#001f3f] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        1
      </button>
      {/* bg-[#001f3f] text-white px-4 py-2 md:-2 rounded-md shadow-md hover:bg-[#001a35] transition-colors md:w-5/6 */}
      {/* Page 2 Button */}
      {totalPages > 1 && (
        <button
          onClick={() => handlePageChange(2)}
          className={`px-4 py-2 rounded-md shadow-md shadow-gray-600 transition ${currentPage === 2 ? ' bg-[#001f3f] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          2
        </button>
      )}
      {/* Page 2 Button */}
      {totalPages > 1 && (
        <button
          onClick={() => handlePageChange(3)}
          className={`px-4 py-2 rounded-md shadow-md shadow-gray-600 transition ${currentPage === 3 ? ' bg-[#001f3f] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          3
        </button>
      )}

      {/* Next Arrow Button */}
      {currentPage < totalPages && (
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="p-2 shadow-md shadow-gray-600 text-black rounded-md bg-gray-200 hover:bg-gray-300 flex items-center"
        >
          <FiArrowRight className="m-1" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
