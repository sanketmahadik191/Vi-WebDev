import React from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";

const categories = [
    {
        id: 1,
        name: 'Business',
        icon: <MdBusinessCenter className='text-5xl sm:text-[6rem] text-[#0D3451]' />,
        number: '01',
    },
    {
        id: 2,
        name: 'Software Development',
        icon: <LiaLaptopCodeSolid className='text-5xl sm:text-[6rem] text-[#0D3451]' />,
        number: '02',
        nameClass: 'left-3 sm:left-6',
    },
    {
        id: 3,
        name: 'Finance',
        icon: <FaSackDollar className='text-3xl sm:text-[5rem] text-[#0D3451]' />,
        number: '03',
    },
    {
        id: 4,
        name: 'Design',
        icon: <BsPencilSquare className='text-3xl sm:text-[5rem] text-[#0D3451]' />,
        number: '04',
    },
];

function BrowseJobSection() {
    return (
        <>
            <section className='text-center bg-white m-auto py-8 px-3'>
                <div className="">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 my-6">
                        Browse Jobs by Category
                    </h2>
                    <p className="text:xl sm:text-xl text-gray-500">
                        Looking for Work? <span className="text-blue-600 underline font-semibold">Browse Jobs</span>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center space-y-6 py-8 bg-white">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white shadow-lg rounded-lg p-6 text-center w-32 sm:w-56 xl:w-64 h-28 sm:h-40 mr-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-y-0 left-0 w-[0.3rem] sm:w-2 rounded-full bg-[#0D3451]"></div>
              <div className="flex flex-col">
                <div className='flex justify-evenly items-center text-2xl sm:text-6xl'>
                  {category.icon}
                  <span className="text-gray-300 text-4xl sm:text-7xl font-bold">{category.number}</span>
                </div>
                <h2 className={`absolute left-6 sm:left-12 bottom-6 sm:bottom-4 font-bold text-[#0D3451] text-[10px] sm:text-lg ${category.nameClass}`}>
                  {category.name}
                </h2>
              </div>
              {/* Upside-down triangle */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white "></div>
            </div>
          ))}
        </div>
            </section>
        </>
    );
}

export default BrowseJobSection;







