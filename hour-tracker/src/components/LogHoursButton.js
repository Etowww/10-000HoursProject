import React, { useState } from 'react';
import LogHoursForm from './LogHoursForm';

const LogHoursButton = ({ activities, onLogHours }) => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <button onClick={handleToggleForm}>Log Hours</button>
            {showForm && <LogHoursForm activities={activities} onLogHours={onLogHours} />}
        </div>
    );
};

export default LogHoursButton;
