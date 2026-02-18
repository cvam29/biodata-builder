import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
