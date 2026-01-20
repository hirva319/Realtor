import { useState } from 'react';
import { 
  DollarSign, 
  Search, 
  FileText, 
  ClipboardCheck, 
  Home, 
  Key,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Shield,
  Calculator,
  Clock,
  Users,
  Building
} from 'lucide-react';

const BuyingPhases = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: 'Pre-Offer Phase',
      subtitle: 'Most Important - Financial Readiness',
      icon: DollarSign,
      color: 'blue',
      description: 'Before you start looking at homes, you must ensure you are financially prepared.',
      keyPoints: [
        {
          title: 'Down Payment Options',
          content: `Consider the tradeoffs:
• 3% - Minimum conventional (high PMI, limited equity)
• 5% - Low down payment (still has PMI)
• 10% - Moderate (reduced PMI)
• 20% - Recommended (no PMI, stronger negotiating position)`,
        },
        {
          title: 'Emergency Fund Requirement',
          content: 'After closing, you should have minimum 6 months of expenses saved. If post-close liquid savings would be less than 3-6 months, this is a serious red flag.',
        },
        {
          title: 'True Monthly Cost (PITI+)',
          content: `Calculate the REAL monthly cost:
• Principal & Interest
• Property Taxes
• Insurance (home + flood if needed)
• HOA fees
• Utilities
• Maintenance (budget 1-2% of home value annually)`,
        },
        {
          title: 'Risk Scenarios to Consider',
          content: `What happens if:
• Job loss occurs?
• Household drops to one income?
• Childcare costs increase?
• Property taxes/insurance rise significantly?`,
        },
      ],
      redFlag: 'If post-close liquid savings < 3-6 months expenses, you should not proceed.',
      moneyProtection: 'Never stretch beyond your means. Being "house poor" leads to financial stress and potential foreclosure.',
    },
    {
      id: 1,
      title: 'Market Analysis',
      subtitle: 'Understanding Value & Risk',
      icon: Search,
      color: 'green',
      description: 'Analyze the market to ensure you don\'t overpay and understand your exit strategy.',
      keyPoints: [
        {
          title: 'Days on Market (DOM)',
          content: 'Homes sitting longer than average (60+ days) often indicate overpricing or issues. This is leverage for negotiation.',
        },
        {
          title: 'Price Reductions',
          content: 'Track price reduction history. Multiple reductions signal seller motivation and potential negotiating leverage.',
        },
        {
          title: 'Comparable Sales',
          content: 'Focus on SOLD prices, not list prices. Look at $/sqft in the neighborhood over the past 3-6 months.',
        },
        {
          title: 'Neighborhood Liquidity',
          content: 'How fast do homes sell in this area? Low liquidity means potential difficulty selling if you need to exit.',
        },
        {
          title: 'Critical Question',
          content: '"If we needed to sell in 2-5 years, how bad could it get?" Always have an exit strategy.',
        },
      ],
      redFlag: 'Avoid paying list price when DOM > 60 days. Overpaying in low-liquidity neighborhoods is a common buyer mistake.',
      moneyProtection: 'Research comparable sales thoroughly. Never rely on list prices or Zestimates.',
    },
    {
      id: 2,
      title: 'Offer Strategy',
      subtitle: 'Negotiation Engine',
      icon: FileText,
      color: 'purple',
      description: 'Craft your offer strategically to protect your money while remaining competitive.',
      keyPoints: [
        {
          title: 'Offer Price Justification',
          content: 'Every offer should be backed by comparable sales data. Never offer based on emotion or fear of losing the house.',
        },
        {
          title: 'Concessions vs Price Cuts',
          content: `Sometimes concessions are smarter than lower price:
• Closing cost credits (immediate cash benefit)
• Rate buy-downs (can save thousands over loan life)
• Repair credits (you control the work)`,
        },
        {
          title: 'Escalation Clauses',
          content: 'Only use when you have true competition and know the maximum you\'re willing to pay. Always cap it.',
        },
        {
          title: 'Appraisal Gaps',
          content: 'Be extremely cautious. Agreeing to cover large gaps means paying more than the home is worth.',
        },
      ],
      redFlag: 'NEVER recommend waiving inspection, financing, or appraisal contingencies unless you explicitly accept the risk.',
      moneyProtection: 'Your offer should always include exit strategies if issues arise during due diligence.',
    },
    {
      id: 3,
      title: 'Contract Protections',
      subtitle: 'Critical Safety Nets',
      icon: Shield,
      color: 'orange',
      description: 'Understand every contingency and deadline to protect your earnest money.',
      keyPoints: [
        {
          title: 'Inspection Contingency',
          content: 'Allows you to negotiate repairs/credits or walk away based on inspection findings. NEVER waive this.',
        },
        {
          title: 'Financing Contingency',
          content: 'Protects you if your loan falls through. Without it, you could lose earnest money if financing fails.',
        },
        {
          title: 'Appraisal Contingency',
          content: 'Protects you from overpaying. If home appraises below offer price, you can renegotiate or exit.',
        },
        {
          title: 'Option Period / Due Diligence',
          content: 'Time to conduct inspections and back out for any reason. Understand when this period ends.',
        },
        {
          title: 'Earnest Money Risk',
          content: 'Know exactly when your earnest money becomes "at risk." Missing deadlines can cost you thousands.',
        },
      ],
      redFlag: 'Never let earnest money be at risk due to missed deadlines. Calendar EVERY deadline.',
      moneyProtection: 'Every contingency is a potential exit. Understand how and when you can use each one.',
    },
    {
      id: 4,
      title: 'Inspection Phase',
      subtitle: 'Where Buyers Lose Money Most',
      icon: ClipboardCheck,
      color: 'red',
      description: 'The inspection phase is critical for identifying issues that could cost thousands.',
      keyPoints: [
        {
          title: 'Standard Home Inspection',
          content: 'Covers general condition but is not comprehensive. Inspector is a generalist, not a specialist.',
        },
        {
          title: 'Specialist Inspections',
          content: `Consider these based on home age/conditions:
• Foundation specialist
• Sewer scope (especially 20+ year old homes)
• Roof inspection
• HVAC inspection
• Electrical inspection
• Pool/spa inspection`,
        },
        {
          title: 'Deal-Breaker Issues',
          content: `Serious concerns that may warrant walking away:
• Structural movement / foundation issues
• Aluminum wiring
• Active water intrusion
• Roof near end-of-life with no credit
• Environmental hazards (mold, asbestos, lead)`,
        },
        {
          title: 'Translating Findings',
          content: 'Convert every issue into: Financial impact, Negotiation leverage, and Walk-away triggers.',
        },
      ],
      redFlag: 'Never accept seller repairs without receipts from licensed contractors. Always prefer credits over repairs.',
      moneyProtection: 'Spend money on specialist inspections upfront to potentially save tens of thousands later.',
    },
    {
      id: 5,
      title: 'Renegotiation Strategy',
      subtitle: 'Converting Issues to Credits',
      icon: TrendingUp,
      color: 'teal',
      description: 'Use inspection findings strategically to negotiate price reductions or credits.',
      keyPoints: [
        {
          title: 'Prioritize Issues',
          content: `Rank by:
1. Safety concerns (immediate)
2. Structural/major systems
3. Cost to repair
4. Resale impact`,
        },
        {
          title: 'Credit vs Repair',
          content: 'Always prefer seller credits over seller repairs. You control quality and contractor selection with credits.',
        },
        {
          title: 'Documentation',
          content: 'Get quotes from licensed contractors for repairs. Use these as leverage in negotiations.',
        },
        {
          title: 'Know When to Walk',
          content: 'If issues are too significant or seller won\'t negotiate reasonably, be prepared to walk away.',
        },
      ],
      redFlag: 'Never accept cosmetic fixes over structural problems. Sellers often try to minimize issues.',
      moneyProtection: 'Every dollar in credits is money saved. Don\'t be afraid to ask for significant credits on major issues.',
    },
    {
      id: 6,
      title: 'Appraisal Phase',
      subtitle: 'The Silent Killer',
      icon: Calculator,
      color: 'indigo',
      description: 'The appraisal protects you from overpaying, but can also derail deals.',
      keyPoints: [
        {
          title: 'Understanding Appraisal',
          content: 'An independent assessment of home value. Lender requires this to ensure the collateral supports the loan.',
        },
        {
          title: 'Low Appraisal Strategies',
          content: `If appraisal comes in low:
1. Renegotiate price to appraised value
2. Request seller price reduction
3. Walk away (using appraisal contingency)
4. Cover gap with cash (LAST RESORT)`,
        },
        {
          title: 'Appraisal Gap Coverage',
          content: 'If you agreed to cover a gap, understand your maximum exposure. This is money you\'ll never recover.',
        },
        {
          title: 'Challenge Process',
          content: 'You can provide additional comparable sales to dispute a low appraisal, but success is not guaranteed.',
        },
      ],
      redFlag: 'Covering large appraisal gaps means you\'re paying more than the home is worth. Avoid this when possible.',
      moneyProtection: 'A low appraisal is the market telling you the price is too high. Listen to this signal.',
    },
    {
      id: 7,
      title: 'Closing Phase',
      subtitle: 'Final Money Check',
      icon: Key,
      color: 'emerald',
      description: 'The final step requires careful review of all costs and documents.',
      keyPoints: [
        {
          title: 'Closing Disclosure Review',
          content: `Audit for:
• Junk fees (unexplained charges)
• Title charges (compare to initial estimates)
• Double-counted fees
• Changes from Loan Estimate`,
        },
        {
          title: 'Verify Prorations',
          content: 'Check tax prorations, HOA dues, and any other prorated items for accuracy.',
        },
        {
          title: 'Insurance Verification',
          content: 'Confirm homeowner\'s insurance is correct and adequate. Consider flood insurance if in risk area.',
        },
        {
          title: 'Future Cost Awareness',
          content: `Be prepared for:
• Payment shock (first mortgage payment)
• Escrow increases after Year 1
• Property tax reassessment
• Maintenance costs`,
        },
      ],
      redFlag: 'Question any fee that wasn\'t disclosed earlier or seems excessive. Closing is your last chance to catch errors.',
      moneyProtection: 'Compare Closing Disclosure to Loan Estimate line by line. Significant changes may violate regulations.',
    },
  ];

  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
    orange: 'border-orange-500 bg-orange-50',
    red: 'border-red-500 bg-red-50',
    teal: 'border-teal-500 bg-teal-50',
    indigo: 'border-indigo-500 bg-indigo-50',
    emerald: 'border-emerald-500 bg-emerald-50',
  };

  const iconColorClasses = {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Home className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Buying Phases</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive guide to every phase of the home buying process, 
            with focus on protecting your money at each step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = expandedPhase === phase.id;

              return (
                <div key={phase.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full ${iconColorClasses[phase.color]} border-4 border-white shadow hidden md:block`}></div>

                  <div className={`ml-0 md:ml-16`}>
                    <div
                      className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${colorClasses[phase.color].split(' ')[0]} cursor-pointer transition-all duration-200 hover:shadow-lg`}
                      onClick={() => setExpandedPhase(isExpanded ? -1 : phase.id)}
                    >
                      {/* Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className={`${iconColorClasses[phase.color]} p-3 rounded-xl`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-500">Phase {index + 1}</span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                              <p className="text-sm text-gray-500">{phase.subtitle}</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                          </button>
                        </div>
                        <p className="mt-4 text-gray-600">{phase.description}</p>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className={`px-6 pb-6 ${colorClasses[phase.color].split(' ')[1]} border-t`}>
                          {/* Key Points */}
                          <div className="mt-6 space-y-4">
                            {phase.keyPoints.map((point, pointIndex) => (
                              <div key={pointIndex} className="bg-white rounded-lg p-4">
                                <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                                <p className="text-gray-600 text-sm whitespace-pre-line">{point.content}</p>
                              </div>
                            ))}
                          </div>

                          {/* Red Flag */}
                          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-red-800">Red Flag Warning</h4>
                                <p className="text-red-700 text-sm mt-1">{phase.redFlag}</p>
                              </div>
                            </div>
                          </div>

                          {/* Money Protection */}
                          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-green-800">Money Protection Tip</h4>
                                <p className="text-green-700 text-sm mt-1">{phase.moneyProtection}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Check Your Readiness?</h3>
          <p className="text-blue-100 mb-6">
            Before diving into house hunting, make sure you're financially prepared.
          </p>
          <a
            href="/financial-readiness"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Financial Readiness Calculator
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyingPhases;
