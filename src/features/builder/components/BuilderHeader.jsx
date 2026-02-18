import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';

const BuilderHeader = ({ onPrint }) => {
    return (
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm z-10 shrink-0 no-print">
            {/* Mobile Layout */}
            <div className="flex md:hidden justify-between items-center gap-2">
                <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-amber-600 transition-colors flex-shrink-0">
                    <ArrowLeft size={18} />
                    <span className="text-sm font-medium">Back</span>
                </Link>
                
                <div className="flex items-center gap-1.5 flex-shrink">
                    <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-6 h-6 rounded-full border border-amber-200" alt="Logo" />
                    <h1 className="text-base font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent truncate">Biodata Builder</h1>
                </div>

                <button 
                    onClick={onPrint}
                    className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0"
                >
                    <Printer size={16} />
                    <span className="hidden xs:inline">PDF</span>
                </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex relative justify-between items-center">
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
            </div>
        </header>
    );
};

export default BuilderHeader;
