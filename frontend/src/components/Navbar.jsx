import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <Link to="/" className="text-2xl font-bold tracking-tight">ProblemPilot</Link>
        </div>

        <div className="flex items-center space-x-8">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
              <Link to="/problems" className="hover:text-blue-400 transition-colors">Problems</Link>
              <Link to="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
              <Link
  to="/notes"
  className="hover:text-blue-400 transition-colors"
>
  Notes
</Link>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
              <Link 
                to="/signup" 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;