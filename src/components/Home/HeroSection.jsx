import React from 'react';
import img from '../../assets/Home-img.jpeg';

function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly py-20 text-center lg:text-left">
      <div className='lg:w-[40%] w-full mb-8 lg:mb-0'>
        <p className="text-4xl mb-8">Now, You Are In The Hands Of</p>
        <h1 className="text-[#134074] text-[4rem] mb-4 font-extrabold">My VORKINSTA</h1>
        <p className="text-4xl mb-10 font-bold">
          Crafts The Future Of Work With Enduring Excellence
        </p>
        <div className="flex flex-col lg:flex-row justify-center mb-10">
          <input 
            type="text" 
            className="border-2 py-4 px-6 rounded-l-full rounded-r-none bg-gray-100 w-full lg:w-64 mb-4 lg:mb-0 lg:mr-2"
            placeholder="Search..."
          />
          <button className="bg-black text-xl text-white px-8 py-4 rounded-r-full rounded-l-none lg:px-12">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-10 text-3xl font-semibold">
          <button className="px-8 py-4 lg:px-12 lg:py-5 bg-[#134074] border-[#134074] rounded-full text-white">
            Join Now
          </button>
          <button className="px-8 py-4 lg:px-8 lg:py-5 border border-[#134074] rounded-full text-[#134074]">
            Contact Us
          </button>
        </div>
      </div>
      <div className='lg:w-[40%] w-full'>
        <img src={img} alt='Home' className='w-full h-auto rounded-lg object-cover'/>
      </div>
    </section>
  );
}

export default HeroSection;
