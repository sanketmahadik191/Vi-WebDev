import React, { useState } from 'react';
import taskData from '../assets/tasks/task.json';

const InternHome = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const handleClickTask = (task) => {
    setSelectedTask(task);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current tasks for pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = taskData.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Task List */}
      <div className="md:w-1/3 w-full bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <ul>
          {currentTasks.map((task) => (
            <li
              key={task.id}
              className="mb-2 p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200"
              onClick={() => handleClickTask(task)}
            >
              <h3 className="text-lg font-medium">{task.name}</h3>
              <p className="text-sm">{task.description}</p>
            </li>
          ))}
        </ul>
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
        {selectedTask ? (
          <div>
            <h2 className="text-2xl font-bold">{selectedTask.name}</h2>
            <p className="mt-4">{selectedTask.description}</p>
          </div>
        ) : (
          <div className="text-gray-500">Select a task to view details</div>
        )}
      </div>
    </div>
  );
};

export default InternHome;
