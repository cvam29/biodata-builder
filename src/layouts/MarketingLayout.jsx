import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MarketingLayout = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MarketingLayout;
