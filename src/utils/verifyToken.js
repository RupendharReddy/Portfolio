import axios from 'axios';
const API_URL = import.meta.env.VITE_BASE_URL;
// const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
// const API_URL = "http://localhost:5000";
const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const res = await axios.get(API_URL +'/api/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.status === 'success';
  } catch (err) {
    localStorage.removeItem('token'); // Remove invalid token
    console.log('Invalid token',err);
    return false;
  }
};

export default verifyToken;
