import { useState } from 'react';
import { getInitialState } from '../data/initialState';
import { uuid } from '../../../utils/uuid';

export const useBiodata = () => {
    const [biodata, setBiodata] = useState(getInitialState);

    // Generic field update
    const updateField = (section, id, key, value) => {
        setBiodata(prev => ({
            ...prev,
            [section]: prev[section].map(item => 
                item.id === id ? { ...item, [key]: value } : item
            )
        }));
    };

    // Add new field to a section
    const addField = (section) => {
        setBiodata(prev => ({
            ...prev,
            [section]: [...prev[section], { id: uuid(), label: 'New Field', value: '' }]
        }));
    };

    // Remove field
    const removeField = (section, id) => {
         setBiodata(prev => ({
            ...prev,
            [section]: prev[section].filter(item => item.id !== id)
        }));
    };

    // Reorder fields
    const moveField = (section, index, direction) => {
        setBiodata(prev => {
            const newSection = [...prev[section]];
            const [movedItem] = newSection.splice(index, 1);
            newSection.splice(index + direction, 0, movedItem);
            return { ...prev, [section]: newSection };
        });
    };

    // Full setter for compatibility if needed, or replace with specific actions
    // For now, exposing setBiodata is flexible
    return { 
        biodata, 
        setBiodata,
        updateField,
        addField,
        removeField,
        moveField
    };
};
