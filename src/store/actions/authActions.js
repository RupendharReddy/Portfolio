import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });

    // const response = await axios.post('http://localhost:5000/api/auth/login', {
    const response = await axios.post('https://portfolio-backend-gmwu.onrender.com/api/auth/login', {
      email,
      password,
    });

    const { token, name, email: userEmail } = response.data;

    window.localStorage.setItem('token', token);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { token, name, email: userEmail },
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response?.data?.message || 'Login failed',
    });
  }
};
