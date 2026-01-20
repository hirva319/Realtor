import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FinancialReadiness from './pages/FinancialReadiness';
import BuyingPhases from './pages/BuyingPhases';
import Calculators from './pages/Calculators';
import Checklists from './pages/Checklists';
import RedFlags from './pages/RedFlags';
import Dictionary from './pages/Dictionary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
