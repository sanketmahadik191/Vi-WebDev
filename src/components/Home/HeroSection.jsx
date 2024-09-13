import React from 'react'
import img from '../../assets/Home-img.jpeg'


function HeroSection() {
  return (
    <section className="flex items-center justify-evenly py-20 text-center">
      <div className='w-[40%]'>
      <p className="text-4xl mb-8 ">
        Now, You Are In The Hands Of </p>
        <h1 className="text-[#134074] text-[4rem]  mb-4 font-extrabold">My VORKINSTA</h1>
      
      <p className="text-4xl mb-10  font-bold">
        Crafts The Future Of Work With Enduring Excellence
      </p>
      <div className="flex  mb-10">
          <input type="text" className="border-2 py-4 px-52 rounded-l-full rounded-r-none w-64 bg-gray-100"/>
          <button className="bg-black text-xl text-white px-12 py-4 rounded-r-full rounded-l-none">Search</button>
        </div>
      <div className="flex justify-center space-x-4 mb-10 text-3xl font-semibold">
        <button className="px-12 py-5 bg-[#134074] border-[#134074] rounded-full text-white  ">
          Join Now
        </button>
        <button className="px-8 py-5 border border-[#134074] rounded-full text-[#134074]">
          Contact Us
        </button>
      </div>
      </div>
      <div className="w-[40%]">
        <img src={img} alt='images' className='rounded-lg'></img>
      </div>
    </section>
  )
}

export default HeroSection
