import React from 'react';
import img from '../../assets/Home-img.jpeg';


function HeroSection() {
  return (

    <section className=" md:flex items-center justify-evenly py-20 text-center">
      <div className='md:w-[40%] text-xl lg:text-2xl xl:text-3xl'>
      <p className=" mb-8 ">
        Now, You Are In The Hands Of </p>
        <h1 className="text-[#0D3451] text-[2rem] lg:text-[3rem] mb-8 font-extrabold">My VORKINSTA</h1>
      
      <p className=" mb-8  font-bold">
        Crafts The Future Of Work With Enduring Excellence
      </p>
      <div className="flex justify-center">
      <div className="flex text-xl mb-10">
          <input type="text"  className="border-2 bg-gray-50 py-3 px-4  rounded-l-full rounded-r-none w-50 lg:w-80 outline-none " placeholder='Search'></input>
          <button className="bg-black text-white px-4 lg:px-12 py-3 rounded-r-full rounded-l-none">Search</button>
        </div>
        </div>
      <div className="flex justify-center items-center space-x-4 mb-10 text-xl lg:text-[1.3rem] lg:font-semibold">
        <button className="px-4 py-3 lg:px-12 lg:py-4 border bg-[#0D3451] border-[#0D3451] rounded-full text-white ">
          Join Now
        </button>
        <button className="px-4 py-3 lg:px-12 lg:py-4 border border-[#0D3451] rounded-full text-[#0D3451]">
          Contact Us
        </button>
      </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-center p-10 md:p-0">
        <img src={img} alt='images' className='rounded-lg'></img>

      </div>
    </section>
  );
}

export default HeroSection;