import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5 leading-tight">
          Welcome to PopX
        </h1>
        
        <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 mb-4"
        >
          Create Account
        </button>
        
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
