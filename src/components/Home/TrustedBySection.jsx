import React from 'react';
import google from '../../assets/google-home-logo.png';
import microsoft from '../../assets/microsoft-logo.png';
import IBM from '../../assets/ibm-logo.png';



function TrustedBySection() {
  return (
    <section className="pt-5 bg-blue-50 text-center h-3/4">
      <h2 className="text-2xl sm:text-4xl font-bold text-[#0D3451]">
        Trusted By
      </h2>
      <div className="flex justify-center items-center flex-wrap space-x-4 sm:space-x-12 lg:space-x-20">
        <img src={google} alt="google-logo" className="w-14 sm:w-24 lg:w-36"></img>
        <div className='flex justify-center items-center'>
        <img src={microsoft} alt="microsoft-logo" className="w-4 sm:w-6 lg:w-12"></img>
        <span className='pl-1 sm:pl-2 text-lg sm:text-2xl lg:text-4xl text-gray-500 font-bold cursor-default'>Microsoft</span>
        </div>
        <img src={IBM} alt="IBM-logo" className="w-10 sm:w-14 lg:w-28"></img>
        <span className='text-xl sm:text-3xl lg:text-5xl text-blue-600 font-bold cursor-default'>facebook</span>
      </div>
    </section>
  );
}

export default TrustedBySection;
