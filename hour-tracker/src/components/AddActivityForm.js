import React, { useState } from 'react';

const AddActivityForm = () => {
  const [activityName, setActivityName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
    console.log('Activity Name:', activityName);
    console.log('Description:', description);
    // Reset form fields
    setActivityName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Activity Name:</label>
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
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
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivityForm;
