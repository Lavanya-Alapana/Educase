import { useNavigate } from 'react-router-dom';
import { FiEdit, FiLogOut } from 'react-icons/fi';

const ProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-left w-full">
          Account Settings
        </h1>
        
        <div className="flex mb-6 w-full">
          {/* Left side - Avatar */}
          <div className="relative mr-4">
            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
              MD
            </div>
            <button
              className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              onClick={() => console.log('Edit photo')}
            >
              <FiEdit className="h-4 w-4 text-indigo-600" />
            </button>
          </div>
          
          {/* Right side - User Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-bold text-lg text-gray-800">Michael Davis</h2>
            <p className="text-sm text-gray-600">michael.davis@example.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        {/* Content Section */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        {/* Logout Button */}
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border-2 border-indigo-600 text-indigo-600 font-bold rounded-md hover:bg-indigo-50 transition-colors"
        >
          <FiLogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
