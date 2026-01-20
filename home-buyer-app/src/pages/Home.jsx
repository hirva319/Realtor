import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  AlertCircle, 
  BookOpen, 
  Calculator, 
  ClipboardList,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Home as HomeIcon,
  Search,
  FileText,
  Star,
  MessageSquare
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Money Protection',
      description: 'Learn how to protect your investment and avoid common financial pitfalls that cost buyers thousands.',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Negotiation Leverage',
      description: 'Understand market dynamics and develop strategies to maximize your negotiating power.',
      color: 'bg-green-500',
    },
    {
      icon: AlertCircle,
      title: 'Risk Analysis',
      description: 'Identify red flags early and understand the true risks before making commitments.',
      color: 'bg-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Step-by-Step Education',
      description: 'Navigate each phase of home buying with clear, actionable guidance.',
      color: 'bg-purple-500',
    },
  ];

  const phases = [
    { number: '1', title: 'Financial Readiness', description: 'Assess your budget, savings, and true affordability' },
    { number: '2', title: 'Market Analysis', description: 'Understand pricing, trends, and neighborhood liquidity' },
    { number: '3', title: 'Offer Strategy', description: 'Craft smart offers with proper protections' },
    { number: '4', title: 'Contract Review', description: 'Understand contingencies and protect your earnest money' },
    { number: '5', title: 'Inspection Phase', description: 'Uncover issues and negotiate repairs or credits' },
    { number: '6', title: 'Appraisal & Closing', description: 'Final checks and successful closing' },
  ];

  const stats = [
    { value: '8', label: 'Home Buying Phases', icon: HomeIcon },
    { value: '100+', label: 'Checklist Items', icon: ClipboardList },
    { value: '5', label: 'Financial Calculators', icon: Calculator },
    { value: '25+', label: 'Terms Explained', icon: BookOpen },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Built for Texas Home Buyers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Buy Your First Home
              <span className="text-blue-200"> in Texas</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Expert guidance designed for Texas first-time buyers. Protect your money, understand Texas-specific rules 
              like the Option Period, and make informed decisions every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/financial-readiness"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/buying-phases"
                className="inline-flex items-center justify-center bg-blue-500/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/50 transition-colors duration-200 border border-blue-400"
              >
                Explore Phases
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="relative">
          <svg className="w-full h-16 text-gray-50" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 -mt-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Expert Buyer's Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We act as your advocate, risk analyst, and financial loss-prevention expert — 
              all focused on protecting your interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card text-center group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phases Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Home Buying Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We guide you through every phase, ensuring you understand the risks and protect your money at each step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/buying-phases"
              className="inline-flex items-center btn-primary"
            >
              Explore All Phases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Money Protection Alert */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <AlertCircle className="h-20 w-20 mx-auto lg:mx-0 mb-4 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where Buyers Lose Money
              </h2>
              <p className="text-orange-100 text-lg">
                Learn about the most common and costly mistakes that first-time buyers make.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Overpaying in low-liquidity neighborhoods',
                  'Missing contract deadlines',
                  'Waiving inspection contingencies',
                  'Accepting seller repairs instead of credits',
                  'Not shopping multiple lenders',
                  'Emotional decision making (FOMO)',
                ].map((mistake, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{mistake}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center lg:text-left">
                <Link
                  to="/red-flags"
                  className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  View All Red Flags
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools to Help You Decide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our interactive calculators, AI assistant, checklists, and dictionary to make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* AI Negotiation Assistant - Featured */}
            <Link to="/negotiation" className="group md:col-span-2">
              <div className="card h-full border-2 border-transparent group-hover:border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">AI Negotiation Assistant</h3>
                      <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Enter property details and generate a comprehensive research prompt for ChatGPT to analyze negotiation leverage, fair pricing, and offer strategy.
                    </p>
                    <span className="inline-flex items-center text-purple-600 font-medium">
                      Try AI Assistant <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/calculators" className="group">
              <div className="card h-full border-2 border-transparent group-hover:border-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-600 transition-colors duration-200">
                    <Calculator className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Calculators</h3>
                    <p className="text-gray-600 mb-4">
                      Calculate your true monthly costs, affordability, and emergency fund requirements.
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      Try Calculators <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/checklists" className="group">
              <div className="card h-full border-2 border-transparent group-hover:border-green-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-600 transition-colors duration-200">
                    <ClipboardList className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Checklists</h3>
                    <p className="text-gray-600 mb-4">
                      Stay organized with comprehensive checklists for every phase of the buying process.
                    </p>
                    <span className="inline-flex items-center text-green-600 font-medium">
                      View Checklists <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/dictionary" className="group">
              <div className="card h-full border-2 border-transparent group-hover:border-orange-500">
                <div className="bg-orange-100 p-4 rounded-xl group-hover:bg-orange-600 transition-colors duration-200">
                  <BookOpen className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Buying Dictionary</h3>
                  <p className="text-gray-600 mb-4">
                    Don't know what "earnest money" means? Learn all the terms in plain English.
                  </p>
                  <span className="inline-flex items-center text-orange-600 font-medium">
                    Learn Terms <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Begin with a financial readiness assessment to understand your true buying power.
          </p>
          <Link
            to="/financial-readiness"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <DollarSign className="mr-2 h-5 w-5" />
            Check Your Readiness
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
