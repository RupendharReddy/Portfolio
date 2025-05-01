import React, { useEffect } from 'react';
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
    // window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTBlNmFlMjcxYzlhMzdmYWMxMjcyMyIsImlhdCI6MTc0NjA3NzM5MCwiZXhwIjoxNzQ2MDgwOTkwfQ.PMmDH9Hs31SIk7oY7R3Tdys36aK1owG87UxOXyH6oYw');
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
    <div>
        <Navbar/>
      <h2>Visitor Statistics</h2>
      <p>Total Visitors: {stats.total}</p>

      <div className="chart-container">
        <h3>Visitors Per Day</h3>
        <Line data={dayWiseData} options={{ responsive: true }} />
      </div>

      <div className="chart-container">
        <h3>Total Visitors Over Time</h3>
        <Bar data={totalVisitorData} options={{ responsive: true }} />
      </div>
      <MessagePage/>
    </div>
  );
};

export default AdminDashboard;
