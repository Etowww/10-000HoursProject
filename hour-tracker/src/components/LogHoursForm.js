import React, { useState } from 'react';

const LogHoursForm = () => {
  const [activity, setActivity] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
    console.log('Activity:', activity);
    console.log('Hours:', hours);
    console.log('Description:', description);
    // Reset form fields
    setActivity('');
    setHours('');
    setDescription('');
  };

  return (
    <div>
      <h2>Log Hours</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Activity:</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          >
            <option value="">Select an activity</option>
            {/* Add options dynamically based on existing activities */}
          </select>
        </div>
        <div>
          <label>Hours:</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log Hours</button>
      </form>
    </div>
  );
};

export default LogHoursForm;
