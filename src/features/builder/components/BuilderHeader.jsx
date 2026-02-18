import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';

const BuilderHeader = ({ onPrint }) => {
    return (
        <header className="relative bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm z-10 shrink-0 no-print">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Home</span>
            </Link>

            <div className="absolute left-0 right-0 mx-auto w-fit flex items-center justify-center gap-2 pointer-events-none">
                <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-8 h-8 rounded-full border border-amber-200 pointer-events-auto" alt="Logo" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Biodata Builder</h1>
            </div>

            <div className="flex items-center gap-3">
                <button 
                    onClick={onPrint}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                    <Printer size={18} />
                    <span>Save PDF</span>
                </button>
            </div>
        </header>
    );
};

export default BuilderHeader;
