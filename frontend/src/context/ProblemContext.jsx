// ProblemContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import { fetchProblems, createProblem, updateProblem, deleteProblem } from '../services/problemApi';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const ProblemContext = createContext();
export const ProblemProvider = ({ children }) => {
  const { user } = useAuth();
  const [problems, setProblems] = useState([]);

  const loadProblems = async () => {
    if (!user) return;
    try { setProblems((await fetchProblems()).data); } catch (error) { toast.error('Failed to load problems'); }
  };

  useEffect(() => { loadProblems(); }, [user]);

  const addProblem = async (problemData) => {
    try {
      const res = await createProblem(problemData);
      setProblems([res.data, ...problems]);
      toast.success('Problem added successfully!');
      return true;
    } catch (error) { toast.error('Failed to add problem'); return false; }
  };

  const editProblem = async (id, problemData) => {
    try {
      const res = await updateProblem(id, problemData);
      setProblems(problems.map(p => p._id === id ? res.data : p));
      toast.success('Problem updated!');
      return true;
    } catch (error) { toast.error('Failed to update problem'); return false; }
  };

  const removeProblem = async (id) => {
    try {
      await deleteProblem(id);
      setProblems(problems.filter(p => p._id !== id));
      toast.success('Problem deleted!');
    } catch (error) { toast.error('Failed to delete problem'); }
  };

  return <ProblemContext.Provider value={{ problems, loadProblems, addProblem, editProblem, removeProblem }}>{children}</ProblemContext.Provider>;
};
export const useProblems = () => useContext(ProblemContext);