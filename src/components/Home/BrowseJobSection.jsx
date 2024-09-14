import React from 'react';

const CategoryCard = ({ number, title, icon }) => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-2 sm:p-8 m-6 w-36 h-36 sm:w-64 sm:h-64 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 border-l-8 border-gray-600">
            {/* Background Number */}
            <div className="absolute top-2 left-2 text-gray-200 text-6xl font-extrabold opacity-10">
                {number}
            </div>

            {/* Icon */}
            <div className="text-blue-600 text-4xl sm:text-7xl mb-6 z-10">
                {icon}
            </div>

            {/* Title */}
            <div className="text-gray-900 text-xl sm:text-2xl font-semibold z-10 text-center">
                {title}
            </div>
        </div>
    );
}

function BrowseJobSection() {
    const categories = [
        { number: '01', title: 'Business', icon: '💼' },
        { number: '02', title: 'Software Development', icon: '💻' },
        { number: '03', title: 'Finance', icon: '💵' },
        { number: '04', title: 'Design', icon: '🎨' }
    ];

    return (
        <>
        <div className="text-center m-auto py-8 ">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 my-6">
                Browse Jobs by Category
            </h2>
            <p className="text:xl sm:text-xl text-gray-500 mb-6">
                Looking for Work? <span className="text-blue-600 font-semibold">Browse Jobs</span>
            </p>
        </div>

        <div className="flex justify-center items-center flex-wrap px-2 sm:px-8 md:mb-16">
            {categories.map((cat) => (
                <CategoryCard key={cat.number} {...cat} />
            ))}
        </div>
        </>
    );
}

export default BrowseJobSection;
