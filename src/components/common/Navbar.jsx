import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
  <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between relative">
       <div className="flex items-center gap-2">
        <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" alt="Logo" />
        <span className="text-lg sm:text-xl font-bold text-gray-900">Biodata Builder</span>
      </div>

      <div className="hidden md:flex gap-4 sm:gap-6">
         <Link to="/builder" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Create Now</Link>
         <Link to="/privacy" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Privacy</Link>
      </div>

      {/* Mobile menu button */}
      <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full bg-white border-t md:hidden z-40">
          <div className="container mx-auto px-4 sm:px-6 py-3 flex flex-col gap-2">
            <Link to="/builder" onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-amber-600">Create Now</Link>
            <Link to="/privacy" onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-amber-600">Privacy</Link>
          </div>
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;
