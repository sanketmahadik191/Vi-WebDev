import React from 'react'
import logo from'../assets/Vorkinsta logo.png'
import { HiMenu } from "react-icons/hi";


function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#0D3451] text-white h-[13vh]" >
      <div className="ml-12 lg:ml-20">
        <img src={logo} alt="Vorkinsta logo" className='w-[10rem] lg:w-[15rem]'></img>
      </div>
      <div>
      <HiMenu className='md:hidden mr-12 text-3xl'/>
      </div>
      <div className="md:flex mr-12 lg:mr-20 text-xl font-normal hidden">
        <ul className="flex gap-6 lg:gap-12">
          <li><a >Home</a></li>
          <li><a >About Us</a></li>
          <li><a >FAQ</a></li>
        </ul>
        <button className="ml-5 lg:ml-10  bg-white font-medium text-[#0D3451] px-2 lg:px-4  rounded-lg" >Login</button>
        <button className="ml-5 lg:ml-10 bg-white font-medium text-[#0D3451] px-2 lg:px-4  rounded-lg">Sign Up</button>
      </div>
    </nav>

  )
}

export default Navbar;
