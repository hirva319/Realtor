import { useState } from 'react';
import { 
  BookOpen, 
  Search,
  DollarSign,
  FileText,
  Home,
  Shield,
  Users,
  Building,
  Calculator,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Terms', icon: BookOpen },
    { id: 'money', name: 'Money & Costs', icon: DollarSign },
    { id: 'contract', name: 'Contract Terms', icon: FileText },
    { id: 'process', name: 'Process & Phases', icon: Home },
    { id: 'people', name: 'People & Parties', icon: Users },
    { id: 'texas', name: 'Texas Specific', icon: Star },
  ];

  const terms = [
    // Money & Costs
    {
      term: 'Earnest Money',
      category: 'money',
      shortDef: 'A deposit you make to show the seller you\'re serious about buying their home.',
      fullDef: `Earnest money (also called "good faith deposit") is money you put down when you make an offer on a house. It shows the seller you're serious and not just wasting their time.

**How it works in Texas:**
- Typically 1-3% of the purchase price ($4,000-$12,000 on a $400,000 home)
- Held by the title company in an escrow account (not given directly to seller)
- Applied toward your down payment or closing costs at closing
- You get it back if the deal falls through due to contingencies (inspection, financing, etc.)

**When you could LOSE your earnest money:**
- You back out for reasons not covered by your contingencies
- You miss a contract deadline
- You simply change your mind after contingency periods end

**Money Protection Tip:** Keep earnest money as low as the seller will accept. More earnest money = more risk for you.`,
      texasNote: 'In Texas, earnest money is typically deposited within 3 days of the executed contract.',
      importance: 'high',
    },
    {
      term: 'Option Fee',
      category: 'texas',
      shortDef: 'A fee paid to the seller for the right to back out of the contract for ANY reason during the option period.',
      fullDef: `The option fee is a Texas-specific concept that gives you an "unrestricted right to terminate" the contract during the option period.

**How it works:**
- You pay a small fee directly to the seller (typically $100-$500)
- In exchange, you can back out for ANY reason during the option period
- Unlike earnest money, this is NOT refundable - the seller keeps it no matter what
- It IS credited toward your purchase price if you close

**Why this is valuable:**
- You can get inspections done and back out if you don't like what you find
- You can back out if you just change your mind
- You have time to think without losing your earnest money

**Strategy Tip:** The option fee is separate from earnest money. A strong offer might have higher earnest money but still include an option period for your protection.`,
      texasNote: 'This is unique to Texas! Most other states use inspection contingencies instead.',
      importance: 'high',
    },
    {
      term: 'Option Period',
      category: 'texas',
      shortDef: 'A set number of days where you can cancel the contract for any reason (typically 7-14 days in Texas).',
      fullDef: `The option period is your "free look" time in Texas. During this period, you can terminate the contract for ANY reason and only lose your option fee (not your earnest money).

**Typical timeline:**
- 7-10 days is standard in Texas
- Starts the day after the contract is executed
- Ends at 5:00 PM on the last day

**What to do during option period:**
1. Schedule home inspection immediately
2. Get specialist inspections (foundation, roof, sewer scope, etc.)
3. Review HOA documents if applicable
4. Verify everything the seller disclosed
5. Make your final decision

**Critical Warning:** If your option period ends and you haven't terminated, you can no longer back out without risking your earnest money (unless you have other contingencies like financing).

**Negotiation Tip:** In a competitive market, sellers may want shorter option periods. In a buyer's market, ask for more time.`,
      texasNote: 'Calendar this deadline! Missing it means losing your "free exit" right.',
      importance: 'high',
    },
    {
      term: 'Down Payment',
      category: 'money',
      shortDef: 'The cash you pay upfront toward the home purchase price.',
      fullDef: `The down payment is the portion of the home price you pay in cash at closing. The rest is covered by your mortgage loan.

**Common down payment amounts:**
- 3% - Minimum for conventional loans (high PMI)
- 3.5% - Minimum for FHA loans
- 5-10% - Low down payment options
- 20% - Traditional "gold standard" (no PMI required)

**Example on $400,000 home:**
- 3% = $12,000
- 5% = $20,000
- 10% = $40,000
- 20% = $80,000

**Important considerations:**
- Lower down payment = higher monthly payments (larger loan + PMI)
- Higher down payment = more cash tied up in the house
- 20% down avoids PMI but isn't always the best use of money
- Don't drain your emergency fund for a bigger down payment

**First-time buyer programs in Texas:**
- Texas State Affordable Housing Corporation (TSAHC) - down payment assistance
- Texas Department of Housing - My First Texas Home program
- Many local programs available`,
      importance: 'high',
    },
    {
      term: 'PMI (Private Mortgage Insurance)',
      category: 'money',
      shortDef: 'Extra insurance you pay if your down payment is less than 20%.',
      fullDef: `PMI protects the LENDER (not you) if you default on your loan. You pay for it, but it doesn't benefit you directly.

**When it's required:**
- Conventional loans with less than 20% down payment
- FHA loans have their own version called MIP (Mortgage Insurance Premium)

**How much it costs:**
- Typically 0.5% to 1.5% of the loan amount per year
- On a $320,000 loan: $133-$400 per month

**How to get rid of PMI:**
- Automatic removal: When you reach 22% equity based on original value
- Request removal: When you reach 20% equity
- Refinance: When your home has appreciated enough

**Strategy Tip:** Sometimes it makes sense to pay PMI and keep cash reserves rather than putting 20% down and depleting your savings.`,
      importance: 'medium',
    },
    {
      term: 'Closing Costs',
      category: 'money',
      shortDef: 'Fees and expenses (beyond the down payment) that you pay when finalizing your home purchase.',
      fullDef: `Closing costs are all the fees associated with getting a mortgage and transferring ownership of the property.

**Typical closing costs in Texas (2-4% of purchase price):**

**Lender fees:**
- Loan origination fee (0.5-1% of loan)
- Appraisal fee ($400-$600)
- Credit report fee ($30-$50)
- Underwriting fee ($400-$900)

**Title fees:**
- Title insurance (required in Texas)
- Title search and exam
- Settlement/closing fee

**Prepaid items:**
- Property taxes (prorated)
- Homeowner's insurance (first year)
- Prepaid interest

**Government fees:**
- Recording fees
- Transfer taxes (if applicable)

**Negotiation Tip:** You can ask the seller to pay some or all of your closing costs! This is called "seller concessions" and is often more valuable than a price reduction.`,
      texasNote: 'Texas has no state income tax but property taxes are higher than many states (around 1.8-2.5% of home value annually).',
      importance: 'high',
    },
    {
      term: 'Seller Concessions',
      category: 'money',
      shortDef: 'Money the seller agrees to pay toward your closing costs or other expenses.',
      fullDef: `Seller concessions are contributions from the seller to help cover your costs. This is a powerful negotiation tool many first-time buyers don't know about!

**What sellers can pay for:**
- Your closing costs
- Prepaid property taxes
- Prepaid insurance
- Rate buy-down points
- Home warranty
- Repairs (as credits)

**Limits on seller concessions:**
- Conventional loan: Up to 3% with less than 10% down, up to 6% with 10-25% down
- FHA loan: Up to 6%
- VA loan: Up to 4% (plus unlimited for certain costs)

**Why this can be better than a price reduction:**
A $10,000 price reduction saves you about $50/month on your mortgage. But $10,000 in seller concessions is $10,000 cash you don't have to bring to closing!

**Example negotiation:**
Instead of asking for $400,000 reduced to $390,000, ask for:
- $400,000 price with $10,000 seller concession toward closing costs
- You finance slightly more but keep $10,000 more in your pocket`,
      importance: 'high',
    },
    {
      term: 'Real Estate Commission / Agent Fees',
      category: 'money',
      shortDef: 'The fees paid to real estate agents, which are negotiable!',
      fullDef: `Real estate commissions have traditionally been 5-6% of the sale price, split between the listing agent and buyer's agent. BUT this is changing and is NEGOTIABLE!

**Recent changes (2024 NAR Settlement):**
- Buyer agent commissions are no longer automatically included in MLS listings
- Buyers may need to negotiate and potentially pay their own agent
- Everything is more negotiable than before

**What you can negotiate:**
- Ask the seller to pay your agent's commission (still common)
- Negotiate a flat fee with your agent instead of percentage
- Negotiate a lower commission rate
- Ask for commission rebate at closing

**Example on $400,000 home:**
- Traditional 6% = $24,000 total commission
- If you negotiate 5% = $20,000 (saves $4,000)
- If you negotiate seller to pay buyer agent = you save thousands

**Important for Texas buyers:**
- You can negotiate who pays what
- Get commission agreements in writing
- Some agents offer rebates to buyers
- Don't be afraid to ask - the worst they can say is no!`,
      texasNote: 'Texas requires written agreements with your buyer\'s agent specifying how they will be compensated.',
      importance: 'high',
    },
    {
      term: 'PITI',
      category: 'money',
      shortDef: 'Principal, Interest, Taxes, and Insurance - the four components of your monthly housing payment.',
      fullDef: `PITI represents your total monthly housing payment, not just your mortgage.

**The four components:**

**Principal:** The portion that pays down your loan balance
**Interest:** The cost of borrowing money
**Taxes:** Property taxes (collected monthly, paid annually)
**Insurance:** Homeowner's insurance

**What PITI doesn't include:**
- HOA fees
- PMI (if applicable)
- Utilities
- Maintenance costs

**True monthly cost formula:**
PITI + HOA + PMI + Utilities + Maintenance = Real monthly cost

**Texas consideration:**
Texas has NO state income tax but has HIGHER property taxes than most states (typically 1.8-2.5% of home value). Always factor this into your budget!

**Example for $400,000 home in Texas:**
- Principal & Interest: $2,130 (7% rate, 30-year, $320K loan)
- Property Tax: $667/month (2% rate)
- Insurance: $200/month
- PITI Total: $2,997/month
- Add HOA, PMI, utilities for true cost`,
      texasNote: 'Texas property taxes are among the highest in the nation. Budget accordingly!',
      importance: 'high',
    },
    {
      term: 'Appraisal',
      category: 'process',
      shortDef: 'A professional assessment of a home\'s market value, required by your lender.',
      fullDef: `An appraisal is an independent evaluation of what a home is worth, conducted by a licensed appraiser. Your lender requires this to make sure they're not lending more than the home is worth.

**How it works:**
1. After you're under contract, your lender orders an appraisal
2. Appraiser visits the home and evaluates condition
3. Appraiser researches comparable sales in the area
4. Appraiser provides a written report with their value opinion
5. You pay for this (typically $400-$600)

**What happens if appraisal comes in low:**
If you agreed to pay $400,000 but the appraisal says it's worth $380,000:

Option 1: Renegotiate the price to $380,000
Option 2: Seller reduces price to meet appraisal
Option 3: You pay the $20,000 "gap" in cash
Option 4: Walk away (if you have appraisal contingency)
Option 5: Challenge the appraisal with additional comps

**Protection Tip:** Don't waive your appraisal contingency! A low appraisal might be the market telling you the price is too high.`,
      importance: 'high',
    },
    {
      term: 'Appraisal Gap',
      category: 'money',
      shortDef: 'The difference between your offer price and the appraised value when the appraisal comes in lower.',
      fullDef: `An appraisal gap occurs when the home appraises for less than your agreed purchase price.

**Example:**
- Purchase price: $420,000
- Appraised value: $400,000
- Appraisal gap: $20,000

**Why this matters:**
Your lender will only lend based on the LOWER of the purchase price or appraised value. So you'd need to cover the $20,000 gap in cash, in addition to your down payment.

**Appraisal gap coverage (in hot markets):**
Some buyers offer to cover a gap up to a certain amount in their offer to be more competitive.

**Danger:** If you agree to unlimited gap coverage, you could be paying significantly more than the home is worth AND need extra cash at closing.

**Smart approach:**
- Cap your gap coverage at a specific dollar amount
- Have the cash ready if you offer gap coverage
- Use a low appraisal as negotiation leverage
- Walk away if the numbers don't make sense`,
      importance: 'medium',
    },
    // Contract Terms
    {
      term: 'Contingency',
      category: 'contract',
      shortDef: 'A condition that must be met for the contract to proceed. Gives you a way to exit the contract.',
      fullDef: `Contingencies are your protection in a real estate contract. They're conditions that must be met, and if they're not, you can cancel the contract without losing your earnest money.

**Common contingencies:**

**Financing Contingency:**
- Protects you if your loan falls through
- Usually 21-30 days to secure financing
- You get earnest money back if you can't get approved

**Appraisal Contingency:**
- Protects you if the home appraises below purchase price
- Can renegotiate or walk away
- Critical protection against overpaying

**Inspection Contingency:**
- In most states (Texas uses Option Period instead)
- Allows you to cancel based on inspection findings

**Sale of Current Home Contingency:**
- Protects you if you need to sell your current home first
- Sellers often don't accept these in competitive markets

**Golden Rule:** NEVER waive contingencies in a hot market unless you fully understand and accept the risks!`,
      texasNote: 'Texas uses the Option Period instead of a traditional inspection contingency.',
      importance: 'high',
    },
    {
      term: 'Title',
      category: 'contract',
      shortDef: 'Legal ownership of the property and the right to use it.',
      fullDef: `Title is the legal concept of ownership. When you buy a home, the title is transferred from the seller to you.

**Title search:**
Before closing, a title company researches the property's history to make sure:
- The seller actually owns the property
- There are no liens (debts attached to the property)
- There are no ownership disputes
- All previous transfers were legal

**Title insurance:**
Protects you if problems with the title are discovered later. In Texas, title insurance is required and rates are set by the state.

**Two types:**
1. Lender's policy (required) - Protects the lender
2. Owner's policy (optional but recommended) - Protects you

**Common title issues:**
- Unknown heirs claiming ownership
- Forged documents in the chain of title
- Undisclosed liens
- Boundary disputes
- Errors in public records`,
      texasNote: 'Texas has regulated title insurance rates, so the price is the same regardless of which company you use.',
      importance: 'medium',
    },
    {
      term: 'Escrow',
      category: 'contract',
      shortDef: 'A neutral third party that holds money and documents during the transaction.',
      fullDef: `Escrow serves two purposes in real estate:

**1. During the transaction:**
The escrow/title company holds:
- Your earnest money
- Documents from both parties
- Coordinates the closing process
- Ensures all conditions are met before releasing funds

**2. After closing (Escrow Account):**
Your lender may collect extra money each month to pay:
- Property taxes
- Homeowner's insurance
- Sometimes HOA fees

**How escrow accounts work:**
Instead of paying a $4,000 tax bill once a year, you pay ~$333/month into an escrow account, and your lender pays the bill for you.

**Escrow analysis:**
Annually, your lender reviews your escrow account. If taxes or insurance increased, your monthly payment may go up. This is one reason your payment can change even with a fixed-rate mortgage.`,
      texasNote: 'In Texas, title companies typically handle escrow during the transaction.',
      importance: 'medium',
    },
    {
      term: 'Deed',
      category: 'contract',
      shortDef: 'The legal document that transfers property ownership from seller to buyer.',
      fullDef: `The deed is the physical document that proves you own the property. When you close, the seller signs the deed to transfer ownership to you.

**Types of deeds:**
- **General Warranty Deed:** Best protection - seller guarantees clear title
- **Special Warranty Deed:** Seller only guarantees title during their ownership
- **Quitclaim Deed:** No guarantees at all (avoid for home purchases)

**What happens to the deed:**
1. Seller signs at closing
2. Deed is recorded at the county clerk's office
3. Recording makes it public record
4. You receive the original deed (keep it safe!)

**Texas specific:**
Texas primarily uses General Warranty Deeds for residential purchases, which gives you the most protection.`,
      importance: 'low',
    },
    // Process Terms
    {
      term: 'Pre-Approval vs Pre-Qualification',
      category: 'process',
      shortDef: 'Pre-approval is a thorough review of your finances; pre-qualification is just a rough estimate.',
      fullDef: `These terms sound similar but are very different:

**Pre-Qualification (Weak):**
- Based on self-reported information
- No verification of income, assets, or credit
- Just an estimate, not a commitment
- Takes minutes
- Doesn't mean much to sellers

**Pre-Approval (Strong):**
- Lender verifies your income, assets, and credit
- Reviews tax returns, pay stubs, bank statements
- Runs your credit report
- Gives you a specific loan amount you qualify for
- Takes days
- Shows sellers you're a serious, qualified buyer

**What you need for pre-approval:**
- 2 years of tax returns
- 2 months of bank statements
- Recent pay stubs
- List of debts
- Government ID
- Social Security number for credit check

**Important:** Get pre-approved BEFORE you start house hunting! Sellers take pre-approved buyers more seriously.`,
      importance: 'high',
    },
    {
      term: 'Under Contract',
      category: 'process',
      shortDef: 'The period after your offer is accepted but before closing.',
      fullDef: `When you're "under contract," it means:
- Seller has accepted your offer
- Both parties have signed the contract
- You're working toward closing
- The home is typically off the market

**What happens during this period:**
1. Deposit earnest money (and option fee in Texas)
2. Option period begins (your "free look" time)
3. Schedule and complete inspections
4. Negotiate any repairs or credits
5. Finalize your mortgage (underwriting)
6. Get the appraisal done
7. Title search and insurance
8. Final walk-through
9. Closing!

**Timeline in Texas:**
- Option period: 7-14 days after contract
- Financing contingency: 21-30 days typically
- Closing: 30-45 days from contract (can vary)

**Risks during this period:**
- Deal can still fall through
- Inspection issues could arise
- Financing could be denied
- Appraisal could come in low`,
      texasNote: 'In Texas, the Texas Real Estate Commission (TREC) provides standard contract forms that most transactions use.',
      importance: 'medium',
    },
    {
      term: 'Closing / Settlement',
      category: 'process',
      shortDef: 'The final step where ownership is transferred and you get the keys!',
      fullDef: `Closing (also called settlement) is when the deal is finalized:

**What happens at closing:**
1. Review and sign lots of documents (mortgage, deed, disclosures)
2. Pay your down payment and closing costs
3. Seller signs the deed transferring ownership
4. Title company records the deed with the county
5. You get the keys!

**Before closing, you should:**
- Review Closing Disclosure 3+ days before (compare to Loan Estimate)
- Do final walk-through of the property
- Arrange wire transfer or cashier's check for funds
- Bring valid ID

**What you're signing:**
- Promissory note (your promise to repay the loan)
- Mortgage/Deed of Trust (gives lender rights if you don't pay)
- Closing Disclosure (final accounting of all costs)
- Various other disclosures

**Closing Disclosure:**
You must receive this at least 3 business days before closing. Compare it carefully to your original Loan Estimate. Question any significant changes!`,
      texasNote: 'In Texas, closings are typically held at the title company\'s office.',
      importance: 'high',
    },
    {
      term: 'Due Diligence',
      category: 'process',
      shortDef: 'The research and investigation you do before finalizing a home purchase.',
      fullDef: `Due diligence is all the homework you do to make sure you're making a good purchase:

**What due diligence includes:**
- Home inspection (general)
- Specialist inspections (foundation, roof, HVAC, sewer)
- Reviewing HOA documents and financials
- Researching the neighborhood
- Verifying property boundaries
- Checking for liens or title issues
- Confirming seller disclosures are accurate
- Researching flood zones and insurance requirements
- Checking permit history for additions/renovations

**When to do it:**
In Texas, most due diligence happens during your Option Period. This is your protected time to investigate.

**Cost of due diligence:**
- General inspection: $300-$500
- Foundation inspection: $300-$500
- Sewer scope: $150-$300
- Roof inspection: $200-$400
- Total: Budget $500-$1,500 for inspections

**This is money well spent!** Finding a $30,000 foundation problem during your option period (when you can back out) is much better than finding it after closing.`,
      importance: 'high',
    },
    // People & Parties
    {
      term: 'Listing Agent / Seller\'s Agent',
      category: 'people',
      shortDef: 'The real estate agent who represents the seller.',
      fullDef: `The listing agent works for the SELLER, not you. Their job is to:
- Get the highest price for the seller
- Market the property
- Negotiate on behalf of the seller
- Protect the seller's interests

**Important to understand:**
- They are NOT looking out for your interests
- Information you share with them goes to the seller
- They want the deal to close (that's how they get paid)
- Be careful what you reveal to the listing agent

**Example:** If you tell the listing agent "We love this house and will pay whatever it takes!" - they WILL share that with the seller.

**Their commission:**
- Traditionally paid by the seller at closing
- Usually 2.5-3% of sale price
- Negotiable! Sellers can negotiate lower listing fees`,
      importance: 'medium',
    },
    {
      term: 'Buyer\'s Agent',
      category: 'people',
      shortDef: 'The real estate agent who represents YOU (the buyer).',
      fullDef: `Your buyer's agent is supposed to look out for YOUR interests:

**What a buyer's agent does:**
- Helps you find properties
- Provides market analysis and pricing guidance
- Writes and submits offers
- Negotiates on your behalf
- Guides you through the process
- Recommends inspectors, lenders, etc.
- Attends inspections and closing

**Commission (this is changing!):**
- Traditionally paid by the seller (from the sale proceeds)
- Recent changes mean this is now negotiable
- You may need to pay your own agent in some cases
- Always clarify how your agent will be paid BEFORE working together

**Choosing a buyer's agent:**
- Interview multiple agents
- Ask about their experience with first-time buyers
- Ask how they're compensated
- Get everything in writing

**Texas requirement:**
You must sign a Buyer Representation Agreement that specifies how your agent will be paid.`,
      texasNote: 'Texas requires written buyer representation agreements before an agent can show you homes.',
      importance: 'high',
    },
    {
      term: 'Lender / Mortgage Company',
      category: 'people',
      shortDef: 'The company that provides your home loan.',
      fullDef: `Your lender is who you'll borrow money from to buy the home. Choosing the right lender can save you thousands.

**Types of lenders:**
- **Banks:** Traditional option, may have relationship discounts
- **Credit Unions:** Often competitive rates, member-focused
- **Mortgage Brokers:** Shop multiple lenders for you
- **Online Lenders:** Often lower overhead = lower rates

**What to compare:**
- Interest rate AND APR (APR includes fees)
- Closing costs and fees
- Loan terms offered
- Customer service and responsiveness
- Time to close

**Critical advice:**
SHOP MULTIPLE LENDERS! Get at least 3 quotes. A 0.25% rate difference over 30 years on a $320,000 loan = about $17,000!

**What to ask:**
- What is the interest rate AND APR?
- What are the total closing costs?
- Are there any junk fees?
- Can you match a competitor's rate?
- What rate buy-down options are available?`,
      importance: 'high',
    },
    {
      term: 'Home Inspector',
      category: 'people',
      shortDef: 'A professional who examines the home\'s condition and identifies problems.',
      fullDef: `A home inspector is your eyes and ears for finding problems with a property.

**What they inspect:**
- Roof condition
- Foundation
- Electrical systems
- Plumbing
- HVAC (heating/cooling)
- Structure and framing
- Windows and doors
- Attic and insulation
- Exterior and drainage

**What they DON'T typically inspect:**
- Inside walls
- Sewer lines (need separate sewer scope)
- Pool/spa (need pool inspector)
- Detailed foundation analysis
- Code compliance

**Hiring a good inspector:**
- Check reviews and references
- Verify licensing (required in Texas)
- Ask about their experience
- Attend the inspection in person!
- Get a detailed written report

**Cost:** $300-$500 for a typical home

**Specialist inspections to consider:**
- Foundation: $300-$500 (important in Texas clay soil)
- Sewer scope: $150-$300 (for homes 20+ years old)
- Roof: $200-$400 (if concerns)
- HVAC: $100-$200 (if system is older)`,
      texasNote: 'Texas requires home inspectors to be licensed by TREC. Verify your inspector\'s license at trec.texas.gov.',
      importance: 'high',
    },
    {
      term: 'Title Company',
      category: 'people',
      shortDef: 'The company that researches the property\'s ownership history and handles closing.',
      fullDef: `The title company plays a crucial role in your transaction:

**What they do:**
- Research the property's ownership history (title search)
- Identify any liens, judgments, or claims
- Issue title insurance to protect you and lender
- Hold earnest money in escrow
- Coordinate the closing
- Prepare closing documents
- Record the deed after closing

**Choosing a title company:**
- You usually have the right to choose your title company
- In Texas, title insurance rates are regulated (same price everywhere)
- Consider service quality and convenience
- Your agent may have recommendations

**Title insurance:**
- Lender's policy: Required, protects the lender
- Owner's policy: Optional but highly recommended, protects you
- One-time fee paid at closing
- Protects against title defects discovered later`,
      texasNote: 'In Texas, the Texas Department of Insurance regulates title insurance rates.',
      importance: 'medium',
    },
    {
      term: 'Underwriter',
      category: 'people',
      shortDef: 'The person at the lender who reviews your application and decides if you qualify.',
      fullDef: `The underwriter is the decision-maker at your mortgage company. They review everything to decide if you qualify for the loan.

**What they review:**
- Income and employment verification
- Credit history and score
- Assets and savings
- Debt-to-income ratios
- The property (appraisal)
- All documentation you provided

**Possible decisions:**
- **Approved:** You're clear to close!
- **Approved with conditions:** Need more documents or explanations
- **Suspended:** Major issues need resolution
- **Denied:** You don't qualify

**Common conditions:**
- Letter explaining large deposits
- Updated pay stub
- Proof of funds for closing
- Additional documentation

**Tips for smooth underwriting:**
- Respond quickly to requests
- Don't make large purchases during this time
- Don't change jobs if possible
- Don't open new credit accounts
- Keep documentation organized`,
      importance: 'low',
    },
  ];

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.shortDef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Buying Dictionary</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real estate has its own language. Learn these terms to understand what everyone is talking about 
            and protect yourself during the process.
          </p>
          <div className="mt-4 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
            <Star className="h-4 w-4 mr-2" />
            Texas-specific information included
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setExpandedTerm(expandedTerm === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.term}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getImportanceColor(item.importance)}`}>
                        {item.importance === 'high' ? 'Must Know' : item.importance === 'medium' ? 'Good to Know' : 'Nice to Know'}
                      </span>
                      {item.category === 'texas' && (
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                          Texas
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{item.shortDef}</p>
                  </div>
                  <button className="ml-4 text-gray-400 hover:text-gray-600">
                    {expandedTerm === index ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>

              {expandedTerm === index && (
                <div className="px-6 pb-6 border-t bg-gray-50">
                  <div className="mt-4 prose prose-sm max-w-none">
                    {item.fullDef.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h4 key={pIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      if (paragraph.includes('**')) {
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={pIndex} className="text-gray-700 mb-3">
                            {parts.map((part, partIndex) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={partIndex}>{part.replace(/\*\*/g, '')}</strong>;
                              }
                              return part;
                            })}
                          </p>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n');
                        return (
                          <ul key={pIndex} className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                            {items.map((listItem, liIndex) => (
                              <li key={liIndex}>{listItem.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={pIndex} className="text-gray-700 mb-3 whitespace-pre-line">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {item.texasNote && (
                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-blue-800">Texas Note: </span>
                          <span className="text-blue-700">{item.texasNote}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No terms found matching your search.</p>
          </div>
        )}

        {/* Quick Reference Card */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Quick Reference: Texas Home Buying Timeline</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Day 0: Contract Executed</h4>
              <p className="text-purple-200 text-sm">Offer accepted, earnest money and option fee due within 3 days</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Days 1-10: Option Period</h4>
              <p className="text-purple-200 text-sm">Complete all inspections, can terminate for any reason</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Days 10-25: Loan Processing</h4>
              <p className="text-purple-200 text-sm">Underwriting, appraisal ordered and completed</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Days 25-30+: Clear to Close</h4>
              <p className="text-purple-200 text-sm">Final walk-through, sign documents, get keys!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
