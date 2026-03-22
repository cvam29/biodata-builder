import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MarketingLayout = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main role="main" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;
