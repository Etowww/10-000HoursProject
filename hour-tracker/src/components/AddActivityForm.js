import React, { useState } from 'react';

const AddActivityForm = ({ onAddActivity }) => {
    const [activityName, setActivityName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate activityName
        if (!activityName.trim()) {
            alert('Please enter a valid activity name');
            return;
        }
        // Call the onAddActivity function with the new activity name
        onAddActivity(activityName);
        // Reset the form
        setActivityName('');
    };

    return (
        <div>
            <h2>Add New Activity</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={activityName}
                    onChange={(e) => setActivityName(e.target.value)}
                    placeholder="Enter activity name"
                />
                <button type="submit">Add Activity</button>
            </form>
        </div>
    );
};

export default AddActivityForm;

