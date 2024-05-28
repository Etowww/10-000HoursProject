import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div>
      <h2>Hour Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default Chart;
