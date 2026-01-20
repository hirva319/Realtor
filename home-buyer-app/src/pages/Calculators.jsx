import { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Home, 
  Percent,
  TrendingUp,
  PiggyBank,
  CreditCard,
  ArrowRight
} from 'lucide-react';

const Calculators = () => {
  const [activeCalc, setActiveCalc] = useState('monthly');

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Monthly Payment Calculator
  const MonthlyPaymentCalc = () => {
    const [inputs, setInputs] = useState({
      homePrice: 400000,
      downPayment: 80000,
      interestRate: 7,
      loanTerm: 30,
      propertyTax: 1.2,
      insurance: 1500,
      hoa: 0,
    });

    const loanAmount = inputs.homePrice - inputs.downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = inputs.loanTerm * 12;
    
    const monthlyPrincipalInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const monthlyPropertyTax = (inputs.homePrice * (inputs.propertyTax / 100)) / 12;
    const monthlyInsurance = inputs.insurance / 12;
    const pmi = inputs.downPayment / inputs.homePrice < 0.20 ? (loanAmount * 0.01) / 12 : 0;
    const totalMonthly = monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance + pmi + inputs.hoa;

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Price</label>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={inputs.homePrice}
              onChange={(e) => setInputs({...inputs, homePrice: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-blue-600">{formatCurrency(inputs.homePrice)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment</label>
            <input
              type="range"
              min="0"
              max={inputs.homePrice * 0.5}
              step="5000"
              value={inputs.downPayment}
              onChange={(e) => setInputs({...inputs, downPayment: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-blue-600">
              {formatCurrency(inputs.downPayment)} ({((inputs.downPayment / inputs.homePrice) * 100).toFixed(1)}%)
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
            <input
              type="range"
              min="3"
              max="12"
              step="0.125"
              value={inputs.interestRate}
              onChange={(e) => setInputs({...inputs, interestRate: parseFloat(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-blue-600">{inputs.interestRate}%</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term</label>
            <select
              value={inputs.loanTerm}
              onChange={(e) => setInputs({...inputs, loanTerm: parseInt(e.target.value)})}
              className="input-field"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Tax Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={inputs.propertyTax}
                onChange={(e) => setInputs({...inputs, propertyTax: parseFloat(e.target.value)})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual Insurance ($)</label>
              <input
                type="number"
                value={inputs.insurance}
                onChange={(e) => setInputs({...inputs, insurance: parseInt(e.target.value)})}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly HOA</label>
            <input
              type="number"
              value={inputs.hoa}
              onChange={(e) => setInputs({...inputs, hoa: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Monthly Payment Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-blue-400">
              <span className="text-blue-100">Principal & Interest</span>
              <span className="font-semibold">{formatCurrency(monthlyPrincipalInterest)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-400">
              <span className="text-blue-100">Property Tax</span>
              <span className="font-semibold">{formatCurrency(monthlyPropertyTax)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-400">
              <span className="text-blue-100">Insurance</span>
              <span className="font-semibold">{formatCurrency(monthlyInsurance)}</span>
            </div>
            {pmi > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-blue-400">
                <span className="text-blue-100">PMI</span>
                <span className="font-semibold text-orange-300">{formatCurrency(pmi)}</span>
              </div>
            )}
            {inputs.hoa > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-blue-400">
                <span className="text-blue-100">HOA</span>
                <span className="font-semibold">{formatCurrency(inputs.hoa)}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-4 bg-white/10 rounded-lg px-4 mt-4">
              <span className="font-bold text-lg">Total Monthly</span>
              <span className="font-bold text-2xl">{formatCurrency(totalMonthly)}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-blue-100">
              Loan Amount: {formatCurrency(loanAmount)}
              {pmi > 0 && (
                <span className="block mt-1 text-orange-300">
                  PMI required (down payment &lt; 20%)
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Affordability Calculator
  const AffordabilityCalc = () => {
    const [inputs, setInputs] = useState({
      annualIncome: 100000,
      monthlyDebts: 500,
      downPayment: 60000,
      interestRate: 7,
    });

    const monthlyIncome = inputs.annualIncome / 12;
    const maxHousingPayment28 = monthlyIncome * 0.28;
    const maxTotalPayment36 = monthlyIncome * 0.36;
    const availableForHousing = Math.min(maxHousingPayment28, maxTotalPayment36 - inputs.monthlyDebts);
    
    // Estimate affordable home price (simplified)
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = 360;
    const monthlyTaxInsurance = 400; // Rough estimate
    const monthlyPIAvailable = availableForHousing - monthlyTaxInsurance;
    
    const loanAmount = monthlyPIAvailable * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
    const affordableHome = loanAmount + inputs.downPayment;

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Gross Income</label>
            <input
              type="range"
              min="30000"
              max="500000"
              step="5000"
              value={inputs.annualIncome}
              onChange={(e) => setInputs({...inputs, annualIncome: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-green-600">{formatCurrency(inputs.annualIncome)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Debt Payments</label>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={inputs.monthlyDebts}
              onChange={(e) => setInputs({...inputs, monthlyDebts: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-green-600">{formatCurrency(inputs.monthlyDebts)}/mo</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Down Payment</label>
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={inputs.downPayment}
              onChange={(e) => setInputs({...inputs, downPayment: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-green-600">{formatCurrency(inputs.downPayment)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
            <input
              type="range"
              min="3"
              max="12"
              step="0.125"
              value={inputs.interestRate}
              onChange={(e) => setInputs({...inputs, interestRate: parseFloat(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-green-600">{inputs.interestRate}%</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Affordability Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-green-400">
              <span className="text-green-100">Monthly Income</span>
              <span className="font-semibold">{formatCurrency(monthlyIncome)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-400">
              <span className="text-green-100">Max Housing (28% rule)</span>
              <span className="font-semibold">{formatCurrency(maxHousingPayment28)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-400">
              <span className="text-green-100">Max Total Debt (36% rule)</span>
              <span className="font-semibold">{formatCurrency(maxTotalPayment36)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-400">
              <span className="text-green-100">Available for Housing</span>
              <span className="font-semibold">{formatCurrency(availableForHousing)}</span>
            </div>
            <div className="flex justify-between items-center py-4 bg-white/10 rounded-lg px-4 mt-4">
              <span className="font-bold text-lg">Estimated Max Home Price</span>
              <span className="font-bold text-2xl">{formatCurrency(Math.max(0, affordableHome))}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-green-100">
              This estimate follows the 28/36 rule. Your actual approval may vary based on credit score, assets, and other factors.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Rent vs Buy Calculator
  const RentVsBuyCalc = () => {
    const [inputs, setInputs] = useState({
      monthlyRent: 2000,
      homePrice: 400000,
      downPayment: 80000,
      interestRate: 7,
      appreciation: 3,
      yearsToStay: 7,
    });

    const loanAmount = inputs.homePrice - inputs.downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = 360;
    const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    // Additional costs
    const monthlyPropertyTax = (inputs.homePrice * 0.012) / 12;
    const monthlyInsurance = 125;
    const monthlyMaintenance = (inputs.homePrice * 0.01) / 12;
    const totalMonthlyCost = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;
    
    // Rent over time (3% annual increase)
    const totalRent = Array.from({ length: inputs.yearsToStay }, (_, i) => 
      inputs.monthlyRent * 12 * Math.pow(1.03, i)
    ).reduce((a, b) => a + b, 0);
    
    // Home value after years
    const futureHomeValue = inputs.homePrice * Math.pow(1 + inputs.appreciation / 100, inputs.yearsToStay);
    
    // Calculate equity built
    const monthsPaid = inputs.yearsToStay * 12;
    let remainingBalance = loanAmount;
    for (let i = 0; i < monthsPaid; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyMortgage - interestPayment;
      remainingBalance -= principalPayment;
    }
    const equityBuilt = futureHomeValue - remainingBalance;
    
    // Total cost of buying
    const totalBuyingCosts = (totalMonthlyCost * monthsPaid) + inputs.downPayment;
    const netCostOfBuying = totalBuyingCosts - (equityBuilt - inputs.downPayment);

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Rent</label>
            <input
              type="range"
              min="500"
              max="5000"
              step="50"
              value={inputs.monthlyRent}
              onChange={(e) => setInputs({...inputs, monthlyRent: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-purple-600">{formatCurrency(inputs.monthlyRent)}/mo</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Purchase Price</label>
            <input
              type="range"
              min="100000"
              max="1500000"
              step="10000"
              value={inputs.homePrice}
              onChange={(e) => setInputs({...inputs, homePrice: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-purple-600">{formatCurrency(inputs.homePrice)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment</label>
            <input
              type="range"
              min="0"
              max={inputs.homePrice * 0.5}
              step="5000"
              value={inputs.downPayment}
              onChange={(e) => setInputs({...inputs, downPayment: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-purple-600">{formatCurrency(inputs.downPayment)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Appreciation Rate</label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={inputs.appreciation}
              onChange={(e) => setInputs({...inputs, appreciation: parseFloat(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-purple-600">{inputs.appreciation}%/year</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Years You Plan to Stay</label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={inputs.yearsToStay}
              onChange={(e) => setInputs({...inputs, yearsToStay: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-purple-600">{inputs.yearsToStay} years</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Rent vs Buy Comparison</h3>
          
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">If You Rent</h4>
              <div className="flex justify-between">
                <span className="text-purple-200">Total Rent Paid ({inputs.yearsToStay} yrs)</span>
                <span className="font-semibold">{formatCurrency(totalRent)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-purple-200">Equity Built</span>
                <span className="font-semibold">{formatCurrency(0)}</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">If You Buy</h4>
              <div className="flex justify-between">
                <span className="text-purple-200">Monthly Cost (PITI+)</span>
                <span className="font-semibold">{formatCurrency(totalMonthlyCost)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-purple-200">Future Home Value</span>
                <span className="font-semibold">{formatCurrency(futureHomeValue)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-purple-200">Equity After {inputs.yearsToStay} Years</span>
                <span className="font-semibold">{formatCurrency(equityBuilt)}</span>
              </div>
            </div>

            <div className="py-4 border-t border-purple-400">
              <div className="text-center">
                <span className="text-purple-200 block">Net Advantage of Buying</span>
                <span className={`font-bold text-3xl ${totalRent - netCostOfBuying > 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {formatCurrency(totalRent - netCostOfBuying)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-purple-100">
              {inputs.yearsToStay < 5 
                ? "Warning: Buying for less than 5 years often doesn't make financial sense due to transaction costs."
                : "This analysis assumes 3% annual rent increases and doesn't include potential investment returns on the down payment."}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Emergency Fund Calculator
  const EmergencyFundCalc = () => {
    const [inputs, setInputs] = useState({
      monthlyMortgage: 2500,
      monthlyUtilities: 300,
      monthlyFood: 600,
      monthlyTransport: 400,
      monthlyInsurance: 300,
      monthlyOther: 500,
      currentSavings: 30000,
    });

    const totalMonthlyExpenses = inputs.monthlyMortgage + inputs.monthlyUtilities + 
      inputs.monthlyFood + inputs.monthlyTransport + inputs.monthlyInsurance + inputs.monthlyOther;
    const threeMonthFund = totalMonthlyExpenses * 3;
    const sixMonthFund = totalMonthlyExpenses * 6;
    const fundCoverage = inputs.currentSavings / totalMonthlyExpenses;

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Mortgage/Rent</label>
            <input
              type="number"
              value={inputs.monthlyMortgage}
              onChange={(e) => setInputs({...inputs, monthlyMortgage: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Utilities</label>
            <input
              type="number"
              value={inputs.monthlyUtilities}
              onChange={(e) => setInputs({...inputs, monthlyUtilities: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Food/Groceries</label>
            <input
              type="number"
              value={inputs.monthlyFood}
              onChange={(e) => setInputs({...inputs, monthlyFood: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Transportation</label>
            <input
              type="number"
              value={inputs.monthlyTransport}
              onChange={(e) => setInputs({...inputs, monthlyTransport: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Insurance (health, auto)</label>
            <input
              type="number"
              value={inputs.monthlyInsurance}
              onChange={(e) => setInputs({...inputs, monthlyInsurance: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Other Monthly Expenses</label>
            <input
              type="number"
              value={inputs.monthlyOther}
              onChange={(e) => setInputs({...inputs, monthlyOther: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings</label>
            <input
              type="number"
              value={inputs.currentSavings}
              onChange={(e) => setInputs({...inputs, currentSavings: parseInt(e.target.value) || 0})}
              className="input-field"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Emergency Fund Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-orange-300">
              <span className="text-orange-100">Total Monthly Expenses</span>
              <span className="font-semibold">{formatCurrency(totalMonthlyExpenses)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-orange-300">
              <span className="text-orange-100">3-Month Fund (Minimum)</span>
              <span className="font-semibold">{formatCurrency(threeMonthFund)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-orange-300">
              <span className="text-orange-100">6-Month Fund (Recommended)</span>
              <span className="font-semibold">{formatCurrency(sixMonthFund)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-orange-300">
              <span className="text-orange-100">Your Current Savings</span>
              <span className="font-semibold">{formatCurrency(inputs.currentSavings)}</span>
            </div>
            
            <div className="py-4 bg-white/10 rounded-lg px-4 mt-4">
              <div className="text-center">
                <span className="text-orange-100 block">Current Coverage</span>
                <span className={`font-bold text-3xl ${fundCoverage >= 6 ? 'text-green-300' : fundCoverage >= 3 ? 'text-yellow-300' : 'text-red-300'}`}>
                  {fundCoverage.toFixed(1)} months
                </span>
              </div>
            </div>

            {fundCoverage < 6 && (
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-sm">
                  {fundCoverage < 3 
                    ? `You need to save ${formatCurrency(threeMonthFund - inputs.currentSavings)} more to reach minimum 3-month coverage.`
                    : `You need to save ${formatCurrency(sixMonthFund - inputs.currentSavings)} more to reach recommended 6-month coverage.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Closing Costs Calculator
  const ClosingCostsCalc = () => {
    const [inputs, setInputs] = useState({
      homePrice: 400000,
      loanAmount: 320000,
      state: 'average',
    });

    const stateTaxRates = {
      average: 0.01,
      low: 0.005,
      high: 0.02,
    };

    const lenderFees = inputs.loanAmount * 0.01;
    const titleInsurance = inputs.homePrice * 0.005;
    const escrowFees = 2000;
    const appraisalFee = 500;
    const inspectionFee = 500;
    const transferTax = inputs.homePrice * stateTaxRates[inputs.state];
    const prepaidTaxes = (inputs.homePrice * 0.012) / 12 * 3;
    const prepaidInsurance = 1500;
    const attorneyFees = 1500;
    
    const totalClosingCosts = lenderFees + titleInsurance + escrowFees + appraisalFee + 
      inspectionFee + transferTax + prepaidTaxes + prepaidInsurance + attorneyFees;
    const percentOfPrice = (totalClosingCosts / inputs.homePrice) * 100;

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Price</label>
            <input
              type="range"
              min="100000"
              max="1500000"
              step="10000"
              value={inputs.homePrice}
              onChange={(e) => setInputs({...inputs, homePrice: parseInt(e.target.value), loanAmount: parseInt(e.target.value) * 0.8})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-teal-600">{formatCurrency(inputs.homePrice)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount</label>
            <input
              type="range"
              min={inputs.homePrice * 0.5}
              max={inputs.homePrice * 0.97}
              step="5000"
              value={inputs.loanAmount}
              onChange={(e) => setInputs({...inputs, loanAmount: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-lg font-semibold text-teal-600">{formatCurrency(inputs.loanAmount)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State Transfer Tax Level</label>
            <select
              value={inputs.state}
              onChange={(e) => setInputs({...inputs, state: e.target.value})}
              className="input-field"
            >
              <option value="low">Low (e.g., Texas, Colorado)</option>
              <option value="average">Average (Most States)</option>
              <option value="high">High (e.g., NY, NJ, PA)</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Estimated Closing Costs</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Lender Fees (1%)</span>
              <span>{formatCurrency(lenderFees)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Title Insurance</span>
              <span>{formatCurrency(titleInsurance)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Escrow/Settlement Fees</span>
              <span>{formatCurrency(escrowFees)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Appraisal</span>
              <span>{formatCurrency(appraisalFee)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Home Inspection</span>
              <span>{formatCurrency(inspectionFee)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Transfer Tax</span>
              <span>{formatCurrency(transferTax)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Prepaid Taxes (3 mo)</span>
              <span>{formatCurrency(prepaidTaxes)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Prepaid Insurance (1 yr)</span>
              <span>{formatCurrency(prepaidInsurance)}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-teal-400">
              <span className="text-teal-100">Attorney Fees</span>
              <span>{formatCurrency(attorneyFees)}</span>
            </div>
            
            <div className="flex justify-between items-center py-4 bg-white/10 rounded-lg px-4 mt-4">
              <span className="font-bold">Total Closing Costs</span>
              <div className="text-right">
                <span className="font-bold text-xl">{formatCurrency(totalClosingCosts)}</span>
                <span className="block text-teal-200 text-xs">({percentOfPrice.toFixed(1)}% of price)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-teal-100">
              Actual costs vary by location and lender. Always review the Loan Estimate and compare to Closing Disclosure.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const calculators = [
    { id: 'monthly', name: 'Monthly Payment', icon: Home, component: MonthlyPaymentCalc },
    { id: 'affordability', name: 'Affordability', icon: DollarSign, component: AffordabilityCalc },
    { id: 'rentvsbuy', name: 'Rent vs Buy', icon: TrendingUp, component: RentVsBuyCalc },
    { id: 'emergency', name: 'Emergency Fund', icon: PiggyBank, component: EmergencyFundCalc },
    { id: 'closing', name: 'Closing Costs', icon: CreditCard, component: ClosingCostsCalc },
  ];

  const ActiveCalculator = calculators.find(c => c.id === activeCalc)?.component || MonthlyPaymentCalc;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Calculator className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Calculators</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use these tools to understand the true costs of home ownership and make informed decisions.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalc(calc.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeCalc === calc.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{calc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Calculator */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <ActiveCalculator />
        </div>

        {/* Tips Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">28/36 Rule</h3>
            <p className="text-blue-700 text-sm">
              Housing costs should not exceed 28% of gross income. Total debt should not exceed 36%.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-2">Emergency Fund</h3>
            <p className="text-green-700 text-sm">
              Maintain 6 months of expenses after closing. This protects against job loss and unexpected repairs.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-6">
            <h3 className="font-semibold text-orange-900 mb-2">Hidden Costs</h3>
            <p className="text-orange-700 text-sm">
              Don't forget maintenance (1-2% of value/year), utilities, HOA fees, and potential PMI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
