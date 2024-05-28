import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ data }) => {
    return (
        <div>
            <h2>Hours Logged</h2>
            <Bar
                data={data}
                options={{
                    indexAxis: 'x', // Display bars along the x-axis
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Activity',
                            },
                        },
                        y: {
                            beginAtZero: true, // Start y-axis at 0
                            title: {
                                display: true,
                                text: 'Hours Logged',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Chart;

