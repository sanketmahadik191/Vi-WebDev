import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/Vorkinsta logo.png'; // Assuming you use this later
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#134074] text-white h-[13vh] px-6 md:px-20 flex justify-between items-center">
      {/* Brand */}
      <div className="flex items-center">
        <h1 className="text-2xl md:text-3xl font-bold">V O R K I N S T A</h1>
        <h6 className="hidden md:block text-sm md:text-base text-gray-300 ml-2">
          WE BUILD ENTREPRENEURS
        </h6>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
      </div>

      {/* Menu Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center md:items-center w-full md:w-auto bg-[#134074] md:bg-transparent absolute md:static top-16 left-0 md:top-0 z-10 md:z-auto transition-all duration-300 ease-in-out md:space-x-10 text-lg md:text-lg`}
      >
        <li className="my-2 md:my-0">
          <Link to="/" className="text-white hover:text-gray-200 border-b-2 md:border-none text-2xl font-bold">
            HOME
          </Link>
        </li>
        <li className="my-2 md:my-0">
          <Link to="/about" className="text-white hover:text-gray-200">
            About Us
          </Link>
        </li>
        <li className="my-2 md:my-0">
          <Link to="/faq" className="text-white hover:text-gray-200">
            FAQ
          </Link>
        </li>
      </ul>

      {/* Login/SignUp Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/login">
          <button className="bg-white text-blue-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-white text-blue-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
