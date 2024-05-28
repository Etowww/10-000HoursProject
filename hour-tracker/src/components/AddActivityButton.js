import React, { useState } from 'react';
import AddActivityForm from './AddActivityForm';

const AddActivityButton = ({ onAddActivity }) => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <button onClick={handleToggleForm}>Add New Activity</button>
            {showForm && <AddActivityForm onAddActivity={onAddActivity} />}
        </div>
    );
};

export default AddActivityButton;
