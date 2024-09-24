const Profile = () => {
    return (
      <aside className="bg-gray-100 p-6 min-h-screen w-64">
        <div className="flex items-center space-x-4">
          <img src="profile.jpg" alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="font-bold text-xl">Sanjay Roy</h2>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
            <a href="#" className="text-blue-500 text-sm">Edit profile</a>
          </div>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="py-2"><a href="#" className="font-semibold">Home</a></li>
            <li className="py-2"><a href="#">My Applications</a></li>
            <li className="py-2"><a href="#">Invites</a></li>
            <li className="py-2"><a href="#">Saved Opportunities</a></li>
            <li className="py-2"><a href="#">Inbox</a></li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Profile;
  