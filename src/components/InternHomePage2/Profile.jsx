
import img from '../../assets/Profile.webp';
import { IoMdHome } from "react-icons/io";
import { PiSquaresFourFill, PiDownloadFill } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";

const navItems = [
  { icon: <IoMdHome />, label: "Home" },
  { icon: <PiSquaresFourFill />, label: "My Applications" },
  { icon: <PiDownloadFill />, label: "Invites"},
  { icon: <FaRegBookmark />, label: "Saved Opportunities"},
  { icon: <TbMessageDots />, label: "Inbox"},
];

const Profile = () => {
  return (
    <aside className="bg-gray-100 p-6 min-h-screen w-64">
      <div className="flex items-center space-x-4">
        <img src={img} alt="Profile" className="w-16 h-16" />
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
                className="flex items-center space-x-3 p-3  text-gray-600">
                {item.icon}
                <span className="font-bold text-gray-600">{item.label}</span>
              </a>
             
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Profile;
