import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../index.css';

const Chart = ({ data }) => {
    return (
        <div className='chart-container'>
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

