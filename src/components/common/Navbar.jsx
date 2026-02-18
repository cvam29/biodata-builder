import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" alt="Logo" />
                <span className="text-lg sm:text-xl font-bold text-gray-900">Biodata Builder</span>
            </div>
            <div className="flex gap-4 sm:gap-6">
                 <Link to="/builder" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Create Now</Link>
                 <Link to="/privacy" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Privacy</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
