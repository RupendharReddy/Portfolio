import axios from 'axios';

const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const res = await axios.get('https://portfolio-backend-gmwu.onrender.com/api/auth/verify', {
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
