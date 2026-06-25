import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      await register(formData.username, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-950 px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-3xl p-10 border border-gray-800">
          <h2 className="text-4xl font-bold mb-2">Join ProblemPilot</h2>
          <p className="text-gray-400 mb-8">Start your coding mastery journey today</p>
          
          {error && <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-xl mb-6">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold text-lg transition disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;