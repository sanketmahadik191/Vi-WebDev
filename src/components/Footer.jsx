import React from 'react';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import instaLogo from '../assets/instagram-logo.png';
import gmailLogo from '../assets/gmail-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Vorkinsta</h2>
          <p className="text-md text-gray-600 max-w-md">
            Vorkinsta lets any client connect with any consultant and collaborate independently on their own terms. 
            We aim to increase collaboration in IT for a high-tech world, giving every member of our platform, big or small, 
            the opportunity to realize their dreams of becoming an entrepreneur.
          </p>
          <p className="text-sm text-gray-600 mt-4 max-w-md">
            We strictly advise using your own discretion when sharing confidential information such as name, phone, address, ID, 
            photo, or any other information.
          </p>
          {/* Social Media Icons */}
          <div className="mt-8 flex lg:justify-start justify-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-blue-900 hover:text-blue-700">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src={instaLogo} alt="Instagram logo" className="w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Gmail" className="hover:opacity-80">
              <img src={gmailLogo} alt="Gmail logo" className="w-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <nav className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Vorkinsta License</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</a></li>
          </ul>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center">
        <p className="text-sm ">&copy; Vorkinsta.Com, 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

