import { useState } from 'react';
import { 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Shield,
  Info,
  Calculator,
  PiggyBank,
  CreditCard,
  Home
} from 'lucide-react';

const FinancialReadiness = () => {
  const [formData, setFormData] = useState({
    annualIncome: '',
    monthlyDebts: '',
    savings: '',
    targetHomePrice: '',
    downPaymentPercent: '20',
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateReadiness = (e) => {
    e.preventDefault();
    
    const income = parseFloat(formData.annualIncome) || 0;
    const monthlyIncome = income / 12;
    const debts = parseFloat(formData.monthlyDebts) || 0;
    const savings = parseFloat(formData.savings) || 0;
    const homePrice = parseFloat(formData.targetHomePrice) || 0;
    const downPaymentPercent = parseFloat(formData.downPaymentPercent) / 100;

    // Calculate down payment
    const downPayment = homePrice * downPaymentPercent;
    
    // Estimate closing costs (2-5% of home price, using 3%)
    const closingCosts = homePrice * 0.03;
    
    // Loan amount
    const loanAmount = homePrice - downPayment;
    
    // Estimated monthly mortgage (using 7% rate, 30 year)
    const monthlyRate = 0.07 / 12;
    const numPayments = 360;
    const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    // Property tax estimate (1.2% annual)
    const monthlyPropertyTax = (homePrice * 0.012) / 12;
    
    // Insurance estimate ($1500/year)
    const monthlyInsurance = 125;
    
    // PMI if down payment < 20%
    const monthlyPMI = downPaymentPercent < 0.20 ? (loanAmount * 0.01) / 12 : 0;
    
    // Total monthly housing cost
    const totalMonthlyHousing = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + monthlyPMI;
    
    // DTI calculations
    const frontEndDTI = (totalMonthlyHousing / monthlyIncome) * 100;
    const backEndDTI = ((totalMonthlyHousing + debts) / monthlyIncome) * 100;
    
    // Cash needed
    const totalCashNeeded = downPayment + closingCosts;
    
    // Remaining savings after purchase
    const remainingSavings = savings - totalCashNeeded;
    
    // Emergency fund (6 months of expenses)
    const monthlyExpenses = totalMonthlyHousing + debts + 2000; // Adding estimated living expenses
    const emergencyFundNeeded = monthlyExpenses * 6;
    
    // Determine readiness score
    let readinessScore = 0;
    const warnings = [];
    const positives = [];

    // DTI check
    if (frontEndDTI <= 28) {
      readinessScore += 25;
      positives.push('Front-end DTI is within recommended 28% limit');
    } else if (frontEndDTI <= 31) {
      readinessScore += 15;
      warnings.push(`Front-end DTI of ${frontEndDTI.toFixed(1)}% exceeds ideal 28% threshold`);
    } else {
      warnings.push(`Front-end DTI of ${frontEndDTI.toFixed(1)}% is too high (max recommended: 28%)`);
    }

    if (backEndDTI <= 36) {
      readinessScore += 25;
      positives.push('Back-end DTI is within recommended 36% limit');
    } else if (backEndDTI <= 43) {
      readinessScore += 15;
      warnings.push(`Back-end DTI of ${backEndDTI.toFixed(1)}% exceeds ideal 36% threshold`);
    } else {
      warnings.push(`Back-end DTI of ${backEndDTI.toFixed(1)}% is too high (max recommended: 36-43%)`);
    }

    // Down payment check
    if (downPaymentPercent >= 0.20) {
      readinessScore += 25;
      positives.push('20%+ down payment avoids PMI');
    } else if (downPaymentPercent >= 0.10) {
      readinessScore += 15;
      warnings.push('Less than 20% down payment means PMI required');
    } else {
      readinessScore += 10;
      warnings.push('Low down payment increases monthly costs significantly');
    }

    // Emergency fund check
    if (remainingSavings >= emergencyFundNeeded) {
      readinessScore += 25;
      positives.push('Sufficient emergency fund after closing');
    } else if (remainingSavings >= emergencyFundNeeded * 0.5) {
      readinessScore += 15;
      warnings.push('Emergency fund will be below recommended 6 months');
    } else if (remainingSavings > 0) {
      readinessScore += 5;
      warnings.push('Post-close savings dangerously low - serious financial risk');
    } else {
      warnings.push('Insufficient savings for this purchase - cannot afford');
    }

    setResults({
      downPayment,
      closingCosts,
      totalCashNeeded,
      loanAmount,
      monthlyMortgage,
      monthlyPropertyTax,
      monthlyInsurance,
      monthlyPMI,
      totalMonthlyHousing,
      frontEndDTI,
      backEndDTI,
      remainingSavings,
      emergencyFundNeeded,
      readinessScore,
      warnings,
      positives,
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Ready to Buy';
    if (score >= 60) return 'Proceed with Caution';
    if (score >= 40) return 'Significant Concerns';
    return 'Not Ready';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Readiness Assessment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Before looking at homes, let's make sure you're financially prepared. 
            This assessment will help identify any red flags.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calculator className="h-6 w-6 mr-2 text-blue-600" />
              Your Financial Information
            </h2>

            <form onSubmit={calculateReadiness} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Gross Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="100000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Debt Payments
                  <span className="text-gray-500 font-normal"> (car, student loans, credit cards)</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="monthlyDebts"
                    value={formData.monthlyDebts}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Savings & Investments
                </label>
                <div className="relative">
                  <PiggyBank className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="savings"
                    value={formData.savings}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="75000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Home Price
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="targetHomePrice"
                    value={formData.targetHomePrice}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="400000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment Percentage
                </label>
                <select
                  name="downPaymentPercent"
                  value={formData.downPaymentPercent}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="3">3% - Minimum (Higher PMI)</option>
                  <option value="5">5% - Low Down Payment</option>
                  <option value="10">10% - Moderate</option>
                  <option value="15">15% - Good</option>
                  <option value="20">20% - Recommended (No PMI)</option>
                  <option value="25">25% - Strong Position</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full">
                Calculate Readiness
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Readiness Score */}
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Readiness Score</h3>
                  <div className={`text-6xl font-bold ${getScoreColor(results.readinessScore)} mb-2`}>
                    {results.readinessScore}%
                  </div>
                  <div className={`text-xl font-medium ${getScoreColor(results.readinessScore)}`}>
                    {getScoreLabel(results.readinessScore)}
                  </div>
                </div>

                {/* Monthly Breakdown */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Housing Costs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Mortgage Payment</span>
                      <span className="font-medium">{formatCurrency(results.monthlyMortgage)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Property Tax</span>
                      <span className="font-medium">{formatCurrency(results.monthlyPropertyTax)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Insurance</span>
                      <span className="font-medium">{formatCurrency(results.monthlyInsurance)}</span>
                    </div>
                    {results.monthlyPMI > 0 && (
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">PMI</span>
                        <span className="font-medium text-orange-600">{formatCurrency(results.monthlyPMI)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-3 -mx-3">
                      <span className="font-bold text-gray-900">Total Monthly</span>
                      <span className="font-bold text-blue-600">{formatCurrency(results.totalMonthlyHousing)}</span>
                    </div>
                  </div>
                </div>

                {/* Cash Needed */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cash Needed at Closing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Down Payment</span>
                      <span className="font-medium">{formatCurrency(results.downPayment)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Est. Closing Costs</span>
                      <span className="font-medium">{formatCurrency(results.closingCosts)}</span>
                    </div>
                    <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-3 -mx-3">
                      <span className="font-bold text-gray-900">Total Cash Needed</span>
                      <span className="font-bold text-blue-600">{formatCurrency(results.totalCashNeeded)}</span>
                    </div>
                  </div>
                </div>

                {/* DTI Ratios */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Debt-to-Income Ratios</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`text-3xl font-bold ${results.frontEndDTI <= 28 ? 'text-green-600' : 'text-orange-600'}`}>
                        {results.frontEndDTI.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Front-End DTI</div>
                      <div className="text-xs text-gray-500">(Target: ≤28%)</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`text-3xl font-bold ${results.backEndDTI <= 36 ? 'text-green-600' : 'text-orange-600'}`}>
                        {results.backEndDTI.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Back-End DTI</div>
                      <div className="text-xs text-gray-500">(Target: ≤36%)</div>
                    </div>
                  </div>
                </div>

                {/* Warnings and Positives */}
                {results.warnings.length > 0 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Warnings to Consider
                    </h3>
                    <ul className="space-y-2">
                      {results.warnings.map((warning, index) => (
                        <li key={index} className="flex items-start text-orange-700">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {results.positives.length > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Positive Indicators
                    </h3>
                    <ul className="space-y-2">
                      {results.positives.map((positive, index) => (
                        <li key={index} className="flex items-start text-green-700">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          {positive}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Emergency Fund */}
                <div className={`rounded-xl p-6 ${results.remainingSavings >= results.emergencyFundNeeded ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 flex items-center ${results.remainingSavings >= results.emergencyFundNeeded ? 'text-green-800' : 'text-red-800'}`}>
                    <Shield className="h-5 w-5 mr-2" />
                    Post-Closing Emergency Fund
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Remaining Savings</div>
                      <div className={`text-2xl font-bold ${results.remainingSavings >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
                        {formatCurrency(results.remainingSavings)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">6-Month Fund Needed</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {formatCurrency(results.emergencyFundNeeded)}
                      </div>
                    </div>
                  </div>
                  {results.remainingSavings < results.emergencyFundNeeded && (
                    <p className="mt-4 text-red-700 text-sm">
                      <AlertTriangle className="h-4 w-4 inline mr-1" />
                      Your post-closing savings would be below the recommended 6-month emergency fund. 
                      This puts you at significant financial risk if unexpected expenses occur.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-center text-gray-500">
                  <Info className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">Enter your financial information to see your readiness assessment</p>
                </div>

                {/* Educational Content */}
                <div className="mt-8 space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Front-End DTI (28% Rule)</h4>
                    <p className="text-sm text-gray-600">
                      Your total housing costs should not exceed 28% of your gross monthly income.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Back-End DTI (36% Rule)</h4>
                    <p className="text-sm text-gray-600">
                      Total monthly debt payments (housing + other debts) should not exceed 36% of gross income.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Emergency Fund</h4>
                    <p className="text-sm text-gray-600">
                      After closing, you should have at least 6 months of expenses saved for emergencies.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">PMI (Private Mortgage Insurance)</h4>
                    <p className="text-sm text-gray-600">
                      Required when down payment is less than 20%. Adds to your monthly payment until you have 20% equity.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReadiness;
