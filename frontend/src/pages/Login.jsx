import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log(email);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-950 px-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-3xl p-10 border border-gray-800">
          <h2 className="text-4xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-400 mb-8">Log in to continue tracking your progress</p>
          
          {error && <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-xl mb-6">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold text-lg transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;