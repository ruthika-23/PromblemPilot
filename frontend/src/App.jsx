import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';
import AddProblem from './pages/AddProblem';
import EditProblem from './pages/EditProblem';
import Profile from './pages/Profile';
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/problems" element={<PrivateRoute><Problems /></PrivateRoute>} />
            <Route path="/add-problem" element={<PrivateRoute><AddProblem /></PrivateRoute>} />
            <Route path="/edit-problem/:id" element={<PrivateRoute><EditProblem /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route 
 path="/notes" 
 element={<Notes />}
/>
<Route
  path="/edit-note/:id"
  element={
    <PrivateRoute>
      <EditNote />
    </PrivateRoute>
  }
/>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;