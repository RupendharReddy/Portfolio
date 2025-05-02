import React from 'react';
import ReactECharts from 'echarts-for-react';
import './chart.css';
import rose from '../../assets/rose.png';
const RoseChart = () => {
  const option = {
    series: [
      {
        type: 'pie',
        data: [
          { value: 9.5, name: 'SSC' },
          { value: 7.19, name: 'HSC' },
          { value: 7.78, name: 'B.E' },
        ],
        roseType: 'area', // Makes it a rose chart
        radius: [20, '80%'], // Inner and outer radius
        label: {
          show: true,
          formatter: '{b}: {c}',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}',
    },
    legend: {
      top: '0%',
      left: 'center',
      textStyle: {
        color: '#fff', // Dark gray (default: #333)
        fontSize: 17,
        // fontWeight: 'bold',
      },
    },
  };

  return (
    <div >
        <h3 style={{color: '#fff'}} id='heading'>Academic Qualifications</h3>
      <ReactECharts option={option} className='chartSize' style={{width: '500px',height: '380px'}}/>
      <img src={rose} alt="chart" className='rose' style={{width: '300px',height: '280px'}}/>
    </div>
  );
};

export default RoseChart;