import React, { useState } from "react";
import logo from "../assets/Vorkinsta logo.png";
import { HiMenu, HiX } from "react-icons/hi"; // Import the close icon
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-[#0D3451] text-white h-[13vh]">
      <div className="ml-6 lg:ml-20">
        <img
          src={logo}
          alt="Vorkinsta logo"
          className="w-[10rem] lg:w-[15rem]"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden mr-6">
        {isMobileMenuOpen ? (
          <HiX className="text-3xl" onClick={toggleMobileMenu} /> // Close icon
        ) : (
          <HiMenu className="text-3xl" onClick={toggleMobileMenu} />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-[13vh] right-0 w-full bg-[#0D3451] z-10`}
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          <li>
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="mt-4 bg-white font-medium text-[#0D3451] px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/selection">
              <button className="mt-4 bg-white font-medium text-[#0D3451] px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center mr-6 lg:mr-20 text-xl font-normal">
        <ul className="flex gap-6 lg:gap-12">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 border-b-2 md:border-none text-2xl font-bold"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-white hover:text-gray-200">
              FAQ
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="ml-5 lg:ml-10 bg-white font-medium text-[#0D3451] px-4 py-2 rounded-lg">
            Login
          </button>
        </Link>
        <Link to="/selection">
          <button className="ml-5 lg:ml-10 bg-white font-medium text-[#0D3451] px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
