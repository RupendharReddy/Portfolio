import React, { useEffect } from 'react';
import '../styles/dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitorStats } from '../store/actions/visitorActions';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
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
  Filler,
  ArcElement,
} from 'chart.js';;
import { Button } from 'antd';
// import { Navigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { fetchMessages } from '../store/actions/contactActions';
import { useNavigate } from 'react-router-dom';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

  
// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { stats, status, error } = useSelector((state) => state.visitor);
  const { messages } = useSelector((state) => state.contact);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchVisitorStats());
    dispatch(fetchMessages()); // 👈 Fetch messages here too
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

  
  // Pie chart data for visitors who sent messages vs. not
  const messageCount = messages?.length || 0;
  const noMessageCount = stats.total - messageCount;
  console.log(messageCount, noMessageCount);
  const messagePieData = {
    labels: ['Messages sent by visitors', 'Not sent by visitors'],
    datasets: [
      {
        data: [messageCount, noMessageCount],
        backgroundColor: ['#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56'],
      },
    ],
  };


  return (
    <div id='Analytics'>
      <div id='admin-nav'>
        <h2>Admin Dashboard</h2>
        <div id='admin-options'>
          <h3 id='active'>Analytics</h3>
          <Button type="link" onClick={() => {
            navigate('/admin/messages');
          }}>
            <h3>Messages</h3>
          </Button>
        <Button type="primary" icon={<LogoutOutlined />} onClick={() => {
          localStorage.removeItem('token');
          // window.location.reload();
          navigate('/');
        }} ghost style={{marginLeft:"50px"}}>Logout</Button>
        </div>
      </div>
      {/* ..... body ..... */}
      <div className='analytics-body'>
        <div className='visitor-stats'>
          <h2>Visitor Statistics</h2>
          <p>Total Visitors: {stats.total}</p>
        </div>
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
        <div id='donut'>
          <div className="donut-chart">
            <div></div>
            <h3>Message Distribution by Visitors</h3>
            <Doughnut data={messagePieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      padding: 20, // 👈 Increase space between chart and legend
                    },
                  },
                },
              }}
              height={600}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
