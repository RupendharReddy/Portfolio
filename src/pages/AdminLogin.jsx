import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import verifyToken from '../utils/verifyToken';
import '../styles/login.css';
import { Button ,notification, Space } from 'antd';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [api, contextHolder] = notification.useNotification();
  const openNotification = pauseOnHover => () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      showProgress: true,
      pauseOnHover,
    });
  }

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await verifyToken();
      if (isValid) navigate('/admin/dashboard');
    };
    checkToken();
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div id='login-page'>
      {contextHolder}
      <div className="container">
        <div className='first-div'>
          <p>Please login to continue</p>
        </div>
        <div className='second-div'>
          <h2>Admin Login</h2>
          {contextHolder}
          <Space>
            {error && openNotification(true) }
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </Space>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="primary" htmlType="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
