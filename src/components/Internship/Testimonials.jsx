import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Harpreet',
      role: 'Client',
      text: "Partnering with Genex has transformed our operations with their AI-driven solutions, boosting efficiency and productivity. Their knowledgeable team is responsive and innovative. Highly recommend Genex for AI integration. Their commitment to excellence.",
      rating: 5,
      img: 'https://via.placeholder.com/50', // Replace with actual image source
    },
    {
      name: 'Priya',
      role: 'Client',
      text: "Genex's AI technology has revolutionized our data management, providing invaluable insights for informed decision-making. The team delivers customized solutions with exceptional support. Working with them has been rewarding.",
      rating: 4,
      img: 'https://via.placeholder.com/50', // Replace with actual image source
    },
    {
      name: 'Rahul',
      role: 'Client',
      text: "Impressed with Genex's AI solutions, which have optimized our processes and delivered remarkable results. The team's expertise and innovative approach have significantly impacted our business. A valuable partnership indeed.",
      rating: 5,
      img: 'https://via.placeholder.com/50', // Replace with actual image source
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">TESTIMONIALS</h2>
        <p className="text-gray-600 mb-8">
          Don't just take our word for it - see what actual users of our service have to say about their experience.
        </p>

        <div className="flex flex-wrap justify-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm mb-4 flex-1"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-center mb-4">
                {/* Display the rating */}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-gray-300"></i>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
