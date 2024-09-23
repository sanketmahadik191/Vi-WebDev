import React, { useState } from 'react'
import img from '../../assets/InternImg.png'
const Card = ({ currentTasks, handleClickTask }) => {

    const [tabsIdx, settabsIdx] = useState(null)

    const handleCardClick = (task, idx) => {
        handleClickTask(task)
        settabsIdx(idx)
    };
    return (
        <>
            {currentTasks.map((task, idx) => (
                <div
                    onClick={() => handleCardClick(task, idx)}
                    className={`relative bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto mb-6 cursor-pointer transition-all duration-200 
      ${tabsIdx === idx ? "ring-2 ring-blue-500" : "ring-1 ring-gray-300"} 
      sm:max-w-full lg:max-w-sm`}
                >
                    {/* Top row: Image, Title, Post Time */}
                    <div className="flex flex-col sm:flex-row justify-between items-start  mb-4">
                        {/* Image on the left */}
                        <div className="mb-2 sm:mb-0">
                            <img
                                src={img}
                                alt="Course"
                                className="w-12 h-12  object-cover rounded-md"
                            />
                        </div>

                        {/* Title in the center */}
                        <div className="flex-1 sm:pl-4 w-full sm:w-auto">

                            {/* <h3 className="text-lg sm:text-xl font-bold text-gray-900">{task.title} </h3> */}

                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                {task.title.split(" ").slice(0, 2).join(" ")}
                            </h3>

                            {/* Genex name directly below the title */}
                            <p className="text-gray-600 text-sm sm:text-base">Genex</p>
                        </div>

                        {/* Post Time on the right */}
                        <div className="text-orange-500 text-xs sm:text-sm font-semibold sm:absolute sm:right-4">
                            {task.postTime}
                        </div>
                    </div>

                    {/* Second row: Price, City, Duration */}
                    <div className="flex justify-between items-center mb-4 px-2 pr-6">
                        <p className="text-gray-700 text-sm sm:text-base">₹ {task.price}</p>
                        <p className="text-gray-700 text-sm sm:text-base">• {task.city}</p>
                        <p className="text-gray-700 text-sm sm:text-base">• {task.duration}</p>
                    </div>

                    {/* Overview with line clamping */}
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-3 px-2 ">
                        {task.overview}
                    </p>
                </div>
            ))}


        </>
    )
}

export default Card