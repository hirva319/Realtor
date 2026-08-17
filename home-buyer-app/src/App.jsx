import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FinancialReadiness from './pages/FinancialReadiness';
import BuyingPhases from './pages/BuyingPhases';
import Calculators from './pages/Calculators';
import Checklists from './pages/Checklists';
import RedFlags from './pages/RedFlags';
import Dictionary from './pages/Dictionary';
import Negotiation from './pages/Negotiation';
import SavedProperties from './pages/SavedProperties';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/financial-readiness" element={<FinancialReadiness />} />
            <Route path="/buying-phases" element={<BuyingPhases />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/checklists" element={<Checklists />} />
            <Route path="/red-flags" element={<RedFlags />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/negotiation" element={<Negotiation />} />
            <Route path="/saved-properties" element={<SavedProperties />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
