import { useState } from 'react';
import { useBiodata } from '../features/builder/hooks/useBiodata';
import SectionEditor from '../features/builder/components/SectionEditor';
import BiodataPreview from '../features/builder/components/BiodataPreview';
import BuilderHeader from '../features/builder/components/BuilderHeader';
import { backgrounds } from '../features/builder/data/backgrounds';
import { generatePdf, generatePdfBlob } from '../features/builder/utils/generatePdf';
import { useEffect } from 'react';
import { Image as ImageIcon, Eye, Edit } from 'lucide-react';

const BiodataBuilder = () => {
    const { biodata, updateField, addField, removeField, moveField } = useBiodata();
    const [bgImage, setBgImage] = useState('none');
    const [showPreview, setShowPreview] = useState(false);
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem('biodata-lang') || 'en';
        } catch (e) { return 'en'; }
    });

    const [isSaving, setIsSaving] = useState(false);
    const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
    const [showPdfModal, setShowPdfModal] = useState(false);
    const [pdfPreviewFilename, setPdfPreviewFilename] = useState('biodata-preview.pdf');

    const getExportBaseName = (biodata) => {
        try {
            const nameField = biodata.personalDetails.find(f => (f.label || '').toLowerCase() === 'name');
            const raw = (nameField && nameField.value) ? String(nameField.value).trim() : '';
            if (!raw) return 'biodata';
            // sanitize: remove unsafe chars and replace spaces with hyphens
            const sanitized = raw.replace(/[^a-zA-Z0-9\s-_]/g, '').replace(/\s+/g, '-');
            return sanitized || 'biodata';
        } catch (e) {
            return 'biodata';
        }
    };

    const handlePrint = async () => {
        if (isSaving) return;
        setIsSaving(true);
        try {
            const base = getExportBaseName(biodata);
            const filename = `${base}-biodata.pdf`;
            await generatePdf('biodata-preview', filename);
        } catch (err) {
            console.error('PDF generation failed:', err);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handlePreviewPdf = async () => {
        if (isSaving) return;
        setIsSaving(true);
        try {
            const blob = await generatePdfBlob('biodata-preview');
            if (!blob) throw new Error('No PDF blob generated');
            const url = URL.createObjectURL(blob);
            const base = getExportBaseName(biodata);
            const filename = `${base}-biodata.pdf`;
            setPdfPreviewFilename(filename);
            setPdfPreviewUrl(url);
            setShowPdfModal(true);
        } catch (err) {
            console.error('PDF preview failed:', err);
            alert('Failed to generate PDF preview. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    useEffect(() => {
        return () => {
            if (pdfPreviewUrl) URL.revokeObjectURL(pdfPreviewUrl);
        };
    }, [pdfPreviewUrl]);

    useEffect(() => {
        try { localStorage.setItem('biodata-lang', lang); } catch (e) {}
    }, [lang]);

    useEffect(() => {
        document.title = 'Create Biodata — Biodata Builder';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Create and customize your marriage biodata, then export as a high-quality PDF.');
    }, []);

    return (
        <div className="flex flex-col h-screen overflow-hidden print:overflow-visible print:h-auto print:block text-gray-800 font-sans">
             <BuilderHeader onPrint={handlePrint} onPreviewPdf={handlePreviewPdf} isSaving={isSaving} lang={lang} onLangChange={setLang} />

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
            <main className="flex-1 flex overflow-hidden print:overflow-visible print:block print:h-auto">
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
                            lang={lang}
                        />
                         <SectionEditor 
                            title="Family Details" 
                            fields={biodata.familyDetails} 
                            onUpdate={(id, k, v) => updateField('familyDetails', id, k, v)}
                            onAdd={() => addField('familyDetails')}
                            onRemove={(id) => removeField('familyDetails', id)}
                            onMove={(index, dir) => moveField('familyDetails', index, dir)}
                            lang={lang}
                        />
                         <SectionEditor 
                            title="Contact Details" 
                            fields={biodata.contactDetails} 
                            onUpdate={(id, k, v) => updateField('contactDetails', id, k, v)}
                            onAdd={() => addField('contactDetails')}
                            onRemove={(id) => removeField('contactDetails', id)}
                            onMove={(index, dir) => moveField('contactDetails', index, dir)}
                            lang={lang}
                        />
                    </div>
                </div>

                {/* Preview Panel */}
                <div className={`w-full md:w-1/2 lg:w-7/12 bg-slate-200/50 relative overflow-y-auto justify-center items-start print:w-full print:block print:overflow-visible print:h-auto print:bg-white ${
                    showPreview ? 'flex' : 'hidden md:flex'
                }`}>
                     <div className="w-full py-4 sm:py-8"> 
                         <BiodataPreview data={biodata} background={backgrounds.find(b => b.id === bgImage)} lang={lang} />
                     </div>
                </div>
            </main>
                {/* PDF Preview Modal */}
                {showPdfModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl">
                            <div className="flex items-center justify-between p-3 border-b">
                                <div className="flex items-center gap-3">
                                    <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-10 h-10 rounded-full border" alt="Logo" />
                                    <h3 className="text-lg font-semibold">PDF Preview</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a href={pdfPreviewUrl} download={pdfPreviewFilename} className="text-sm text-amber-600 underline">Download</a>
                                    <button onClick={() => { setShowPdfModal(false); setPdfPreviewUrl(prev => { if (prev) { URL.revokeObjectURL(prev); } return null; }); }} className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Close</button>
                                </div>
                            </div>
                            <div className="h-[80vh] bg-gray-50">
                                {pdfPreviewUrl ? (
                                    <iframe title="PDF Preview" src={pdfPreviewUrl} className="w-full h-full" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-500">Preparing preview...</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default BiodataBuilder;
