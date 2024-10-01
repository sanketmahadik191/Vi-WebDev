import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Recommended = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const internships = [
        {
            id: 1,
            title: 'UI/UX Designer',
            salary: '₹10,000 - ₹15,000',
            location: 'Mumbai',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Web Developer',
            salary: '₹12,000 - ₹18,000',
            location: 'Bangalore',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Data Analyst',
            salary: '₹15,000 - ₹20,000',
            location: 'Delhi',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Content Writer',
            salary: '₹8,000 - ₹12,000',
            location: 'Kolkata',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            title: 'Software Tester',
            salary: '₹10,000 - ₹15,000',
            location: 'Chennai',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            title: 'Graphic Designer',
            salary: '₹9,000 - ₹14,000',
            location: 'Pune',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            title: 'Digital Marketer',
            salary: '₹10,000 - ₹15,000',
            location: 'Hyderabad',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 8,
            title: 'SEO Specialist',
            salary: '₹12,000 - ₹18,000',
            location: 'Ahmedabad',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 9,
            title: 'Product Manager',
            salary: '₹15,000 - ₹20,000',
            location: 'Noida',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 10,
            title: 'Mobile App Developer',
            salary: '₹12,000 - ₹18,000',
            location: 'Gurgaon',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 11,
            title: 'Frontend Developer',
            salary: '₹10,000 - ₹15,000',
            location: 'Kochi',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 12,
            title: 'Backend Developer',
            salary: '₹12,000 - ₹18,000',
            location: 'Jaipur',
            type: 'Paid',
            image: 'https://via.placeholder.com/150',
        },
    ];
    // Slick settings for the carousel
    const groupedInternships = [];
    for (let i = 0; i < internships.length; i += 6) {
        groupedInternships.push(internships.slice(i, i + 6));
    }

    const totalSlides = groupedInternships.length;

    const settings = {
        dots: false,
        infinite: false, // Set to false to control the next/prev buttons
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <div className="bg-slate-100 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Recommended Internships for You</h2>
                <button className="bg-white text-sky-500 font-semibold py-2 px-4 rounded hover:bg-sky-200">
                    View All
                </button>
            </div>
            {/* Carousel container */}
            <div className="max-w-6xl mx-auto">
                <Slider {...settings}>
                    {groupedInternships.map((group, groupIndex) => (
                       
                        <div className="container mx-auto p-4"  key={groupIndex}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.map((internship) => (
                                    <div key={internship.id} className="bg-white shadow-md rounded-lg p-4 w-72 h-72 flex flex-col items-center">
                                        <img
                                            src={`https://via.placeholder.com/50`}
                                            alt={internship.title}
                                            className="w-full h-16 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-lg font-semibold mb-2">{internship.title}</h3>
                                        <p className="text-gray-700 mb-2">Salary: {internship.salary}</p>
                                        <p className="text-gray-700 mb-2">Location: {internship.location}</p>
                                        <p className="text-gray-700 mb-4">Type: {internship.type}</p>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Recommended;
