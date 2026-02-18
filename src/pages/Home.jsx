import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Sparkles } from 'lucide-react';

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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <img src="https://englishbiodata.com/images/latest/gods/1.png" className="w-8 h-8 rounded-full" alt="Logo" />
                    <span className="text-xl font-bold text-gray-900">Biodata Builder</span>
                </div>
                <div className="flex gap-6">
                     <Link to="/builder" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Create Now</Link>
                     <Link to="/privacy" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Privacy</Link>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Create Your Perfect <span className="text-amber-600">Marriage Biodata</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Design a professional and elegant biodata in just a few clicks. Customize fields, add photos, and download as PDF instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/builder" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-amber-200 flex items-center justify-center gap-2">
                        <Sparkles size={20} />
                        Start Creating Free
                    </Link>
                     <a href="#features" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg transition-colors">
                        Learn More
                    </a>
                </div>
            </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-500">Everything you need to make a great first impression.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Professional Templates</h3>
                        <p className="text-gray-600">Clean, modern layouts designed specifically for marriage proposals.</p>
                    </div>
                     <div className="text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Private & Secure</h3>
                        <p className="text-gray-600">No data is stored on our servers. Everything generates in your browser.</p>
                    </div>
                     <div className="text-center">
                        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Instant PDF</h3>
                        <p className="text-gray-600">Download high-quality print-ready PDFs instantly.</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  );
};

export default Home;
