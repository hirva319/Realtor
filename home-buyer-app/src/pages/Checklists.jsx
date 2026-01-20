import { useState } from 'react';
import { 
  ClipboardList, 
  Check, 
  Circle,
  DollarSign,
  Search,
  FileText,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Calculator,
  Key,
  ChevronDown,
  ChevronUp,
  Download,
  RefreshCw
} from 'lucide-react';

const Checklists = () => {
  const [expandedChecklist, setExpandedChecklist] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (checklistId, itemId) => {
    const key = `${checklistId}-${itemId}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isItemChecked = (checklistId, itemId) => {
    return checkedItems[`${checklistId}-${itemId}`] || false;
  };

  const getCompletionPercentage = (checklist) => {
    const totalItems = checklist.items.length;
    const checkedCount = checklist.items.filter((_, index) => 
      isItemChecked(checklist.id, index)
    ).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const resetChecklist = (checklistId) => {
    const newChecked = { ...checkedItems };
    Object.keys(newChecked).forEach(key => {
      if (key.startsWith(`${checklistId}-`)) {
        delete newChecked[key];
      }
    });
    setCheckedItems(newChecked);
  };

  const checklists = [
    {
      id: 0,
      title: 'Pre-Approval Checklist',
      icon: DollarSign,
      color: 'blue',
      description: 'Documents and steps needed before house hunting',
      items: [
        'Calculate your debt-to-income ratio (aim for under 36%)',
        'Check your credit score and review credit report for errors',
        'Gather 2 years of tax returns',
        'Collect 2 months of bank statements',
        'Prepare pay stubs from the last 30 days',
        'Get employer verification letter if needed',
        'Compile list of all debts with monthly payments',
        'Document any large deposits in recent months',
        'Calculate how much you can afford for down payment',
        'Estimate closing costs (2-5% of home price)',
        'Ensure 6+ months expenses saved for emergencies',
        'Get pre-approval from at least 2-3 lenders',
        'Compare loan estimates from multiple lenders',
        'Lock in interest rate when ready',
      ],
    },
    {
      id: 1,
      title: 'House Hunting Checklist',
      icon: Search,
      color: 'green',
      description: 'What to research and look for during your search',
      items: [
        'Define must-haves vs nice-to-haves',
        'Research target neighborhoods thoroughly',
        'Check school ratings if applicable',
        'Research crime statistics for areas',
        'Verify commute times during rush hour',
        'Research flood zones and natural disaster risks',
        'Check days on market for properties',
        'Review price history and reductions',
        'Research comparable sales (not list prices)',
        'Calculate price per square foot for area',
        'Check HOA rules and fees if applicable',
        'Research property tax rates for area',
        'Consider future resale value',
        'Ask: "If we needed to sell in 3 years, how bad could it get?"',
      ],
    },
    {
      id: 2,
      title: 'Making an Offer Checklist',
      icon: FileText,
      color: 'purple',
      description: 'Steps to craft a protective, competitive offer',
      items: [
        'Research recent comparable sales to justify offer price',
        'Analyze days on market for negotiation leverage',
        'Include inspection contingency (NEVER waive)',
        'Include financing contingency',
        'Include appraisal contingency',
        'Set appropriate earnest money amount',
        'Determine option/due diligence period length',
        'Consider closing cost credits vs price reduction',
        'Decide on escalation clause if competing (with cap)',
        'Review seller disclosure statement',
        'Verify property boundaries and easements',
        'Check for any liens on property',
        'Have agent explain all contract terms',
        'Calendar ALL deadlines immediately',
      ],
    },
    {
      id: 3,
      title: 'Contract & Contingencies Checklist',
      icon: Shield,
      color: 'orange',
      description: 'Protect yourself during the contract period',
      items: [
        'Understand inspection contingency deadline',
        'Know financing contingency deadline',
        'Understand appraisal contingency terms',
        'Know when earnest money becomes non-refundable',
        'Set calendar reminders for ALL deadlines',
        'Understand option period vs due diligence period',
        'Know how to properly terminate if needed',
        'Understand what happens if you miss a deadline',
        'Review any HOA documents within deadline',
        'Understand seller disclosure requirements',
        'Know your rights if seller fails to disclose issues',
        'Document all communication in writing',
      ],
    },
    {
      id: 4,
      title: 'Inspection Checklist',
      icon: ClipboardCheck,
      color: 'red',
      description: 'Thorough inspection is your best protection',
      items: [
        'Hire licensed general home inspector',
        'Attend the inspection in person',
        'Consider foundation inspection (especially older homes)',
        'Get sewer/drain scope (homes 20+ years old)',
        'Check roof age and condition',
        'Have HVAC system inspected',
        'Check electrical panel and wiring type',
        'Test all appliances',
        'Check water heater age and condition',
        'Look for signs of water damage/intrusion',
        'Check for proper drainage around foundation',
        'Test all windows and doors',
        'Check attic insulation and ventilation',
        'Look for signs of pest damage',
        'Review inspection report thoroughly',
        'Get contractor quotes for major issues',
        'Identify deal-breaker issues',
        'Prepare negotiation strategy based on findings',
      ],
    },
    {
      id: 5,
      title: 'Renegotiation Checklist',
      icon: TrendingUp,
      color: 'teal',
      description: 'Convert inspection findings into credits or repairs',
      items: [
        'Prioritize issues by: safety, cost, resale impact',
        'Get written quotes from licensed contractors',
        'Request credits instead of seller repairs when possible',
        'Document all issues with photos',
        'Calculate total repair costs',
        'Determine walk-away point before negotiating',
        'Be prepared for seller counter-offers',
        'Know market conditions (affects leverage)',
        'Request any repairs be done by licensed contractors',
        'Require receipts and warranties for any repairs',
        'Get re-inspection for completed repairs',
        'Update contract with agreed terms in writing',
      ],
    },
    {
      id: 6,
      title: 'Appraisal Checklist',
      icon: Calculator,
      color: 'indigo',
      description: 'Prepare for and respond to appraisal results',
      items: [
        'Understand what appraiser is evaluating',
        'Provide appraiser with list of home improvements',
        'Share recent comparable sales data',
        'Keep property clean and accessible for appraiser',
        'Know your options if appraisal comes in low',
        'Calculate maximum appraisal gap you can cover',
        'Prepare to renegotiate if appraisal is low',
        'Know how to challenge a low appraisal',
        'Understand rebuttal process and timeline',
        'Have backup plan if appraisal issue cannot be resolved',
      ],
    },
    {
      id: 7,
      title: 'Closing Checklist',
      icon: Key,
      color: 'emerald',
      description: 'Final steps to successfully close on your home',
      items: [
        'Review Closing Disclosure at least 3 days before closing',
        'Compare Closing Disclosure to original Loan Estimate',
        'Question any unexpected fees or changes',
        'Verify tax prorations are correct',
        'Confirm HOA dues proration',
        'Verify insurance policy is in place',
        'Complete final walk-through before closing',
        'Check that all agreed repairs are completed',
        'Test all systems and appliances at walk-through',
        'Bring required identification to closing',
        'Bring certified funds or arrange wire transfer',
        'Review all documents before signing',
        'Get copies of all signed documents',
        'Verify deed is properly recorded',
        'Change locks immediately after closing',
        'Transfer utilities to your name',
        'File change of address with post office',
        'Update insurance policy if needed',
      ],
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    teal: 'bg-teal-100 text-teal-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    emerald: 'bg-emerald-100 text-emerald-600',
  };

  const progressColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
    teal: 'bg-teal-600',
    indigo: 'bg-indigo-600',
    emerald: 'bg-emerald-600',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <ClipboardList className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Buying Checklists</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay organized with comprehensive checklists for every phase. 
            Check off items as you complete them.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Progress</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {checklists.map((checklist) => {
              const percentage = getCompletionPercentage(checklist);
              return (
                <div key={checklist.id} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke={percentage === 100 ? '#10b981' : '#3b82f6'}
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${(percentage / 100) * 176} 176`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                      {percentage}%
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 truncate block">{checklist.title.split(' ')[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Checklists */}
        <div className="space-y-4">
          {checklists.map((checklist) => {
            const Icon = checklist.icon;
            const isExpanded = expandedChecklist === checklist.id;
            const percentage = getCompletionPercentage(checklist);

            return (
              <div key={checklist.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setExpandedChecklist(isExpanded ? -1 : checklist.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${colorClasses[checklist.color]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{checklist.title}</h3>
                        <p className="text-sm text-gray-500">{checklist.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className={`text-lg font-semibold ${percentage === 100 ? 'text-green-600' : 'text-gray-900'}`}>
                          {percentage}%
                        </span>
                        <span className="text-sm text-gray-500 block">
                          {checklist.items.filter((_, i) => isItemChecked(checklist.id, i)).length}/{checklist.items.length}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${progressColors[checklist.color]} transition-all duration-300`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                {/* Items */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t bg-gray-50">
                    <div className="flex justify-end pt-4 pb-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          resetChecklist(checklist.id);
                        }}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        <RefreshCw className="h-4 w-4" />
                        <span>Reset</span>
                      </button>
                    </div>
                    <ul className="space-y-2">
                      {checklist.items.map((item, index) => {
                        const checked = isItemChecked(checklist.id, index);
                        return (
                          <li
                            key={index}
                            onClick={() => toggleItem(checklist.id, index)}
                            className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                              checked ? 'bg-green-50' : 'bg-white hover:bg-gray-100'
                            }`}
                          >
                            <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                              checked 
                                ? 'bg-green-500 border-green-500' 
                                : 'border-gray-300'
                            }`}>
                              {checked && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <span className={`text-sm ${checked ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-4">Tips for Using These Checklists</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start space-x-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Complete each checklist in order as you progress through your home buying journey</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Don't skip items - each one is designed to protect your money or prevent problems</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Calendar all deadlines as soon as they're known - missing deadlines costs money</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Keep all documentation organized - you'll need it throughout the process</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checklists;
