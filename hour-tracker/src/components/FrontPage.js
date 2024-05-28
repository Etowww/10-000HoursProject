import React from 'react';
import Chart from './Chart';

const FrontPage = () => {
    const data = {
        labels: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5'],
        datasets: [
            {
                label: 'Hours Logged',
                data: [10, 20, 15, 25, 30], // Sample data for hours logged
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1, // Add border width for bars
            },
        ],
    };

    return (
        <div>
            <h1>10,000 Hour Project</h1>
            {/* Add Chart component here */}
            <Chart data={data} />
            {/* Add buttons to add activity and log hours */}
        </div>
    );
};

export default FrontPage;

