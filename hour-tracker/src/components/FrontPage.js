// DBTow

import React, { useState } from 'react';
import Chart from './Chart';
import AddActivityButton from './AddActivityButton';
import LogHoursButton from './LogHoursButton';

const FrontPage = () => {
    const [activities, setActivities] = useState(['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5']);
    const [hoursData, setHoursData] = useState({
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
    });

    const handleAddActivity = (activityName) => {
        // Add the new activity to the activities array
        setActivities([...activities, activityName]);
        // Update the chart data with the new activity
        setHoursData({
            labels: [...hoursData.labels, activityName],
            datasets: hoursData.datasets.map((dataset) => ({
                ...dataset,
                data: [...dataset.data, 0], // Initialize logged hours for the new activity to 0
            })),
        });
    };

    const handleLogHours = ({ activity, hours, description }) => {
        // Find the index of the activity in the activities array
        const activityIndex = activities.indexOf(activity);
        // Create a copy of the datasets array to avoid mutating the state directly
        const updatedDatasets = [...hoursData.datasets];
        // Update the logged hours for the selected activity
        updatedDatasets[0].data[activityIndex] += hours;
        // Update the state with the new datasets array
        setHoursData({
            ...hoursData,
            datasets: updatedDatasets,
        });
        // Optionally, you can store the logged hours and description in your backend database here
        // Reset form fields if needed
    };
    

    return (
        <div>
            <h1>10,000 Hour Project</h1>
            <div className="chart-container">
                <Chart data={hoursData} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <AddActivityButton onAddActivity={handleAddActivity} />
                <LogHoursButton activities={activities} onLogHours={handleLogHours} />
            </div>
        </div>
    );
};

export default FrontPage;


