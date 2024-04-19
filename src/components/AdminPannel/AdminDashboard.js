import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend, Rectangle } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { BarChart as BarChartJS } from '@mui/x-charts/BarChart';
import mockAdminData from './mockData';

const valueFormatter = (value) => `${value} Lakhs`;

const AdminDashboard = () => {
  const { simpleBarData, data, getFillColor, horiChartSettings, horiChartData } = mockAdminData;

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {/* Pie Chart */}
        <div style={{ flex: 1, marginRight: '10px', textAlign: 'center' }}>
          <h1 style={{ color: 'green' }}>VJTI Placement Status</h1>
          <h3>No. of Students placed Data</h3>
          <PieChart width={800} height={400} style={{ margin: 'auto' }}>
            <Tooltip />
            <Pie
              data={data}
              dataKey="students"
              outerRadius={150}
              innerRadius={70}
              fill="#8884d8" 
              label={({ name, students }) =>
                `${name}: ${students}`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getFillColor(index)} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Horizontal Chart */}
        <div style={{ flex: 1, marginLeft: '10px', textAlign: 'center' }}>
          <BarChartJS
            dataset={horiChartData}
            yAxis={[{ scaleType: 'band', dataKey: 'company' }]}
            series={[{ dataKey: 'package', label: 'Package', valueFormatter }]}
            layout="horizontal"
            {...horiChartSettings}    
          />
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ textAlign: "center", margin: "auto 10%" }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={simpleBarData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="placed" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="unplaced" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;
