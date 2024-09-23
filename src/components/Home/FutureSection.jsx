import React from 'react';
import { Link } from 'react-router-dom';

function FutureSection() {

  return (
    <section className="py-20 md:py-32 px-10 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">Shaping The Future With Visionary Solutions</h2>
        <p className="text-sm sm:text-lg md:text-2xl font-semibold text-gray-600 my-7">
          Vorkinsta empowers clients to connect with consultants and collaborate on their own terms.
          Our mission is to foster increased collaboration in IT, tailored for a high-tech world.
          We strive to provide every platfrom member, whether big or small, with the opportunity to achieve their entrepreneurial dreams and realize their goals.
        </p>
        <Link to='/about'>
        <button className='button text-xl'>
          About Us
        </button>
        </Link>
      </div>
    </section>
  )
}

export default FutureSection
