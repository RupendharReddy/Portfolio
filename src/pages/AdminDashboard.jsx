import React, { useEffect } from 'react';
import '../styles/dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitorStats } from '../store/actions/visitorActions';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
import MessagePage from './MessagePage';
import Navbar from '../components/Navbar';
import MessagePage2 from './MessagePage2';
import { Button } from 'antd';
import { Navigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler 
  );
  
// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { stats, status, error } = useSelector((state) => state.visitor);

  useEffect(() => {
    dispatch(fetchVisitorStats());
  }, [dispatch]);

  // For testing: use static data if API data isn't available
  if (!stats || !stats.dayWise || !stats.totalVisitorsOverTime) {
    return <p>No visitor data available.</p>;
  }

  if (status === 'loading') return <p>Loading visitor stats...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const dayWiseData = {
    labels: stats.dayWise.map((item) => item.date),
    datasets: [
      {
        label: 'Visitors Per Day',
        data: stats.dayWise.map((item) => item.visitors),
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const totalVisitorData = {
    labels: stats.totalVisitorsOverTime.map((item) => item.date),
    datasets: [
      {
        label: 'Total Visitors Over Time',
        data: stats.totalVisitorsOverTime.map((item) => item.visitors),
        backgroundColor: '#66BB6A',
        borderColor: '#43A047',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id='Analytics'>
      <div id='admin-nav'>
        <h2>Admin Dashboard</h2>
        <div id='admin-options'>
          <h3 id='active'>Analytics</h3>
          <a href="/admin/messages"><h3>Messages</h3></a>
        <Button type="primary" icon={<LogoutOutlined />} onClick={() => {
          localStorage.removeItem('token');
          window.location.reload();
        }} ghost style={{marginLeft:"50px"}}>Logout</Button>
        </div>
      </div>
        <h2>Visitor Statistics</h2>
        <p>Total Visitors: {stats.total}</p>
        <div id='dashboard-charts'>
          <div className="chart-container">
            <h3>Visitors Per Day</h3>
            <Line data={dayWiseData} options={{ responsive: true }} />
          </div>
          <div className="chart-container">
            <h3>Total Visitors Over Time</h3>
            <Bar data={totalVisitorData} options={{ responsive: true }} />
          </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
