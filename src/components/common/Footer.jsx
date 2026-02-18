import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                <div className="text-center md:text-left">
                     <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Biodata Builder</h2>
                     <p className="text-xs sm:text-sm">Create beautiful marriage biodatas in minutes.</p>
                </div>
                <div className="flex gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/builder" className="hover:text-white transition-colors">Create</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 text-center text-xs">
                &copy; {new Date().getFullYear()} Biodata Builder. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
