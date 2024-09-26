import { useState } from 'react';
import img from '../../assets/Profile.webp';
import { IoMdHome, IoMdMenu, IoMdClose } from "react-icons/io";
import { PiSquaresFourFill, PiDownloadFill } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";

const navItems = [
  { icon: <IoMdHome />, label: "Home" },
  { icon: <PiSquaresFourFill />, label: "My Applications" },
  { icon: <PiDownloadFill />, label: "Invites" },
  { icon: <FaRegBookmark />, label: "Saved Opportunities" },
  { icon: <TbMessageDots />, label: "Inbox" },
];

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        className="md:hidden absolute top-2 left-2 p-2 text-gray-600 "
        onClick={toggleSidebar}
        title={isSidebarOpen ? "Close Profile" : "Open Profile"}
      >
        {/* {isSidebarOpen ? <IoMdClose  size={24} /> :  <img src={img} alt="Profile" className="w-8 h-8 border border-slate-400 rounded-full" />} */}
        <img src={img} alt="Profile" className="w-8 h-8 border border-slate-400 rounded-full" />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-100  p-6  min-h-screen w-80 md:w-64 transition-transform duration-300 transform md:translate-x-0 ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'
          } md:relative fixed inset-y-0 left-0 z-20 md:flex md:flex-col`}
      >
        {/* Close button inside the sidebar (for mobile) */}
        <button
          className="md:hidden absolute top-2 right-4  text-gray-600"
          onClick={toggleSidebar}
        >
          <IoMdClose size={24} />
        </button>

        <div className="flex items-center space-x-4">
          <img src={img} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="font-bold text-xl">Sanjay Roy</h2>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
            <a href="#" className="text-blue-500 text-sm">
              Edit profile
            </a>
          </div>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <span className="m-3 block border-b border-gray-300"></span>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 text-gray-600"
                >
                  {item.icon}
                  <span className="font-bold text-gray-600">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Profile;
