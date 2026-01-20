import { Home, Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">HomeBuyer Pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted guide to making smart, informed decisions when buying your first home in Texas.
              We focus on protecting your money and long-term financial outcomes.
            </p>
            <div className="mt-4 inline-flex items-center text-yellow-400 text-sm">
              <Star className="h-4 w-4 mr-1" />
              Built for Texas Home Buyers
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/financial-readiness" className="hover:text-white transition-colors">Financial Readiness</a></li>
              <li><a href="/buying-phases" className="hover:text-white transition-colors">Home Buying Phases</a></li>
              <li><a href="/calculators" className="hover:text-white transition-colors">Calculators</a></li>
              <li><a href="/checklists" className="hover:text-white transition-colors">Checklists</a></li>
              <li><a href="/red-flags" className="hover:text-white transition-colors">Red Flags</a></li>
              <li><a href="/dictionary" className="hover:text-white transition-colors">Dictionary</a></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Disclaimer</h3>
            <p className="text-gray-400 text-sm">
              This application provides educational information for Texas home buyers and should not be considered 
              professional financial or legal advice. Always consult with qualified professionals 
              (real estate agents, lenders, attorneys) before making real estate decisions.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> for first-time Texas home buyers
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} HomeBuyer Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
