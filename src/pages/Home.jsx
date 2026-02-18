import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                    Create Your Perfect <span className="text-amber-600">Marriage Biodata</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                    Design a professional and elegant biodata in just a few clicks. Customize fields, add photos, and download as PDF instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                    <Link to="/builder" className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-base sm:text-lg transition-transform hover:scale-105 shadow-lg shadow-amber-200 flex items-center justify-center gap-2">
                        <Sparkles size={20} />
                        Start Creating Free
                    </Link>
                     <a href="#features" className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-semibold text-base sm:text-lg transition-colors">
                        Learn More
                    </a>
                </div>
            </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h2>
                    <p className="text-sm sm:text-base text-gray-500">Everything you need to make a great first impression.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
                    <div className="text-center px-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <FileText size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Professional Templates</h3>
                        <p className="text-sm sm:text-base text-gray-600">Clean, modern layouts designed specifically for marriage proposals.</p>
                    </div>
                     <div className="text-center px-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <Shield size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Private & Secure</h3>
                        <p className="text-sm sm:text-base text-gray-600">No data is stored on our servers. Everything generates in your browser.</p>
                    </div>
                     <div className="text-center px-4 sm:col-span-2 md:col-span-1">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <Sparkles size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Instant PDF</h3>
                        <p className="text-sm sm:text-base text-gray-600">Download high-quality print-ready PDFs instantly.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;
