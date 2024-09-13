import React from 'react'
import img from '../../assets/AboutUs.png'

function AboutUs() {
  return (
      <div className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">Know More About Us</h3>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <img
            src={img}
            alt="Know More Video"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-600 p-4 rounded-full text-white">
              &#9654; {/* Play icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
