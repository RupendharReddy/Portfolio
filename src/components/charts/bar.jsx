import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './chart.css';
import barchart from '../../assets/barchart.png'
// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#5B0080', '#EE82EE','lightgreen'];
// Red (FF0000), Orange (FFA500), Yellow (FFFF00), Green (008000), Blue (0000FF), Indigo (4B0082), and Violet (EE82EE)
const data = [
  {
    name: 'sem 1',
    uv: 7.34,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'sem 2',
    uv: 7.88,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'sem 3',
    uv: 7.92,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'sem 4',
    uv: 7.61,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'sem 5',
    uv: 8.19,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'sem 6',
    uv: 7.21,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'sem 7',
    uv: 7.8,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'sem 8',
    uv: 9,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarChartComponent() {
  return (
    <React.Fragment>

        <h3 style={{color: '#fff'}}>B.E Semister wise GPA</h3>
    <div style={{}} className='Barchart' >
        {/* <ResponsiveContainer width="80%" height={400}></ResponsiveContainer> */}
        <BarChart
        width={600}
        height={300}
        data={data}
        //   margin={{
        //     top: 20,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        
        >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
        </Bar>
        </BarChart>
    </div>
    <div className='barimg'>
        <img src={barchart} alt="bar" style={{width: '95%',height: '200px'}}/>
    </div>
    </React.Fragment>
  );
}