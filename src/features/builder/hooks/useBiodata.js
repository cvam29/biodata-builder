import { useState, useEffect, useRef } from 'react';
import { getInitialState } from '../data/initialState';
import { uuid } from '../../../utils/uuid';

const STORAGE_KEY = 'biodata-builder-data';

function loadSavedData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch (e) {
        console.warn('Failed to load saved biodata:', e);
    }
    return getInitialState();
}

export const useBiodata = () => {
    const [biodata, setBiodata] = useState(loadSavedData);
    const timerRef = useRef(null);

    // Debounced save to localStorage on every change
    useEffect(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(biodata));
            } catch (e) {
                console.warn('Failed to save biodata:', e);
            }
        }, 500);
        return () => clearTimeout(timerRef.current);
    }, [biodata]);

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
    // Reset to initial state and clear saved data
    const resetBiodata = () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        setBiodata(getInitialState());
    };

    return { 
        biodata, 
        setBiodata,
        updateField,
        addField,
        removeField,
        moveField,
        resetBiodata
    };
};
