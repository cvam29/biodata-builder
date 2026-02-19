import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import Home from './pages/Home';
import BiodataBuilder from './pages/Builder';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Marketing Pages with Header/Footer */}
                <Route element={<MarketingLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Route>

                {/* Builder App (Standalone Layout) */}
                <Route path="/builder" element={<BiodataBuilder />} />
            </Routes>
        </Router>
    );
};

export default App;
