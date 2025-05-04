import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import verifyToken from '../utils/verifyToken';
import '../styles/login.css';
import admin1 from '../assets/admin1.png';
import admin2 from '../assets/admin2.png';
import { Button, notification, Space } from 'antd';
import { TypeAnimation } from 'react-type-animation';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement = 'topRight') => {
    api.error({
      message: 'Login Failed',
      description: error || 'Invalid admin credentials',
      placement,
    });
  };
  useEffect(() => {
    if (error) {
      openNotification('topRight');
    }
  }, [error]);

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
      <div className="login-container">
        <div className='div1'>
          <div className='image-div'>
            {error?<img src={admin2} alt="image for admin" />:<img src={admin1} alt="image for admin" id='admin1-img'/>}
          </div>
          <div className='typer-div'>
            <TypeAnimation
              key={error ? 'error' : 'no-error'}  // force re-render on condition change
              sequence={[error ? 'Are you really admin? only admin can login' : 'Hi, Admin welcome back', 1200]}
              wrapper="h6"
              cursor={false}
              speed={50}
              className="typed-text"
              style={{ display: 'inline-block' ,fontSize:'30px'}}
              repeat={0}
            />
          </div>
            
        </div>
        <div className='div2'>
          <h1>Admin Login</h1>
          {contextHolder}
          <Space>
            {/* {error && openNotification(true) } */}
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
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
