import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BiodataBuilder from './pages/Builder';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/builder" element={<BiodataBuilder />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
};

export default App;
