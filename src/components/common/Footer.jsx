import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                     <h2 className="text-2xl font-bold text-white mb-2">Biodata Builder</h2>
                     <p className="text-sm">Create beautiful marriage biodatas in minutes.</p>
                </div>
                <div className="flex gap-8 text-sm">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/builder" className="hover:text-white transition-colors">Create</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                &copy; {new Date().getFullYear()} Biodata Builder. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
