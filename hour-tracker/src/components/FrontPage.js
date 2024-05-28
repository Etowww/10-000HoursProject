import React from 'react';
import Chart from './Chart';

const FrontPage = () => {
  const data = {
    labels: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5'],
    datasets: [
      {
        label: 'Hours Logged',
        data: [10, 20, 15, 25, 30], // Sample data for hours logged
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h1>Hour Tracker</h1>
      <Chart data={data} />
      {/* Add buttons to add activity and log hours */}
    </div>
  );
};

export default FrontPage;
