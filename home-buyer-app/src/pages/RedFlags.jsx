import { 
  AlertTriangle, 
  DollarSign, 
  FileText, 
  ClipboardCheck, 
  CreditCard,
  Heart,
  Shield,
  XCircle,
  CheckCircle,
  ArrowRight,
  Home
} from 'lucide-react';

const RedFlags = () => {
  const categories = [
    {
      title: 'Pricing Mistakes',
      icon: DollarSign,
      color: 'red',
      description: 'Where buyers commonly overpay',
      mistakes: [
        {
          mistake: 'Overpaying in low-liquidity neighborhoods',
          explanation: 'If homes in the area don\'t sell quickly, you may struggle to sell later without significant losses.',
          protection: 'Research how long homes typically stay on market in the area. Avoid paying premium prices in slow markets.',
        },
        {
          mistake: 'Ignoring resale value',
          explanation: 'Buying based only on current needs without considering future sellability (unusual layouts, bad location, etc.)',
          protection: 'Always ask: "Would the average buyer want this home?" Avoid over-customized or unusual properties.',
        },
        {
          mistake: 'Paying list price when DOM > 60 days',
          explanation: 'Homes sitting for extended periods often indicate overpricing. You have negotiating leverage.',
          protection: 'Check days on market and price reduction history. Make data-driven offers below asking.',
        },
        {
          mistake: 'Using list prices instead of sold prices for comparison',
          explanation: 'List prices are wishes. Sold prices are reality. Using list prices leads to overpaying.',
          protection: 'Always base your offer on comparable SOLD prices from the last 3-6 months.',
        },
        {
          mistake: 'Not accounting for needed repairs in offer price',
          explanation: 'Obvious issues (old roof, dated systems) should be factored into your offer, not ignored.',
          protection: 'Estimate repair costs before making offers. Deduct expected costs from your maximum price.',
        },
      ],
    },
    {
      title: 'Contract Mistakes',
      icon: FileText,
      color: 'orange',
      description: 'Dangerous contract decisions',
      mistakes: [
        {
          mistake: 'Missing deadlines',
          explanation: 'Missing a single deadline can forfeit your earnest money or contingency rights.',
          protection: 'Calendar EVERY deadline the moment you sign. Set reminders days before each one.',
        },
        {
          mistake: 'Waiving inspection contingency',
          explanation: 'You could be stuck buying a home with $50,000+ in hidden problems.',
          protection: 'NEVER waive inspection. The small risk of losing a bid is worth avoiding catastrophic loss.',
        },
        {
          mistake: 'Waiving financing contingency',
          explanation: 'If your loan falls through, you lose your earnest money with no protection.',
          protection: 'Only waive if you have 100% cash to close and are willing to lose earnest money.',
        },
        {
          mistake: 'Waiving appraisal contingency',
          explanation: 'You\'re agreeing to overpay if the home isn\'t worth the contract price.',
          protection: 'Understand the maximum gap you\'re willing to cover. Set a cap in your offer.',
        },
        {
          mistake: 'Putting down too much earnest money',
          explanation: 'Large earnest money = large risk if something goes wrong. Sellers often accept reasonable amounts.',
          protection: 'Offer the minimum earnest money that makes your offer competitive (typically 1-3% of price).',
        },
        {
          mistake: 'Agreeing to unlimited appraisal gaps',
          explanation: 'You could end up paying tens of thousands more than the home is worth.',
          protection: 'Always cap your appraisal gap coverage at a specific dollar amount.',
        },
      ],
    },
    {
      title: 'Inspection Mistakes',
      icon: ClipboardCheck,
      color: 'purple',
      description: 'Where most money is lost',
      mistakes: [
        {
          mistake: 'Accepting seller repairs instead of credits',
          explanation: 'Sellers often do minimum-quality repairs with the cheapest contractors.',
          protection: 'Always request credits so YOU can control the quality and timing of repairs.',
        },
        {
          mistake: 'Ignoring foundation or drainage issues',
          explanation: 'Foundation problems can cost $10,000-$100,000+ and affect resale value permanently.',
          protection: 'Get specialist foundation inspection if any concerns. Walk away from major structural issues.',
        },
        {
          mistake: 'Skipping sewer scope on older homes',
          explanation: 'Sewer line replacement can cost $5,000-$25,000. Problems are invisible without scoping.',
          protection: 'Always get sewer scope on homes 20+ years old. It\'s a $200 investment that could save thousands.',
        },
        {
          mistake: 'Not hiring specialist inspectors when needed',
          explanation: 'General inspectors are generalists. Complex issues need expert evaluation.',
          protection: 'Get specialists for: foundation, roof, HVAC, electrical, pool/spa when warranted.',
        },
        {
          mistake: 'Accepting cosmetic fixes over structural issues',
          explanation: 'Sellers may offer to paint or fix minor items while ignoring major concerns.',
          protection: 'Prioritize structural, safety, and major system issues. Don\'t be distracted by cosmetics.',
        },
        {
          mistake: 'Not attending the inspection',
          explanation: 'You miss the opportunity to see issues firsthand and ask questions.',
          protection: 'Always attend inspections. Walk through with the inspector and ask questions.',
        },
      ],
    },
    {
      title: 'Financing Mistakes',
      icon: CreditCard,
      color: 'blue',
      description: 'Loan decisions that cost thousands',
      mistakes: [
        {
          mistake: 'Not shopping multiple lenders',
          explanation: 'Rate differences of 0.25% can cost tens of thousands over the life of a loan.',
          protection: 'Get quotes from at least 3 lenders. Compare APR, not just rates.',
        },
        {
          mistake: 'Ignoring rate buy-downs',
          explanation: 'Seller-paid rate buy-downs can be more valuable than price reductions.',
          protection: 'Ask about buy-down options. Calculate long-term savings vs upfront costs.',
        },
        {
          mistake: 'Choosing wrong loan type for your timeline',
          explanation: 'ARMs can be dangerous if you\'ll stay long-term. 30-year may waste money if selling soon.',
          protection: 'Match loan type to your expected ownership period. When in doubt, choose fixed rate.',
        },
        {
          mistake: 'Over-stretching monthly budget',
          explanation: 'Being "approved" for a loan doesn\'t mean you can comfortably afford it.',
          protection: 'Budget for the true cost: PITI + HOA + utilities + maintenance. Leave room for life.',
        },
        {
          mistake: 'Making large purchases before closing',
          explanation: 'New debt or changed credit can derail your loan approval at the last minute.',
          protection: 'Don\'t buy cars, furniture, or make any large purchases until AFTER closing.',
        },
        {
          mistake: 'Not locking interest rate',
          explanation: 'Rates can increase significantly between pre-approval and closing.',
          protection: 'Lock your rate when you\'re comfortable with it. Understand lock expiration terms.',
        },
      ],
    },
    {
      title: 'Emotional Mistakes',
      icon: Heart,
      color: 'pink',
      description: 'When feelings override logic',
      mistakes: [
        {
          mistake: 'Falling in love with a house',
          explanation: 'Emotional attachment leads to overpaying, ignoring red flags, and poor decisions.',
          protection: 'Treat it as a financial transaction. There will always be other houses.',
        },
        {
          mistake: '"It will be fine" thinking',
          explanation: 'Minimizing concerns about inspection issues, finances, or red flags.',
          protection: 'If something concerns you now, it will concern you more later. Address issues head-on.',
        },
        {
          mistake: 'Fear of missing out (FOMO)',
          explanation: 'Rushing decisions, waiving protections, or overpaying due to perceived competition.',
          protection: 'There is no "dream home" worth financial disaster. Stay disciplined.',
        },
        {
          mistake: 'Competing against yourself',
          explanation: 'Bidding up when there may be no other real competition.',
          protection: 'Verify competition exists before escalating. Ask your agent for intel.',
        },
        {
          mistake: 'Ignoring spouse/partner concerns',
          explanation: 'One person\'s concerns often reveal important issues being overlooked.',
          protection: 'Both parties should be genuinely comfortable. If one has doubts, explore them fully.',
        },
        {
          mistake: 'Letting timeline pressure drive decisions',
          explanation: 'Lease ending, baby coming, etc. create artificial urgency that leads to bad choices.',
          protection: 'Plan ahead. Have backup options. Never let a deadline force a bad purchase.',
        },
      ],
    },
  ];

  const dealBreakers = [
    {
      issue: 'Structural movement / Foundation issues with unknown scope',
      reason: 'Costs are unpredictable and can be catastrophic. Affects resale permanently.',
    },
    {
      issue: 'Aluminum wiring',
      reason: 'Fire hazard. Expensive to remediate. Insurance may be difficult to obtain.',
    },
    {
      issue: 'Active water intrusion',
      reason: 'Indicates ongoing problem. Mold risk. Source may be difficult to identify.',
    },
    {
      issue: 'Roof near end-of-life with no credit offered',
      reason: 'New roof costs $8,000-$25,000+. Should not be your first expense as new owner.',
    },
    {
      issue: 'Environmental hazards (mold, asbestos, lead)',
      reason: 'Health risks and expensive remediation. May affect financing and insurance.',
    },
    {
      issue: 'Unpermitted additions or work',
      reason: 'May not be to code. Could be required to remove. Title/insurance complications.',
    },
    {
      issue: 'Boundary disputes or encroachments',
      reason: 'Legal headaches and potential loss of usable property.',
    },
  ];

  const colorClasses = {
    red: 'bg-red-100 text-red-600 border-red-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    pink: 'bg-pink-100 text-pink-600 border-pink-200',
  };

  const headerColors = {
    red: 'bg-red-600',
    orange: 'bg-orange-600',
    purple: 'bg-purple-600',
    blue: 'bg-blue-600',
    pink: 'bg-pink-600',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Red Flags & Common Mistakes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about the most common and costly mistakes that first-time home buyers make, 
            and how to protect yourself.
          </p>
        </div>

        {/* Deal Breakers Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 mb-12 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <XCircle className="h-8 w-8" />
            <h2 className="text-2xl font-bold">Potential Deal-Breakers</h2>
          </div>
          <p className="text-red-100 mb-6">
            These issues often warrant walking away from a purchase. The risk typically outweighs any potential reward.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {dealBreakers.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-1">{item.issue}</h4>
                <p className="text-red-200 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Category Header */}
                <div className={`${headerColors[category.color]} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-8 w-8" />
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-white/80">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Mistakes */}
                <div className="p-6 space-y-6">
                  {category.mistakes.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className={`p-2 rounded-lg ${colorClasses[category.color]} flex-shrink-0`}>
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.mistake}</h3>
                      </div>
                      
                      <div className="ml-12 space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium text-gray-700">Why it's dangerous: </span>
                            {item.explanation}
                          </p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-green-700 text-sm">
                              <span className="font-medium">Protection: </span>
                              {item.protection}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Golden Rules */}
        <div className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-8 w-8 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Golden Rules of Home Buying</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Never waive inspection, financing, or appraisal contingencies',
              'Calendar EVERY deadline immediately and set reminders',
              'Always prefer credits over seller repairs',
              'Base decisions on data, not emotion',
              'Always have an exit strategy',
              'If post-close savings < 3-6 months expenses, don\'t buy',
              'There will always be another house',
              'Act as if it\'s your own money (because it is)',
            ].map((rule, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gray-900 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Investment?</h3>
          <p className="text-gray-300 mb-6">
            Use our tools to make informed, data-driven decisions at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/financial-readiness"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Check Financial Readiness
            </a>
            <a
              href="/checklists"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <ClipboardCheck className="mr-2 h-5 w-5" />
              View Checklists
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedFlags;
