import { uuid } from '../../../utils/uuid';

export const getInitialState = () => ({
    personalDetails: [
        { id: uuid(), label: 'Name', value: '' },
        { id: uuid(), label: 'Gender', value: '' },
        { id: uuid(), label: 'Date of Birth', value: '' },
        { id: uuid(), label: 'Time of Birth', value: '' },
        { id: uuid(), label: 'Place of Birth', value: '' },
        { id: uuid(), label: 'Marital Status', value: '' },
        { id: uuid(), label: 'Religion', value: '' },
        { id: uuid(), label: 'Caste', value: '' },
        { id: uuid(), label: 'Gotra', value: '' },
        { id: uuid(), label: 'Complexion', value: '' },
        { id: uuid(), label: 'Blood Group', value: '' },
        { id: uuid(), label: 'Height', value: '' },
        { id: uuid(), label: 'Education', value: '' },
        { id: uuid(), label: 'Occupation', value: '' },
        { id: uuid(), label: 'Income', value: '' },
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
