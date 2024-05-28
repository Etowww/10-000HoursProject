import React, { useState } from 'react';
import LogHoursForm from './LogHoursForm';

const LogHoursButton = ({ activities, onLogHours }) => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <button onClick={handleToggleForm}>Log Hours</button>
            {showForm && <div className="form-container"><LogHoursForm activities={activities} onLogHours={onLogHours} /></div>}
        </div>
    );
};

export default LogHoursButton;

