import { uuid } from '../../../utils/uuid';

export const getInitialState = () => ({
    personalDetails: [
        { id: uuid(), label: 'Name', value: '', type: 'text' },
        { id: uuid(), label: 'Gender', value: '', type: 'select', optionsKey: 'genders' },
        { id: uuid(), label: 'Date of Birth', value: '', type: 'date' },
        { id: uuid(), label: 'Time of Birth', value: '', type: 'time' },
        { id: uuid(), label: 'Place of Birth', value: '', type: 'text' },
        { id: uuid(), label: 'Marital Status', value: '', type: 'select', optionsKey: 'maritalStatus' },
        { id: uuid(), label: 'Religion', value: '', type: 'select', optionsKey: 'religions' },
        { id: uuid(), label: 'Caste', value: '', type: 'text' },
        { id: uuid(), label: 'Gotra', value: '', type: 'text' },
        { id: uuid(), label: 'Complexion', value: '', type: 'select', optionsKey: 'complexions' },
        { id: uuid(), label: 'Blood Group', value: '', type: 'select', optionsKey: 'bloodGroups' },
        { id: uuid(), label: 'Height', value: '', type: 'text' },
        { id: uuid(), label: 'Education', value: '', type: 'text' },
        { id: uuid(), label: 'Occupation', value: '', type: 'text' },
        { id: uuid(), label: 'Income', value: '', type: 'text' },
    ],
    familyDetails: [
        { id: uuid(), label: "Father's Name", value: '' },
        { id: uuid(), label: "Father's Gotra", value: '' },
        { id: uuid(), label: "Mother's Name", value: '' },
        { id: uuid(), label: "Mother's Gotra", value: '' },
        { id: uuid(), label: "Grandmother's Gotra", value: '' },
        { id: uuid(), label: 'Brother', value: '' },
    ],
    contactDetails: [
        { id: uuid(), label: 'Address', value: '' },
        { id: uuid(), label: 'Contact Number', value: '' },
    ],
});
