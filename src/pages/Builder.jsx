import { useState } from 'react';
import { useBiodata } from '../features/builder/hooks/useBiodata';
import SectionEditor from '../features/builder/components/SectionEditor';
import BiodataPreview from '../features/builder/components/BiodataPreview';
import BuilderHeader from '../features/builder/components/BuilderHeader';
import { backgrounds } from '../features/builder/data/backgrounds';
import { Image as ImageIcon } from 'lucide-react';

const BiodataBuilder = () => {
    const { biodata, updateField, addField, removeField, moveField } = useBiodata();
    const [bgImage, setBgImage] = useState('none');

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden text-gray-800 font-sans">
             <BuilderHeader onPrint={handlePrint} />

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
                            onUpdate={(id, k, v) => updateField('personalDetails', id, k, v)}
                            onAdd={() => addField('personalDetails')}
                            onRemove={(id) => removeField('personalDetails', id)}
                            onMove={(index, dir) => moveField('personalDetails', index, dir)}
                        />
                         <SectionEditor 
                            title="Family Details" 
                            fields={biodata.familyDetails} 
                            onUpdate={(id, k, v) => updateField('familyDetails', id, k, v)}
                            onAdd={() => addField('familyDetails')}
                            onRemove={(id) => removeField('familyDetails', id)}
                            onMove={(index, dir) => moveField('familyDetails', index, dir)}
                        />
                         <SectionEditor 
                            title="Contact Details" 
                            fields={biodata.contactDetails} 
                            onUpdate={(id, k, v) => updateField('contactDetails', id, k, v)}
                            onAdd={() => addField('contactDetails')}
                            onRemove={(id) => removeField('contactDetails', id)}
                            onMove={(index, dir) => moveField('contactDetails', index, dir)}
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
