import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PolarAreaChart = () => {
  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: [9.5, 7.19, 7.78],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <PolarArea data={data} />
    </div>
  );
};

export default PolarAreaChart;