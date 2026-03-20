import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
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
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />

              {/* Protected routes */}
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/financial-readiness" element={<ProtectedRoute><FinancialReadiness /></ProtectedRoute>} />
              <Route path="/buying-phases" element={<ProtectedRoute><BuyingPhases /></ProtectedRoute>} />
              <Route path="/calculators" element={<ProtectedRoute><Calculators /></ProtectedRoute>} />
              <Route path="/checklists" element={<ProtectedRoute><Checklists /></ProtectedRoute>} />
              <Route path="/red-flags" element={<ProtectedRoute><RedFlags /></ProtectedRoute>} />
              <Route path="/dictionary" element={<ProtectedRoute><Dictionary /></ProtectedRoute>} />
              <Route path="/negotiation" element={<ProtectedRoute><Negotiation /></ProtectedRoute>} />
              <Route path="/saved-properties" element={<ProtectedRoute><SavedProperties /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
