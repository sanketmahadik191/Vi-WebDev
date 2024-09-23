import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import img from '../../assets/Businesses.png';
import { Link } from 'react-router-dom';



function ForBusinessesSection() {

    
  return (
    <section >
      <div className="max-w-5xl mx-auto text-center bg-[rgb(251,251,251)] p-10 border border-gray-200 rounded">
        <span className="tag-text">For Businesses</span>
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 my-4">
          Accomplish your goals with Vorkinsta by your side
        </h2>
        <p className='text-sm sm:text-lg my-4 text-gray-500'>
          Fulfill your needs with Comprehensive End-to-End Execution from us
        </p>
        <Link to='/selection'>
        <button className='button my-4'>
          <span className='flex items-center gap-2'>Start your journey <FaArrowRightLong /> </span>
        </button>
        </Link>
        <img src={img} alt="image" />
      </div>
    </section>
  )
}

export default ForBusinessesSection
