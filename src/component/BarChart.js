import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />;
      <Line data={chartData} />;
      <Pie data={chartData} />;
    </div>
  );
};

export default BarChart;
