import { useState } from 'react';
import { useBiodata } from '../features/builder/hooks/useBiodata';
import SectionEditor from '../features/builder/components/SectionEditor';
import BiodataPreview from '../features/builder/components/BiodataPreview';
import BuilderHeader from '../features/builder/components/BuilderHeader';
import { backgrounds } from '../features/builder/data/backgrounds';
import { Image as ImageIcon, Eye, Edit } from 'lucide-react';

const BiodataBuilder = () => {
    const { biodata, updateField, addField, removeField, moveField } = useBiodata();
    const [bgImage, setBgImage] = useState('none');
    const [showPreview, setShowPreview] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden text-gray-800 font-sans">
             <BuilderHeader onPrint={handlePrint} />

            {/* Mobile Preview/Edit Toggle */}
            <div className="md:hidden flex gap-2 p-3 bg-white border-b border-gray-200 no-print">
                <button
                    onClick={() => setShowPreview(false)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                        !showPreview 
                            ? 'bg-amber-600 text-white shadow-md' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <Edit size={18} />
                    Edit
                </button>
                <button
                    onClick={() => setShowPreview(true)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                        showPreview 
                            ? 'bg-amber-600 text-white shadow-md' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <Eye size={18} />
                    Preview
                </button>
            </div>

            {/* Main Content - Split View */}
            <main className="flex-1 flex overflow-hidden">
                {/* Editor Panel */}
                <div className={`w-full md:w-1/2 lg:w-5/12 bg-slate-50 border-r border-gray-200 overflow-y-auto custom-scrollbar no-print ${
                    showPreview ? 'hidden md:block' : 'block'
                }`}>
                    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
                        
                        {/* Background Selection */}
                        <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                             <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                                <ImageIcon size={20} className="text-amber-600"/> 
                                Select Background
                            </h3>
                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                {backgrounds.map(bg => (
                                    <button
                                        key={bg.id}
                                        onClick={() => setBgImage(bg.id)}
                                        className={`p-2.5 sm:p-3 rounded border text-left text-sm transition-all ${bgImage === bg.id ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500' : 'border-gray-200 hover:border-amber-300'}`}
                                    >
                                        <div className="font-medium text-gray-700">{bg.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">Edit Details</h2>
                            <p className="text-xs sm:text-sm text-gray-500">Update the fields below.</p>
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
                <div className={`w-full md:w-1/2 lg:w-7/12 bg-slate-200/50 relative overflow-y-auto justify-center items-start ${
                    showPreview ? 'flex' : 'hidden md:flex'
                }`}>
                     <div className="w-full py-4 sm:py-8"> 
                         <BiodataPreview data={biodata} background={backgrounds.find(b => b.id === bgImage)} />
                     </div>
                </div>
            </main>
        </div>
    );
};

export default BiodataBuilder;
