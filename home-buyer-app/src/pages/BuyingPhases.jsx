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
  Clock,
  Users,
  Building,
  Star,
  Handshake,
  Eye
} from 'lucide-react';

// Helper function to render text with bold formatting
const FormattedText = ({ text }) => {
  // Split by **text** pattern and render bold sections
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove ** and render as bold
          return <strong key={index} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const BuyingPhases = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: 'Get Pre-Approved First',
      subtitle: 'Before You Even Look at Houses',
      icon: DollarSign,
      color: 'blue',
      description: 'Never start house hunting without a pre-approval letter. This shows sellers you\'re serious and tells you exactly what you can afford.',
      keyPoints: [
        {
          title: 'Why Pre-Approval Matters',
          content: `Pre-approval is NOT the same as pre-qualification:

**Pre-qualification:** Quick estimate based on what you tell them. Means almost nothing.

**Pre-approval:** Lender actually verifies your income, assets, and credit. They commit to lending you a specific amount.

In competitive Texas markets, sellers often won't even look at offers without pre-approval letters.`,
        },
        {
          title: 'Documents You\'ll Need',
          content: `Gather these BEFORE applying:
• 2 years of tax returns (all pages)
• 2 years of W-2s
• 2 months of pay stubs
• 2-3 months of bank statements (all accounts)
• List of all debts with monthly payments
• Driver's license
• Social Security number

Self-employed? You'll also need profit/loss statements and possibly business tax returns.`,
        },
        {
          title: 'Shop Multiple Lenders (Critical!)',
          content: `Get quotes from at least 3 lenders. Compare:
• Interest rate AND APR (APR includes fees)
• Total closing costs
• Loan origination fees
• Points options

A 0.25% rate difference on a $320,000 loan = ~$17,000 over 30 years!

Lender types to consider:
• Big banks (may have relationship discounts)
• Credit unions (often competitive rates)
• Mortgage brokers (shop multiple lenders for you)
• Online lenders (lower overhead = potentially lower rates)`,
        },
        {
          title: 'Texas First-Time Buyer Programs',
          content: `Don't miss these Texas programs:

**TSAHC (Texas State Affordable Housing Corporation):**
• Down payment assistance grants
• Mortgage Credit Certificates (tax credits)
• Below-market interest rates

**My First Texas Home:**
• Down payment/closing cost assistance
• 30-year fixed rate mortgages
• For first-time buyers and veterans

**Local Programs:**
• Many Texas cities have their own assistance programs
• Ask your lender what programs you qualify for!`,
        },
      ],
      texasInfo: 'Texas has some of the best first-time buyer programs in the country. TSAHC and My First Texas Home can provide significant down payment assistance - don\'t skip these!',
      redFlag: 'Don\'t house hunt without pre-approval. You\'ll waste time looking at homes you can\'t afford and sellers won\'t take you seriously.',
      moneyProtection: 'Shopping lenders is one of the easiest ways to save thousands. Don\'t just go with the first lender you talk to.',
    },
    {
      id: 1,
      title: 'Understand Your True Budget',
      subtitle: 'What You Can ACTUALLY Afford',
      icon: Calculator,
      color: 'green',
      description: 'Being approved for a loan doesn\'t mean you can comfortably afford it. Calculate your REAL monthly costs before setting a budget.',
      keyPoints: [
        {
          title: 'The Real Monthly Cost (Not Just Mortgage)',
          content: `Your TRUE monthly payment includes:

**PITI (the basics):**
• Principal & Interest (your mortgage payment)
• Property Taxes (HIGH in Texas - budget 2-2.5% of home value!)
• Insurance (homeowners + flood if in flood zone)

**Plus these often-forgotten costs:**
• HOA fees (if applicable)
• PMI (if down payment < 20%)
• Utilities (often higher in a house)
• Maintenance (budget 1-2% of home value annually)
• Lawn care / pest control

**Texas Example ($400,000 home):**
• Mortgage (P&I): $2,130/month
• Property Tax: $667/month (2% rate)
• Insurance: $200/month
• HOA: $150/month
• Maintenance: $333/month
• **True Cost: $3,480/month** (not $2,130!)`,
        },
        {
          title: 'The 28/36 Rule',
          content: `Use these guidelines to stay financially healthy:

**Front-End Ratio (28% rule):**
Total housing costs should not exceed 28% of gross monthly income

**Back-End Ratio (36% rule):**
Total debt payments (housing + car + student loans + credit cards) should not exceed 36% of gross income

**Example:**
$100,000 income = $8,333/month gross
• Max housing: $2,333/month
• Max total debt: $3,000/month

Just because a bank approves you for more doesn't mean you should borrow it!`,
        },
        {
          title: 'Emergency Fund After Closing',
          content: `This is a MUST that many buyers ignore:

After paying down payment + closing costs, you should still have 6 months of expenses saved.

**Why this matters:**
• Job loss can happen to anyone
• Home repairs are expensive and unpredictable
• You don't want to be "house poor"

**Red Flag Rule:**
If closing on this home would leave you with less than 3 months of expenses saved, you're buying too much house.`,
        },
        {
          title: 'Texas Property Tax Warning',
          content: `Texas has NO state income tax, but makes up for it with HIGH property taxes:

**Texas average: 1.8-2.5% of home value annually**
(National average is about 1.1%)

On a $400,000 home:
• Texas: $7,200-$10,000/year ($600-$833/month)
• National average: ~$4,400/year ($367/month)

**Also watch for:**
• Property taxes can INCREASE significantly after you buy (assessed at purchase price)
• Different areas have different rates (research before you buy)
• Tax protests are common in Texas - you can fight your assessment`,
        },
      ],
      texasInfo: 'Texas property taxes are among the highest in the nation. A $400,000 home can easily have $8,000+/year in property taxes. Factor this into your budget!',
      redFlag: 'If your post-closing savings would be less than 3-6 months of expenses, you\'re buying too much house.',
      moneyProtection: 'Budget for the TRUE monthly cost, not just the mortgage payment. Many buyers are shocked by their real expenses.',
    },
    {
      id: 2,
      title: 'House Hunting & Market Research',
      subtitle: 'Finding the Right Home at the Right Price',
      icon: Search,
      color: 'purple',
      description: 'Before making offers, understand the market. This knowledge is your negotiating power.',
      keyPoints: [
        {
          title: 'What to Research for EVERY Home',
          content: `Before getting excited about a house, research:

**Days on Market (DOM):**
• Under 7 days: Hot property, expect competition
• 7-30 days: Normal market
• 30-60 days: May have issues or be overpriced
• 60+ days: Significant negotiation leverage

**Price History:**
• Any price reductions? How many?
• Original list price vs current?
• How long between reductions?

**Comparable Sales (SOLD prices, not listings):**
• What have similar homes actually sold for?
• Price per square foot in the area
• Are prices trending up or down?`,
        },
        {
          title: 'The Exit Strategy Question',
          content: `Always ask: "If I needed to sell this home in 2-5 years, how bad could it get?"

**Research neighborhood liquidity:**
• How quickly do homes sell in this area?
• What's the average discount from list to sale price?
• Are there many foreclosures or distressed sales nearby?

**Red flags for resale:**
• Unusual floor plans
• Only one bathroom
• No garage in Texas (it's hot!)
• Busy road or highway proximity
• Near commercial development
• Declining neighborhood
• HOA issues or high fees`,
        },
        {
          title: 'Texas-Specific Considerations',
          content: `Things that matter especially in Texas:

**Foundation:**
• Texas clay soil causes foundation issues
• Ask about foundation history
• Look for signs: cracks, sticking doors/windows
• Get foundation inspection (budget $300-$500)

**Flood Zones:**
• Many Texas areas flood
• Check FEMA flood maps
• Flood insurance can add $1,000-$3,000+/year
• Even outside flood zones, Texas flooding is real

**HVAC:**
• Central AC is essential (obviously)
• Check the age and condition of the system
• Replacement cost: $5,000-$15,000
• Texas summers destroy old units

**Roof:**
• Hail damage is common
• Check age and recent repairs
• Ask about insurance claims`,
        },
        {
          title: 'Working with Your Buyer\'s Agent',
          content: `Your agent should be helping you with market research, but verify independently:

**What to expect from your agent:**
• Comparable sales analysis (CMA)
• Market condition advice
• Neighborhood information
• Negotiation strategy guidance

**What to verify yourself:**
• Don't rely solely on agent's recommendations
• Check sold prices on Zillow/Redfin
• Drive by at different times of day
• Talk to neighbors if possible

**Texas Requirement:**
You must sign a Buyer Representation Agreement before your agent can show you homes. This should specify how they will be compensated.`,
        },
      ],
      texasInfo: 'Texas foundation issues are REAL due to clay soil. Always get a foundation inspection, especially on homes over 10 years old. This can save you from a $30,000+ nightmare.',
      redFlag: 'Don\'t pay list price on homes that have been on market 60+ days. Use days on market as negotiation leverage.',
      moneyProtection: 'Research comparable SOLD prices, not list prices. List prices are wishes; sold prices are reality.',
    },
    {
      id: 3,
      title: 'Making an Offer',
      subtitle: 'Negotiation Strategy',
      icon: Handshake,
      color: 'orange',
      description: 'Your offer should be strategic, protective, and backed by data - not driven by emotion.',
      keyPoints: [
        {
          title: 'Texas Contract Basics (TREC Forms)',
          content: `Texas uses standardized contracts from the Texas Real Estate Commission (TREC):

**Key components of your offer:**
• Purchase price
• Option fee and option period length
• Earnest money amount
• Closing date
• Financing details
• What stays/goes with the home
• Seller concessions (if requesting)

**The Option Fee & Period (Texas-Specific):**
This is YOUR most important protection!
• Pay $100-$500 directly to seller (non-refundable)
• Get 7-14 days to back out for ANY reason
• This is NOT the same as earnest money
• This is when you do inspections

**Earnest Money:**
• Typically 1-3% of purchase price
• Held by title company (not seller)
• Applied to your costs at closing
• At risk if you back out after option period (without contingency)`,
        },
        {
          title: 'Things You Can Negotiate (Many Buyers Don\'t Know!)',
          content: `Everything in real estate is negotiable:

**Price** - Obviously

**Seller Concessions (Closing Cost Help):**
• Seller can pay up to 3-6% of price toward your closing costs
• This is often BETTER than a price reduction
• $10,000 less price = ~$50/month savings
• $10,000 seller concession = $10,000 you don't pay at closing

**Real Estate Commissions:**
• Buyer's agent commission can be negotiated
• You can ask seller to pay your agent's fee
• Recent rule changes make this more flexible
• Don't be afraid to ask!

**Other Negotiable Items:**
• Home warranty (seller can pay)
• Repairs or repair credits
• Appliances and furniture
• Closing date flexibility
• Leaseback if seller needs time to move`,
        },
        {
          title: 'Protecting Yourself in the Offer',
          content: `ALWAYS include these protections:

**Option Period (Texas):**
• Get at least 7-10 days
• More if it's an older home or you have concerns
• This is your "free look" period

**Financing Contingency:**
• Protects you if your loan falls through
• Typically 21-30 days
• You get earnest money back if you can't get financing

**Appraisal Contingency:**
• Protects you from overpaying
• If home appraises low, you can renegotiate or walk away
• Don't waive this!

**Seller's Disclosure:**
• Seller must disclose known issues
• Review carefully
• Use for negotiation leverage`,
        },
        {
          title: 'When to Be Aggressive vs. Conservative',
          content: `Your strategy depends on market conditions:

**Hot Market (Multiple Offers):**
• Offer at or slightly above asking
• Shorter option period (but still get one!)
• Higher earnest money shows seriousness
• Consider escalation clause with cap
• Still don't waive appraisal contingency

**Normal Market:**
• Offer based on comparable sales
• Standard option period (10 days)
• Standard earnest money (1-2%)
• Room to negotiate

**Buyer's Market (Home Sitting):**
• Offer below asking (use days on market as leverage)
• Request seller concessions
• Longer option period
• Request home warranty
• Strong negotiating position`,
        },
      ],
      texasInfo: 'The Texas Option Period is your best friend. It gives you the right to back out for ANY reason during that time. Never skip this! Pay the $200-$500 option fee - it\'s the best insurance you\'ll buy.',
      redFlag: 'NEVER waive your option period, financing contingency, or appraisal contingency unless you fully understand and accept the risk of losing your earnest money.',
      moneyProtection: 'Seller concessions toward closing costs often help you more than a price reduction. Ask for them!',
    },
    {
      id: 4,
      title: 'Option Period & Inspections',
      subtitle: 'Your Protected Investigation Time (Texas)',
      icon: Eye,
      color: 'red',
      description: 'The option period is your "free look" time. Use it wisely - this is where you discover problems before they become YOUR problems.',
      keyPoints: [
        {
          title: 'How the Texas Option Period Works',
          content: `The option period starts the day AFTER the contract is signed:

**Timeline Example:**
• Contract signed Monday
• Option period starts Tuesday
• 10-day option period ends Friday the following week at 5:00 PM

**Your rights during option period:**
• Terminate for ANY reason
• You only lose the option fee (not earnest money)
• No explanation required
• Just notify in writing before deadline

**Critical Warning:**
If your option period ends and you haven't terminated, you can NO LONGER back out without risking your earnest money (unless financing or appraisal contingency applies).

**Calendar this deadline immediately!**`,
        },
        {
          title: 'Inspections to Schedule Immediately',
          content: `Schedule these right away - don't wait!

**General Home Inspection ($350-$500):**
• Covers overall condition
• 2-3 hours, attend in person
• Review report same day

**Foundation Inspection ($300-$500):**
• HIGHLY RECOMMENDED in Texas
• Clay soil = foundation movement
• Could save you from $30,000+ problem

**Sewer Scope ($150-$300):**
• For homes 20+ years old
• Sewer line replacement: $5,000-$25,000
• Invisible without scope

**Other Inspections to Consider:**
• Roof ($200-$400) - if any concerns
• HVAC ($100-$200) - if system is older
• Pool/Spa ($150-$250) - if applicable
• Termite/Pest ($75-$125)`,
        },
        {
          title: 'What Inspectors Look For',
          content: `Know what they're checking:

**Structure & Foundation:**
• Cracks in walls or foundation
• Doors/windows that stick
• Uneven floors
• Signs of movement

**Roof:**
• Age and condition
• Missing/damaged shingles
• Signs of leaks in attic
• Flashing around penetrations

**Electrical:**
• Panel condition and capacity
• Wiring type (aluminum = red flag)
• Outlets and fixtures working
• GFCI protection in wet areas

**Plumbing:**
• Water pressure and drainage
• Water heater condition/age
• Signs of leaks
• Sewer line condition (scope needed)

**HVAC:**
• Age and condition
• Heating and cooling function
• Ductwork condition
• Filter and maintenance history`,
        },
        {
          title: 'Deal-Breakers to Watch For',
          content: `These issues often warrant walking away:

**Structural/Foundation Problems:**
• Active foundation movement
• Major structural cracks
• Unknown scope of damage
• Cost: Potentially $20,000-$100,000+

**Aluminum Wiring:**
• Fire hazard
• Insurance may refuse to cover
• Remediation: $8,000-$15,000

**Active Water Intrusion:**
• Ongoing leaks
• Mold potential
• Source may be hard to find

**Major System Failures:**
• HVAC replacement: $5,000-$15,000
• Roof replacement: $8,000-$25,000
• Electrical panel: $1,500-$4,000

**Environmental Issues:**
• Mold requiring remediation
• Asbestos
• Lead paint (pre-1978 homes)

If you find deal-breakers, USE YOUR OPTION PERIOD to walk away!`,
        },
      ],
      texasInfo: 'Foundation inspections are essential in Texas due to expansive clay soil. A $400 inspection can save you from a $50,000 foundation repair bill.',
      redFlag: 'Don\'t let the option period deadline pass without making a decision. Once it\'s over, your earnest money is at risk.',
      moneyProtection: 'Spend $500-$1,500 on thorough inspections. This is the cheapest insurance you\'ll ever buy against major problems.',
    },
    {
      id: 5,
      title: 'Negotiating Repairs & Credits',
      subtitle: 'Converting Inspection Findings into Savings',
      icon: TrendingUp,
      color: 'teal',
      description: 'After inspections, it\'s time to negotiate. Know what to ask for and how to ask for it.',
      keyPoints: [
        {
          title: 'Credits vs. Repairs - Always Choose Credits',
          content: `When negotiating, request CREDITS instead of repairs:

**Why credits are better:**
• You control the quality of work
• You choose the contractor
• You can prioritize what matters to you
• Sellers do minimum-quality repairs
• Repairs often aren't done properly

**Example:**
Inspection finds roof needs $5,000 in repairs

Bad approach: "Seller, please fix the roof"
(Seller does cheapest possible patch job)

Good approach: "Seller, please provide $5,000 credit at closing"
(You hire a quality roofer and control the work)`,
        },
        {
          title: 'How to Prioritize Your Requests',
          content: `Rank issues by importance:

**Priority 1 - Safety Issues:**
• Electrical hazards
• Gas leaks
• Structural concerns
• Mold
(These are non-negotiable)

**Priority 2 - Major Systems:**
• HVAC near end of life
• Roof issues
• Foundation concerns
• Plumbing problems
(Expensive to fix, affect habitability)

**Priority 3 - Significant Repairs:**
• Water heater replacement
• Appliance issues
• Window/door problems
(Moderate cost, quality of life)

**Priority 4 - Cosmetic Issues:**
• Paint
• Carpet
• Landscaping
(Don't spend negotiating capital on these)`,
        },
        {
          title: 'Calculating What to Ask For',
          content: `Get real numbers to support your requests:

**Steps:**
1. Get written quotes from licensed contractors
2. Add up costs for all issues
3. Decide what you'll accept vs. walk away

**Example Negotiation:**
• Foundation repair needed: $8,000 quote
• Roof repairs: $3,500 quote
• HVAC service: $500 quote
• Total: $12,000

**Your request might be:**
• $10,000 price reduction, OR
• $10,000 credit toward closing costs, OR
• Combination of both

**Negotiation Tip:**
Start higher than you expect to get. If you need $10,000, ask for $12,000-$15,000 and negotiate down.`,
        },
        {
          title: 'When to Walk Away',
          content: `Know your limits before negotiating:

**Consider walking if:**
• Issues are too expensive relative to home price
• Problems are of unknown scope
• Seller won't negotiate reasonably
• You've lost confidence in the property
• Deal no longer makes financial sense

**Remember:**
• You're still in your option period (hopefully)
• Walking away only costs you the option fee
• Your earnest money is still safe
• There WILL be other houses

**Don't let emotion keep you in a bad deal.** If the numbers don't work after inspection, use your option period and move on.`,
        },
      ],
      texasInfo: 'In Texas, your Amendment to Contract must be signed before your option period ends if you want repairs/credits. Don\'t miss this deadline!',
      redFlag: 'Never accept seller repairs instead of credits. You lose control of quality and contractors often cut corners.',
      moneyProtection: 'Get contractor quotes to support your negotiation. Sellers are more likely to agree to specific, documented amounts.',
    },
    {
      id: 6,
      title: 'Appraisal & Final Loan Approval',
      subtitle: 'The Last Hurdle Before Closing',
      icon: Calculator,
      color: 'indigo',
      description: 'The appraisal protects you from overpaying. Understand what to do if it comes in low.',
      keyPoints: [
        {
          title: 'How the Appraisal Works',
          content: `After you're under contract and option period ends:

**The process:**
1. Lender orders appraisal (you pay for it, ~$450-$600)
2. Licensed appraiser visits the property
3. Appraiser researches comparable sales
4. Appraiser determines market value
5. Report goes to lender

**What affects the appraisal:**
• Recent comparable sales
• Property condition
• Location and neighborhood
• Square footage and features
• Market conditions

**You can help by:**
• Providing list of recent improvements
• Sharing comparable sales that support value
• Making sure property is clean and accessible`,
        },
        {
          title: 'If the Appraisal Comes in Low',
          content: `This is more common than you might think:

**Example:**
• Purchase price: $420,000
• Appraised value: $395,000
• Gap: $25,000

**Your options:**

**1. Renegotiate the price**
Ask seller to reduce to appraised value. This is the best outcome.

**2. Split the difference**
You cover some, seller reduces some.

**3. Pay the gap in cash**
You'd need $25,000 extra PLUS your down payment. Usually not recommended.

**4. Challenge the appraisal**
Provide additional comparable sales. Success rate is low but possible.

**5. Walk away**
Use your appraisal contingency. Get earnest money back.

**What if seller won't budge:**
The appraisal is the market telling you the price is too high. Don't overpay just because you're emotionally attached!`,
        },
        {
          title: 'Final Underwriting & Clear to Close',
          content: `After appraisal, your loan goes through final review:

**What the underwriter verifies:**
• Everything you submitted is still accurate
• No new debts or credit inquiries
• Employment is still stable
• Property appraises and is acceptable

**DO NOT do these things before closing:**
• Buy a car or furniture
• Open new credit cards
• Change jobs
• Make large deposits without documentation
• Miss any bill payments

**Any of these can KILL your loan!**

**Clear to Close:**
Once underwriter approves everything, you're "clear to close." This means:
• Loan is fully approved
• You can schedule closing
• Start preparing your funds`,
        },
        {
          title: 'Preparing for Closing',
          content: `As closing approaches:

**3+ days before closing:**
• Receive and review Closing Disclosure
• Compare to original Loan Estimate
• Question any significant changes

**Day before or morning of:**
• Final walk-through of property
• Verify all agreed repairs are done
• Check that property is in same condition
• Make sure nothing was damaged or removed

**Closing day:**
• Bring valid ID (driver's license or passport)
• Bring certified funds or arrange wire transfer
• Be prepared to sign many documents
• Budget 1-2 hours at title company

**Wire fraud warning:**
Verify wire instructions by CALLING your title company directly. Hackers commonly intercept emails and change wire instructions!`,
        },
      ],
      texasInfo: 'In Texas, closings typically happen at the title company\'s office. You\'ll sign documents with an escrow officer, not an attorney.',
      redFlag: 'Don\'t waive your appraisal contingency! A low appraisal is the market telling you the price is too high. Use this information.',
      moneyProtection: 'If the appraisal comes in low, use it as leverage to renegotiate. Overpaying is never worth it just to "get the house."',
    },
    {
      id: 7,
      title: 'Closing Day',
      subtitle: 'Getting the Keys',
      icon: Key,
      color: 'emerald',
      description: 'The final step! Review everything carefully, sign the documents, and get your keys.',
      keyPoints: [
        {
          title: 'Review Your Closing Disclosure',
          content: `You must receive this at least 3 business days before closing:

**Compare to your Loan Estimate - look for:**
• Interest rate matches
• Loan amount is correct
• Monthly payment matches expectations
• Closing costs match (within tolerance)
• Seller credits are included
• Cash to close is what you expected

**Common issues to watch for:**
• Junk fees that weren't disclosed
• Higher title fees than quoted
• Incorrect property tax estimates
• Missing seller concessions
• Double-counted fees

**If something is wrong:**
• Question it immediately
• Don't close until it's fixed
• Errors happen - catch them now`,
        },
        {
          title: 'Final Walk-Through',
          content: `Do this the day before or morning of closing:

**Check that:**
• Property is in same condition as inspection
• All agreed repairs were completed
• All items included in sale are present
• No new damage has occurred
• Seller has moved out (unless leaseback agreed)
• All systems work (run water, AC, heat)
• Garage doors, appliances functional
• Light fixtures and fans work

**If there are problems:**
• Document with photos
• Notify your agent immediately
• May need to delay closing or hold funds in escrow
• Don't close on a property with unresolved issues`,
        },
        {
          title: 'At the Closing Table',
          content: `What to expect:

**What you're signing:**
• Promissory Note - your promise to repay the loan
• Deed of Trust - gives lender rights to foreclose
• Closing Disclosure - final accounting of all costs
• Various disclosures and affidavits
• HOA documents if applicable

**Take your time:**
• Read before you sign
• Ask questions about anything unclear
• Don't be rushed
• This is the biggest financial decision you've made

**What you'll pay:**
• Down payment (minus earnest money already paid)
• Closing costs (minus any seller credits)
• Prepaid items (taxes, insurance, interest)

**How to pay:**
• Wire transfer (verify instructions by phone!)
• Cashier's check (made out to title company)`,
        },
        {
          title: 'After Closing',
          content: `You\'re a homeowner! Now:

**Immediately:**
• Change the locks (you don't know who has keys)
• Transfer utilities to your name
• File change of address with USPS
• Update your driver's license (Texas requires this)

**First week:**
• Set up homeowner's insurance payment
• Locate water/gas shutoffs
• Locate electrical panel
• Save all closing documents safely

**Coming up:**
• First mortgage payment (usually 30-45 days out)
• Property tax bills (may not be escrowed first year)
• Homeowner's insurance (may need to pay annual premium)

**Watch for:**
• Escrow analysis (payment may change after first year)
• Property tax reassessment (you bought at market value)
• Homestead exemption (FILE THIS in Texas for tax savings!)`,
        },
      ],
      texasInfo: 'File your Homestead Exemption with your county appraisal district! This can save you $1,000+ per year on property taxes. You can file anytime from January 1 to April 30 for the current tax year.',
      redFlag: 'Never wire money without calling the title company directly to verify instructions. Wire fraud is extremely common!',
      moneyProtection: 'Review your Closing Disclosure line by line. Errors happen, and closing day is your last chance to catch them.',
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
            A step-by-step guide through the Texas home buying process, 
            with focus on protecting your money at each step.
          </p>
          <div className="mt-4 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
            <Star className="h-4 w-4 mr-2" />
            Texas-specific information included
          </div>
        </div>

        {/* Don't Know a Term? */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-purple-900">Don't understand a term?</p>
                <p className="text-purple-700 text-sm">Check our Home Buying Dictionary for plain-English explanations.</p>
              </div>
            </div>
            <Link
              to="/dictionary"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Dictionary
            </Link>
          </div>
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
                                <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
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
                              <div key={pointIndex} className="bg-white rounded-lg p-4 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                                <div className="text-gray-600 text-sm whitespace-pre-line">
                                  <FormattedText text={point.content} />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Texas Info */}
                          {phase.texasInfo && (
                            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                <Star className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-semibold text-blue-800">Texas Note</h4>
                                  <p className="text-blue-700 text-sm mt-1">{phase.texasInfo}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Red Flag */}
                          <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/financial-readiness"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Financial Readiness Calculator
            </Link>
            <Link
              to="/dictionary"
              className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-200"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn the Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add BookOpen to imports at top
const BookOpen = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export default BuyingPhases;
