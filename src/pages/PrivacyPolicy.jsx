import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <div className="mb-8 border-b pb-6">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors font-medium">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-slate max-w-none text-gray-600">
                    <p>At Biodata Builder, we prioritize the privacy regarding your personal information.</p>
                    
                    <h3 className="text-gray-900 font-semibold text-xl mt-8 mb-4">1. Data Collection</h3>
                    <p>
                        We operate as a client-side application. No personal data you enter into the biodata form is sent to our servers.
                        All processing happens directly in your browser.
                    </p>

                    <h3 className="text-gray-900 font-semibold text-xl mt-8 mb-4">2. Cookies</h3>
                    <p>
                        We do not use cookies for tracking or advertising purposes. Local storage may be used strictly to save your current work session on your device.
                    </p>

                    <h3 className="text-gray-900 font-semibold text-xl mt-8 mb-4">3. Third-Party Services</h3>
                    <p>
                        We may link to third-party assets (like fonts or images) which have their own privacy policies. We are not responsible for their content or practices.
                    </p>

                    <h3 className="text-gray-900 font-semibold text-xl mt-8 mb-4">4. Changes to This Policy</h3>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <div className="mt-12 pt-8 border-t text-sm text-gray-400">
                        If you have any questions about this Privacy Policy, please contact us.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicy;
