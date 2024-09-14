import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-0">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800">Know More About Us</h3>
        
      </div>

      {/* Video Section */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Embedded Video */}
          <iframe
            className="w-full h-80 md:h-96 rounded-lg"
            src="https://www.youtube.com/embed/rNSIwjmynYQ"
            title="About Us Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
