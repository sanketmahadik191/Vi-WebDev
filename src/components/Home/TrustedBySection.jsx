import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoMicrosoft } from "react-icons/io5";
import { SiIbm } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

function TrustedBySection() {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-700">
        Trusted By
      </h2>
      <div className="flex justify-center items-center flex-wrap space-x-6 sm:space-x-12 lg:space-x-20">
        <span className="h-16 w-16 flex items-center justify-center text-6xl"><FcGoogle /></span>
        <span className="h-16 w-16 flex items-center justify-center text-6xl"><IoLogoMicrosoft /></span>
        <span className="h-16 w-16 flex items-center justify-center text-6xl"><SiIbm /></span>
        <span className="h-16 w-16 flex items-center justify-center text-6xl"><FaFacebook /></span>
      </div>
    </section>
  );
}

export default TrustedBySection;
