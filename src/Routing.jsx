import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import App from './App';
import Quienes from './utils/Quienes';
import Politica from './utils/Politica';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/politica" element={<Politica />} />
                <Route path="/quienes" element={<Quienes />} />
            </Routes>
        </Router>
    )
}

export default Routing