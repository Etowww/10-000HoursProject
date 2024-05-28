import React, { useState } from 'react';
import AddActivityForm from './AddActivityForm';

const AddActivityButton = ({ onAddActivity }) => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <button onClick={handleToggleForm}>Add New Activity</button>
            {showForm && <div className="form-container"><AddActivityForm onAddActivity={onAddActivity} /></div>}
        </div>
    );
};

export default AddActivityButton;

