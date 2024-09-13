import React from 'react'

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Now, You Are In The Hands Of <span className="text-yellow-400">My VORKINSTA</span>
      </h1>
      <p className="text-lg mb-8 text-center">
        Crafts The Future Of Work With Enduring Excellence
      </p>
      <div className="flex space-x-4">
        <button className="px-8 py-3 bg-yellow-500 rounded-full text-gray-900 font-semibold hover:bg-yellow-400">
          Join Now
        </button>
        <button className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-blue-500">
          Contact Us
        </button>
      </div>
    </section>
  )
}

export default HeroSection
