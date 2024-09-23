import React from 'react'
import img from '../../assets/InternImg.png'

const InternForm = ({ selectedTask }) => {
    return (
        <>
            {(selectedTask) ?
                (<div className=" bg-white border shadow-xl rounded-lg p-6 px-8 max-w-full mx-auto mb-6 mr-8">

                    {/* <div className='flex justify-between'> */}
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                        {/* Image */}
                        <div className="w-24 h-24 mb-2 md:mb-0 flex justify-center items-center">

                            <img
                                src={img} // 
                                alt="Course"
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                        <div className='w-4/6 '>
                            {/* Title */}
                            <h3 className=" text-2xl font-bold text-gray-900">{selectedTask.title}</h3>
                            <p className="text-gray-600 font-semibold text-lg mt-1">Genex</p>
                        </div>
                        <div className='flex md:flex-col gap-2 w-2/12 mt-2 md:m-0'>
                            <button className="bg-[#001f3f] text-white px-4 py-2 md:-2 rounded-md shadow-md hover:bg-[#001a35] transition-colors md:w-5/6">
                                Apply
                            </button>
                            <button className="bg-white text-gray-700 md:w-5/6  px-4 py-2 md:-2 rounded-md border border-gray-300 shadow-md hover:bg-gray-100 transition-colors">
                                Save
                            </button>
                        </div>
                    </div>

                    <hr className="border-t-2 border-gray-300 my-4" />

                    {/* Details */}
                    <div>

                        {/* Price, City, Duration */}

                        <div className="flex flex-wrap  md:justify-between md:items-center mt-2 font-semibold text-sm md:text-base md:px-10">
                            <p className='mx-2 md:m-0'>₹ {selectedTask.price}</p>
                            <p className='mx-2 md:m-0'>• {selectedTask.city}</p>
                            <p className='mx-2 md:m-0'>• {selectedTask.duration}</p>
                            <p className='mx-2 md:m-0'>• Intermediate Join </p>
                        </div>
                        <hr className="border-t-2 border-gray-300 my-4" />
                        {/* Skills */}
                        <div className="flex flex-wrap mt-2 px-10">
                            <p className="font-bold text-lg mb-2 w-full">Skills</p>
                            {selectedTask.skills && selectedTask.skills.map((skill, index) => (
                                <div key={index} className="bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-md m-2 p">
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <hr className="border-t-2 border-gray-300 my-4 " />
                        {/* Overview */}
                        <div className='px-10'>

                            <p className="font-bold text-lg mb-2 w-full">Overview</p>
                            <p className="text-gray-600 text-sm my-2 line-clamp-3 px-2">
                                {selectedTask.overview}
                            </p>
                        </div>

                        {/* Requirements */}
                        <div className="px-10 mt-8">
                            <p className="font-bold text-lg mb-2 w-full">Requirements</p>

                            <ul className="list-disc list-inside px-2">
                                {selectedTask.requirement && selectedTask.requirement.map((req, index) => (
                                    <li className='text-gray-600 text-sm' key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Responsibilities */}
                        <div className="px-10 mt-8">
                            <p className="font-bold text-lg mb-2 w-full">Responsibilities</p>

                            <ul className="list-disc list-inside px-2">
                                {selectedTask.responsibilities && selectedTask.responsibilities.map((resp, index) => (
                                    <li className='text-gray-600 text-sm' key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="flex justify-center mt-8 mb-2">

                            <button className="bg-[#001f3f] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#001a35] transition-colors ">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>)
                : (<p className="text-center text-lg font-semibold text-red-500">
                    No Course selected!
                </p>)}
        </>
    )
}

export default InternForm