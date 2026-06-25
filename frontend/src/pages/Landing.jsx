import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-1.5 rounded-full mb-6">
            <span className="text-emerald-400">🚀</span>
            <span className="text-sm font-medium tracking-widest">MASTER YOUR CODING JOURNEY</span>
          </div>
          <h1 className="text-7xl font-bold tracking-tighter mb-6">
            Track. Revise.<br />Conquer.
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Your personal command center for coding problems across all platforms
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-20">
          <Link
            to="/signup"
            className="px-10 py-4 bg-white text-black font-semibold rounded-2xl text-lg hover:bg-gray-100 transition-all flex items-center gap-3 group"
          >
            Start Tracking Now
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
          <Link
            to="/login"
            className="px-10 py-4 border border-gray-700 font-semibold rounded-2xl text-lg hover:bg-white/5 transition-all"
          >
            Login
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: '📊', title: 'Analytics Dashboard', desc: 'Visual insights into your progress' },
            { icon: '🔄', title: 'Smart Revision', desc: 'Never forget a problem again' },
            { icon: '🔍', title: 'Powerful Search', desc: 'Find problems instantly' }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;