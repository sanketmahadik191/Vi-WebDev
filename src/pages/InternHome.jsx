import React, { useState } from 'react';
import taskData from '../assets/tasks/task.json';
import Card from '../components/InternHomepage/Card';
import InternForm from '../components/InternHomepage/InternForm';

const InternHome = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const handleClickTask = (task) => {
    setSelectedTask(task);
    console.log(task);

  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current tasks for pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = taskData.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="flex flex-col md:flex-row">

      {/* Left side - Task List */}
      <div className="md:w-1/3 w-full bg-gray-100 p-4 shadow-sm shadow-slate-700">
        <h2 className="text-xl font-semibold mb-12 px-10">Your Matches</h2>

        <Card currentTasks={currentTasks} handleClickTask={handleClickTask} />

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(taskData.length / tasksPerPage) },
            (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>

      {/* Right side - Task Details */}
      <div className="md:w-2/3 w-full p-4">

        <div className="flex items-center justify-center my-4 px-4">

          {/* Search Bar Container */}
          <div className="flex items-center w-full max-w-lg rounded-full overflow-hidden shadow-lg mb-2 border">
            {/* Search Icon */}
            <div className="px-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17.1 10.5a6.6 6.6 0 11-13.2 0 6.6 6.6 0 0113.2 0z"
                ></path>
              </svg>
            </div>


            <input
              type="text"
              placeholder="Enter Course | Enter Location"
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
            />

            <button className="bg-black text-white px-6 py-2 rounded-r-full focus:outline-none">
              Search
            </button>
          </div>
        </div>


        <InternForm selectedTask={selectedTask} />

      </div>
    </div>
  );
};

export default InternHome;
