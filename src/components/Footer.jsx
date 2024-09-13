import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Vorkinsta</h2>
          <p className="text-md text-gray-600 max-w-md">
            Vorkinsta lets any client connect with any consultant and collaborate independently on their own terms. 
            We aim at increased collaboration in IT for a high-tech world. Our objective is to give every member of our 
            platform, big or small, the opportunity to realize their dreams of achieving their goals of becoming an entrepreneur.
          </p>
          <p className="text-sm text-gray-600 mt-4 max-w-md">
            We strictly advise using your own discretion on any confidential information to be shared, such as name, phone, 
            address, ID, photo, or any other information.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Vorkinsta License</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-facebook"></i> {/* Add FontAwesome or any other icon package */}
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-google"></i>
        </a>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">&copy; Vorkinsta.Com, 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
