// DBTow

import React, { useState } from 'react';

const LogHoursForm = ({ activities, onLogHours }) => {
    const [selectedActivity, setSelectedActivity] = useState('');
    const [hoursLogged, setHoursLogged] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate input fields
        if (!selectedActivity || !hoursLogged.trim()) {
            alert('Please select an activity and enter valid hours');
            return;
        }
        // Call the onLogHours function with the logged hours data
        onLogHours({
            activity: selectedActivity,
            hours: parseFloat(hoursLogged),
            description: description.trim(),
        });
        // Reset the form
        setSelectedActivity('');
        setHoursLogged('');
        setDescription('');
    };

    return (
        <div>
            <h2>Log Hours</h2>
            <form onSubmit={handleSubmit}>
                <select value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
                    <option value="">Select an activity</option>
                    {activities.map((activity) => (
                        <option key={activity} value={activity}>{activity}</option>
                    ))}
                </select>
                <input
                    type="number"
                    value={hoursLogged}
                    onChange={(e) => setHoursLogged(e.target.value)}
                    placeholder="Hours logged"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Log Hours</button>
            </form>
        </div>
    );
};

export default LogHoursForm;
