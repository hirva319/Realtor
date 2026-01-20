import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Star,
  Handshake,
  Eye,
  XCircle,
  Clock,
  Phone,
  FileSearch,
  BadgeDollarSign,
  PiggyBank,
  Building,
  Percent,
  Calendar,
  Users,
  Hammer,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  ArrowRight,
  CircleDollarSign,
  HelpCircle
} from 'lucide-react';

// Simple card for key facts
const FactCard = ({ icon: Icon, title, value, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
  };
  
  return (
    <div className={`${colors[color]} border-2 rounded-xl p-4 text-center`}>
      <Icon className="h-8 w-8 mx-auto mb-2" />
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm font-medium">{title}</div>
    </div>
  );
};

// Do and Don't comparison
const DoAndDont = ({ doItems, dontItems }) => (
  <div className="grid md:grid-cols-2 gap-4 my-4">
    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3 text-green-700 font-bold">
        <ThumbsUp className="h-5 w-5" />
        DO THIS
      </div>
      <ul className="space-y-2">
        {doItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3 text-red-700 font-bold">
        <ThumbsDown className="h-5 w-5" />
        DON'T DO THIS
      </div>
      <ul className="space-y-2">
        {dontItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
            <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Simple tip box
const TipBox = ({ children, type = 'tip' }) => {
  const styles = {
    tip: 'bg-blue-50 border-blue-300 text-blue-800',
    warning: 'bg-orange-50 border-orange-300 text-orange-800',
    danger: 'bg-red-50 border-red-300 text-red-800',
    success: 'bg-green-50 border-green-300 text-green-800',
    texas: 'bg-yellow-50 border-yellow-300 text-yellow-800',
  };
  const icons = {
    tip: Lightbulb,
    warning: AlertTriangle,
    danger: XCircle,
    success: CheckCircle,
    texas: Star,
  };
  const Icon = icons[type];
  
  return (
    <div className={`${styles[type]} border-2 rounded-xl p-4 my-4`}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
};

// Cost breakdown visual
const CostBreakdown = ({ items, total, title }) => (
  <div className="bg-gray-50 rounded-xl p-4 my-4">
    <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
          <span className="text-gray-600">{item.label}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
      <div className="flex justify-between items-center py-2 bg-blue-100 rounded-lg px-3 mt-2">
        <span className="font-bold text-blue-900">TOTAL</span>
        <span className="font-bold text-blue-900 text-lg">{total}</span>
      </div>
    </div>
  </div>
);

// Simple numbered step
const SimpleStep = ({ number, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
      {number}
    </div>
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  </div>
);

const BuyingPhases = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: 'Get Your Loan Ready First',
      subtitle: 'Do this before you look at any houses',
      icon: BadgeDollarSign,
      color: 'blue',
      shortDescription: 'Talk to a bank and find out how much money they will lend you.',
      content: (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <FactCard icon={Phone} title="Talk to banks" value="3+" color="blue" />
            <FactCard icon={FileText} title="Get pre-approved" value="Yes" color="green" />
            <FactCard icon={Clock} title="How long" value="1-2 weeks" color="orange" />
            <FactCard icon={DollarSign} title="Cost" value="Free" color="green" />
          </div>

          <h4 className="font-bold text-lg text-gray-900 mb-3">What is Pre-Approval?</h4>
          <p className="text-gray-600 mb-4">
            Pre-approval means the bank looked at your money situation and said "Yes, we will lend you up to $X amount." This is different from pre-qualification, which is just a guess.
          </p>

          <DoAndDont 
            doItems={[
              'Get pre-approved BEFORE looking at houses',
              'Talk to at least 3 different banks',
              'Ask about the interest rate AND fees',
              'Ask about Texas programs that can help you'
            ]}
            dontItems={[
              'Just look at houses without knowing your budget',
              'Only talk to one bank',
              'Skip reading the fine print',
              'Be afraid to ask questions'
            ]}
          />

          <h4 className="font-bold text-lg text-gray-900 mb-3">Papers You Will Need</h4>
          <div className="grid md:grid-cols-2 gap-2 mb-4">
            {[
              '2 years of tax returns',
              '2 years of W-2 forms',
              'Recent pay stubs (30 days)',
              'Bank statements (2-3 months)',
              'List of your debts',
              'Driver\'s license',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <TipBox type="texas">
            <strong>Texas Help Programs:</strong> Texas has programs that give you money for your down payment! Ask your bank about TSAHC and "My First Texas Home" programs.
          </TipBox>

          <TipBox type="tip">
            <strong>Save Money Tip:</strong> A small difference in interest rate can save you thousands! If Bank A offers 7% and Bank B offers 6.75%, that 0.25% difference saves about $17,000 over 30 years on a $320,000 loan.
          </TipBox>
        </>
      ),
    },
    {
      id: 1,
      title: 'Know What You Can Really Afford',
      subtitle: 'Your real costs are more than just the mortgage',
      icon: Calculator,
      color: 'green',
      shortDescription: 'The bank may approve you for more than you should actually spend.',
      content: (
        <>
          <TipBox type="warning">
            <strong>Important:</strong> Just because a bank says you CAN borrow $400,000 doesn't mean you SHOULD. Make sure you can still pay for food, car, and fun stuff!
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Your Real Monthly Cost</h4>
          <p className="text-gray-600 mb-4">
            When you buy a house, you don't just pay the mortgage. Here's what you REALLY pay each month:
          </p>

          <CostBreakdown 
            title="Example: $400,000 House in Texas"
            items={[
              { label: 'Mortgage payment', value: '$2,130' },
              { label: 'Property taxes', value: '$667' },
              { label: 'Home insurance', value: '$150' },
              { label: 'HOA fees (if any)', value: '$150' },
              { label: 'Repairs & maintenance', value: '$333' },
              { label: 'Utilities', value: '$200' },
            ]}
            total="$3,630/month"
          />

          <TipBox type="danger">
            <strong>Texas Warning:</strong> Texas has HIGH property taxes! We don't have state income tax, but we pay more in property taxes than most states. On a $400,000 home, expect to pay $7,000-$10,000 per year in property taxes alone.
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">The 28/36 Rule</h4>
          <p className="text-gray-600 mb-4">This is a simple rule to know if you can afford a house:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-blue-600">28%</div>
              <div className="text-sm text-blue-800 mt-2">
                Your house payment should be less than 28% of your monthly income
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-green-600">36%</div>
              <div className="text-sm text-green-800 mt-2">
                ALL your debts (house + car + cards) should be less than 36% of your income
              </div>
            </div>
          </div>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Don't Forget: Emergency Savings!</h4>
          <p className="text-gray-600 mb-4">
            After you buy, you should still have 6 months of expenses saved. Things break. People lose jobs. Don't spend all your savings on the house!
          </p>

          <DoAndDont 
            doItems={[
              'Keep 6 months of expenses saved after buying',
              'Include ALL costs when budgeting',
              'Leave room in your budget for fun',
              'Plan for repairs (things break!)'
            ]}
            dontItems={[
              'Spend all your savings on the down payment',
              'Only think about the mortgage payment',
              'Forget about property taxes',
              'Assume nothing will break'
            ]}
          />
        </>
      ),
    },
    {
      id: 2,
      title: 'Find the Right House',
      subtitle: 'Look beyond the pretty pictures',
      icon: Search,
      color: 'purple',
      shortDescription: 'Research the house AND the neighborhood before you fall in love.',
      content: (
        <>
          <h4 className="font-bold text-lg text-gray-900 mb-3">What to Research</h4>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
              <Calendar className="h-8 w-8 text-purple-600 mb-2" />
              <div className="font-bold text-purple-900">Days on Market</div>
              <div className="text-sm text-purple-700 mt-1">
                How long has it been for sale?
              </div>
              <div className="mt-3 space-y-1 text-xs">
                <div className="flex justify-between"><span>Under 7 days:</span><span className="font-semibold">Hot! Many buyers want it</span></div>
                <div className="flex justify-between"><span>7-30 days:</span><span className="font-semibold">Normal</span></div>
                <div className="flex justify-between"><span>60+ days:</span><span className="font-semibold">You can negotiate!</span></div>
              </div>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
              <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
              <div className="font-bold text-orange-900">Price Changes</div>
              <div className="text-sm text-orange-700 mt-1">
                Has the price dropped?
              </div>
              <div className="mt-3 text-xs text-orange-800">
                If the seller lowered the price, they might be getting desperate. This means you have more power to negotiate!
              </div>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <Building className="h-8 w-8 text-green-600 mb-2" />
              <div className="font-bold text-green-900">Neighborhood</div>
              <div className="text-sm text-green-700 mt-1">
                Can you sell it later?
              </div>
              <div className="mt-3 text-xs text-green-800">
                Ask yourself: "If I need to sell in 3-5 years, will people want to buy this house?"
              </div>
            </div>
          </div>

          <TipBox type="texas">
            <strong>Texas Foundation Warning:</strong> Texas has clay soil that moves a lot. This causes foundation problems. ALWAYS get a foundation inspection on any Texas home, especially if it's more than 10 years old. A $400 inspection can save you $30,000+ in repairs!
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Things That Make Houses Hard to Sell Later</h4>
          <div className="grid md:grid-cols-2 gap-2 mb-4">
            {[
              'Only 1 bathroom',
              'No garage (Texas is hot!)',
              'Weird floor plan',
              'On a busy street',
              'Near highway noise',
              'Bad school district',
              'High HOA fees',
              'Flooding area',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-red-50 rounded-lg p-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-800">{item}</span>
              </div>
            ))}
          </div>

          <DoAndDont 
            doItems={[
              'Check what similar homes SOLD for (not listed for)',
              'Visit at different times of day',
              'Talk to neighbors if you can',
              'Check flood maps online',
              'Research the school district'
            ]}
            dontItems={[
              'Fall in love with the first house',
              'Skip researching the neighborhood',
              'Ignore red flags because you like the kitchen',
              'Trust the listing price without checking'
            ]}
          />
        </>
      ),
    },
    {
      id: 3,
      title: 'Make an Offer',
      subtitle: 'Protect yourself with the right contract terms',
      icon: Handshake,
      color: 'orange',
      shortDescription: 'Your offer is more than just the price. Include protections!',
      content: (
        <>
          <h4 className="font-bold text-lg text-gray-900 mb-3">Parts of Your Offer</h4>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-gray-900">Purchase Price</div>
                  <div className="text-gray-600 text-sm">How much you'll pay for the house</div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-yellow-900">Option Fee + Option Period (TEXAS ONLY)</div>
                  <div className="text-yellow-800 text-sm mt-1">
                    <strong>This is your best protection!</strong>
                  </div>
                  <div className="text-yellow-700 text-sm mt-2">
                    You pay $100-$500 to the seller. In return, you get 7-14 days to back out for ANY reason. If you don't like what the inspector finds? Walk away. Changed your mind? Walk away. You only lose this small fee.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-gray-900">Earnest Money</div>
                  <div className="text-gray-600 text-sm">
                    A bigger deposit (usually 1-3% of price) that shows you're serious. This is held by the title company, NOT the seller. You get this back if you back out during your option period.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TipBox type="texas">
            <strong>Texas Option Period:</strong> This is YOUR best friend! Never skip it. Pay the $200-500 option fee - it's the best protection you can buy.
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Things You Can Negotiate (Most People Don't Know!)</h4>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="font-semibold text-green-900">Ask seller to pay your closing costs</div>
              <div className="text-green-700 text-sm">Could save you $10,000+ in cash at closing!</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="font-semibold text-green-900">Ask for repairs or repair money</div>
              <div className="text-green-700 text-sm">Better to get cash credit than let seller do cheap repairs</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="font-semibold text-green-900">Ask for a home warranty</div>
              <div className="text-green-700 text-sm">Covers repairs for the first year</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="font-semibold text-green-900">Negotiate the agent fees</div>
              <div className="text-green-700 text-sm">Yes, these are negotiable too!</div>
            </div>
          </div>

          <DoAndDont 
            doItems={[
              'Always include an option period',
              'Ask for seller help with closing costs',
              'Base your offer on what similar homes SOLD for',
              'Put ALL agreements in writing'
            ]}
            dontItems={[
              'Skip the option period to "win" the house',
              'Offer more than you can afford because you love it',
              'Trust verbal promises',
              'Let emotions drive your decisions'
            ]}
          />
        </>
      ),
    },
    {
      id: 4,
      title: 'Get the House Inspected',
      subtitle: 'Find problems BEFORE you buy',
      icon: Eye,
      color: 'red',
      shortDescription: 'Pay for inspections now to avoid expensive surprises later.',
      content: (
        <>
          <TipBox type="warning">
            <strong>Do this during your Option Period!</strong> Schedule inspections right away - you only have 7-14 days. If you find big problems, you can walk away and only lose your small option fee.
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Inspections You Need</h4>
          
          <div className="space-y-3 mb-6">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-gray-900">General Home Inspection</div>
                  <div className="text-gray-600 text-sm">Checks the whole house - roof, plumbing, electrical, etc.</div>
                </div>
                <div className="text-blue-600 font-bold">$350-500</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-yellow-900">Foundation Inspection</div>
                  <div className="text-yellow-700 text-sm">
                    <strong>VERY IMPORTANT IN TEXAS!</strong> Clay soil causes foundation problems.
                  </div>
                </div>
                <div className="text-yellow-700 font-bold">$300-500</div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-blue-200 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-gray-900">Sewer Line Check</div>
                  <div className="text-gray-600 text-sm">Camera goes into pipes to check for damage. Important for homes 20+ years old.</div>
                </div>
                <div className="text-blue-600 font-bold">$150-300</div>
              </div>
            </div>
          </div>

          <CostBreakdown 
            title="What Inspections Can Save You"
            items={[
              { label: 'Foundation repair', value: '$5,000 - $50,000' },
              { label: 'New roof', value: '$8,000 - $25,000' },
              { label: 'Sewer line replacement', value: '$5,000 - $25,000' },
              { label: 'HVAC replacement', value: '$5,000 - $15,000' },
              { label: 'Electrical panel', value: '$1,500 - $4,000' },
            ]}
            total="$500-1,500 in inspections can save you $50,000+"
          />

          <h4 className="font-bold text-lg text-gray-900 mb-3">Problems That Mean "Walk Away"</h4>
          <div className="grid md:grid-cols-2 gap-2 mb-4">
            {[
              'Major foundation problems',
              'Mold throughout the house',
              'Aluminum wiring (fire hazard)',
              'Active water leaks in walls',
              'Roof needs full replacement',
              'Major structural damage',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-red-50 rounded-lg p-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800">{item}</span>
              </div>
            ))}
          </div>

          <TipBox type="tip">
            <strong>Go to the inspection!</strong> Don't just read the report. Be there, ask questions, and see the problems yourself.
          </TipBox>
        </>
      ),
    },
    {
      id: 5,
      title: 'Negotiate Repairs',
      subtitle: 'Use inspection findings to save money',
      icon: Hammer,
      color: 'teal',
      shortDescription: 'Found problems? Ask for money off or repair credits.',
      content: (
        <>
          <h4 className="font-bold text-lg text-gray-900 mb-3">Ask for Money, Not Repairs!</h4>
          <p className="text-gray-600 mb-4">
            When the inspection finds problems, you can ask the seller to fix them OR give you money to fix them yourself. <strong>Always ask for the money!</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <div className="font-bold text-red-800 mb-2">If Seller Fixes It</div>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• They hire the cheapest person</li>
                <li>• You can't pick the contractor</li>
                <li>• Often done poorly</li>
                <li>• May just cover up problems</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="font-bold text-green-800 mb-2">If You Get Money</div>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• You pick the contractor</li>
                <li>• You control the quality</li>
                <li>• Get it done right</li>
                <li>• Often get more value</li>
              </ul>
            </div>
          </div>

          <h4 className="font-bold text-lg text-gray-900 mb-3">How to Prioritize What to Ask For</h4>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 bg-red-100 rounded-lg p-3">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">1st</div>
              <div>
                <div className="font-semibold text-red-900">Safety Issues</div>
                <div className="text-red-700 text-sm">Electrical problems, gas leaks, structural issues</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-orange-100 rounded-lg p-3">
              <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold">2nd</div>
              <div>
                <div className="font-semibold text-orange-900">Big Expensive Stuff</div>
                <div className="text-orange-700 text-sm">Roof, HVAC, foundation, plumbing</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-yellow-100 rounded-lg p-3">
              <div className="bg-yellow-600 text-white px-2 py-1 rounded text-sm font-bold">3rd</div>
              <div>
                <div className="font-semibold text-yellow-900">Medium Stuff</div>
                <div className="text-yellow-700 text-sm">Appliances, water heater, windows</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
              <div className="bg-gray-600 text-white px-2 py-1 rounded text-sm font-bold">4th</div>
              <div>
                <div className="font-semibold text-gray-900">Cosmetic Stuff</div>
                <div className="text-gray-700 text-sm">Paint, carpet, landscaping - don't worry about these</div>
              </div>
            </div>
          </div>

          <TipBox type="tip">
            <strong>Get written quotes!</strong> Before negotiating, get repair estimates from contractors. "The roof needs $8,000 in repairs according to ABC Roofing" is more powerful than "the roof looks bad."
          </TipBox>

          <DoAndDont 
            doItems={[
              'Ask for money/credits instead of repairs',
              'Get written quotes from contractors',
              'Focus on safety and expensive issues',
              'Be willing to walk away'
            ]}
            dontItems={[
              'Accept seller repairs',
              'Negotiate over paint color',
              'Give up on serious issues',
              'Forget you can still walk away'
            ]}
          />
        </>
      ),
    },
    {
      id: 6,
      title: 'The Appraisal',
      subtitle: 'The bank checks if the house is worth what you\'re paying',
      icon: FileSearch,
      color: 'indigo',
      shortDescription: 'The bank sends someone to make sure the house is worth the price.',
      content: (
        <>
          <h4 className="font-bold text-lg text-gray-900 mb-3">What is an Appraisal?</h4>
          <p className="text-gray-600 mb-4">
            The bank doesn't trust that the house is worth what you agreed to pay. They send an appraiser (a house value expert) to check. If the house isn't worth the price, the bank won't lend you the full amount.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-blue-900 mb-4">Example: What Happens if Appraisal is Low</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-blue-800">You agreed to pay:</span>
                <span className="font-bold text-blue-900">$420,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-blue-800">Appraiser says it's worth:</span>
                <span className="font-bold text-red-600">$400,000</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-blue-800">The gap:</span>
                <span className="font-bold text-red-600">$20,000</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold text-lg text-gray-900 mb-3">Your Options if Appraisal is Low</h4>
          
          <div className="space-y-3 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="font-semibold text-green-900">Option 1: Seller Lowers Price (BEST!)</div>
              <div className="text-green-700 text-sm">Ask the seller to drop the price to match the appraisal</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="font-semibold text-yellow-900">Option 2: Meet in the Middle</div>
              <div className="text-yellow-700 text-sm">You pay some extra, seller drops price some</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="font-semibold text-orange-900">Option 3: You Pay the Difference (Risky!)</div>
              <div className="text-orange-700 text-sm">You'd need extra cash AND you'd be paying more than it's worth</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="font-semibold text-blue-900">Option 4: Walk Away</div>
              <div className="text-blue-700 text-sm">If you have an appraisal contingency, you can cancel and get your earnest money back</div>
            </div>
          </div>

          <TipBox type="warning">
            <strong>A low appraisal is the market telling you the price is too high!</strong> Don't overpay just because you love the house. There will be other houses.
          </TipBox>
        </>
      ),
    },
    {
      id: 7,
      title: 'Closing Day',
      subtitle: 'Sign the papers and get your keys!',
      icon: Key,
      color: 'emerald',
      shortDescription: 'The final step - review everything, sign, and move in!',
      content: (
        <>
          <h4 className="font-bold text-lg text-gray-900 mb-3">Before Closing Day</h4>
          
          <div className="space-y-3 mb-6">
            <SimpleStep number="1" title="Review the Closing Disclosure" description="You'll get this 3 days before closing. It shows every cost. Compare it to what you were told earlier - any surprises?" />
            <SimpleStep number="2" title="Do a Final Walk-Through" description="Visit the house one more time. Make sure nothing is damaged and the seller moved out." />
            <SimpleStep number="3" title="Get Your Money Ready" description="You'll need a wire transfer or cashier's check. NEVER wire money without calling to confirm the account!" />
          </div>

          <TipBox type="danger">
            <strong>WIRE FRAUD WARNING!</strong> Criminals hack emails and send fake wire instructions. ALWAYS call your title company directly (use the number from their website, not from an email) to confirm where to send money.
          </TipBox>

          <h4 className="font-bold text-lg text-gray-900 mb-3">On Closing Day</h4>
          <p className="text-gray-600 mb-4">
            You'll go to the title company's office and sign a LOT of papers. Bring:
          </p>
          
          <div className="grid md:grid-cols-2 gap-2 mb-6">
            {[
              'Driver\'s license or passport',
              'Cashier\'s check or wire confirmation',
              'Proof of insurance',
              'Anything else your agent told you',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="font-bold text-lg text-gray-900 mb-3">After You Get the Keys</h4>
          
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm"><strong>Change the locks!</strong> You don't know who has keys.</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Transfer utilities to your name</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Update your address (post office, license)</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Find water/gas shutoffs and electrical panel</span>
            </div>
          </div>

          <TipBox type="texas">
            <strong>FILE YOUR HOMESTEAD EXEMPTION!</strong> This is super important in Texas! It can save you $1,000+ per year on property taxes. File with your county appraisal district between January 1 and April 30.
          </TipBox>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-2xl font-bold">Congratulations!</div>
            <div className="text-green-100">You're a homeowner!</div>
          </div>
        </>
      ),
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Buy a House</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, step-by-step guide. Click each step to learn more.
          </p>
          <div className="mt-4 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
            <Star className="h-4 w-4 mr-2" />
            Made for Texas
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {phases.map((phase, index) => (
              <div 
                key={phase.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all ${
                  expandedPhase === phase.id 
                    ? 'bg-blue-600 text-white scale-110' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setExpandedPhase(phase.id)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((expandedPhase + 1) / phases.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Don't Know a Term? */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-medium text-purple-900">Don't understand a word?</p>
                <p className="text-purple-700 text-sm">Check our dictionary for simple explanations.</p>
              </div>
            </div>
            <Link
              to="/dictionary"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Open Dictionary
            </Link>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isExpanded = expandedPhase === phase.id;

            return (
              <div key={phase.id}>
                <div
                  className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${colorClasses[phase.color].split(' ')[0]} cursor-pointer transition-all duration-200 hover:shadow-lg`}
                  onClick={() => setExpandedPhase(isExpanded ? -1 : phase.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`${iconColorClasses[phase.color]} p-3 rounded-xl`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Step {index + 1}</div>
                          <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                          <p className="text-sm text-gray-500">{phase.subtitle}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 ml-4">
                        {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">{phase.shortDescription}</p>
                  </div>

                  {isExpanded && (
                    <div className={`px-6 pb-6 ${colorClasses[phase.color].split(' ')[1]} border-t`}>
                      <div className="mt-6">
                        {phase.content}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to See if You Can Afford a House?</h3>
          <p className="text-blue-100 mb-6">
            Use our calculator to find out how much house you can buy.
          </p>
          <Link
            to="/financial-readiness"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Check What You Can Afford
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyingPhases;
