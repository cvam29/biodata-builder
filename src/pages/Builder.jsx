import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionEditor from '../components/SectionEditor';
import BiodataPreview from '../components/BiodataPreview';
import { Printer, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const BiodataBuilder = () => {
    const uuid = () => crypto.randomUUID();

    const [biodata, setBiodata] = useState({
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

    const [bgImage, setBgImage] = useState('none');

    const backgrounds = [
        { id: 'none', name: 'Plain White', value: 'none', class: 'bg-white' },
        { id: 'warm', name: 'Warm Texture', value: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")', class: 'bg-[#fdfbf7]' },
        { id: 'floral', name: 'Floral Border', value: 'url("https://www.transparenttextures.com/patterns/flower-trail.png")', class: 'bg-amber-50' },
        { id: 'modern', name: 'Modern Dot', value: 'radial-gradient(#cbd5e1 1px, transparent 1px)', size: '20px 20px', class: 'bg-slate-50' },
    ];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden text-gray-800 font-sans">
             {/* Header */}
            <header className="relative bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm z-10 shrink-0 no-print">
                <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <div className="absolute left-[30px] right-0 mx-auto w-fit flex items-center justify-center gap-2 pointer-events-none">
                     <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-8 h-8 rounded-full border border-amber-200 pointer-events-auto" alt="Logo" />
                    <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Biodata Builder</h1>
                </div>

                <div className="flex items-center gap-3">
                     <button 
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <Printer size={18} />
                        <span>Save PDF</span>
                    </button>
                </div>
            </header>

            {/* Main Content - Split View */}
            <main className="flex-1 flex overflow-hidden">
                {/* Editor Panel */}
                <div className="w-full md:w-1/2 lg:w-5/12 bg-slate-50 border-r border-gray-200 overflow-y-auto custom-scrollbar no-print">
                    <div className="p-6 max-w-2xl mx-auto">
                        
                        {/* Background Selection */}
                        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <ImageIcon size={20} className="text-amber-600"/> 
                                Select Background
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {backgrounds.map(bg => (
                                    <button
                                        key={bg.id}
                                        onClick={() => setBgImage(bg.id)}
                                        className={`p-3 rounded border text-left text-sm transition-all ${bgImage === bg.id ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500' : 'border-gray-200 hover:border-amber-300'}`}
                                    >
                                        <div className="font-medium text-gray-700">{bg.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-700 mb-1">Edit Details</h2>
                            <p className="text-sm text-gray-500">Update the fields below.</p>
                        </div>
                        
                        <SectionEditor 
                            title="Personal Details" 
                            fields={biodata.personalDetails} 
                            setFields={(fields) => setBiodata({...biodata, personalDetails: fields})} 
                        />
                         <SectionEditor 
                            title="Family Details" 
                            fields={biodata.familyDetails} 
                            setFields={(fields) => setBiodata({...biodata, familyDetails: fields})} 
                        />
                         <SectionEditor 
                            title="Contact Details" 
                            fields={biodata.contactDetails} 
                            setFields={(fields) => setBiodata({...biodata, contactDetails: fields})} 
                        />
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="hidden md:flex md:w-1/2 lg:w-7/12 bg-slate-200/50 relative overflow-y-auto justify-center items-start">
                     <div className="w-full py-8"> 
                         <BiodataPreview data={biodata} background={backgrounds.find(b => b.id === bgImage)} />
                     </div>
                </div>
            </main>
        </div>
    );
};

export default BiodataBuilder;
