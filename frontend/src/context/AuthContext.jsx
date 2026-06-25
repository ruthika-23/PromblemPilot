import { useState, useEffect } from "react";
import { AuthContext } from "./authContext.js";
import axios from 'axios';



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {

 if(token){
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 }

 const timer = setTimeout(()=>{
   setLoading(false);
 },0);


 return () => clearTimeout(timer);


},[token]);

  const login = async (email, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    const { token: newToken, ...userData } = res.data;
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
    return res.data;
  };

  const register = async (username, email, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    const { token: newToken, ...userData } = res.data;
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(
      "http://localhost:5000/api/auth/profile",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

    setUser(res.data);

  } catch (error) {
    console.log("Profile update error", error);
    throw error;
  }
};
useEffect(() => {

  const getUser = async () => {

    if(token){

      try {

        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        );

        setUser(res.data);

      } catch(error){

        console.log(error);

        logout();

      }

    }

    setLoading(false);

  };

  getUser();

}, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};