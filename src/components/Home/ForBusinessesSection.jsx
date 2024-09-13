import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import img from '../../assets/Businesses.png';



function ForBusinessesSection() {

    
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center bg-[rgb(251,251,251)] p-10 border border-gray-200 rounded">
        <span className="tag-text">For Businesses</span>
        <h2 className="text-3xl font-bold text-gray-800 my-4">
          Accomplish your goals with Vorkinsta by your side
        </h2>
        <p className='text-lg my-4 text-gray-500'>
          Fulfill your needs with Comprehensive End-to-End Execution from us
        </p>
        <button className='button my-4'>
          <a href="#" className='flex items-center gap-2'>Start your journey <FaArrowRightLong /> </a>
        </button>
        <img src={img} alt="image" />
      </div>
    </section>
  )
}

export default ForBusinessesSection
