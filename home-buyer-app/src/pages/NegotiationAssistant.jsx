import { useState } from 'react';
import { 
  MessageSquare, 
  Copy, 
  Check, 
  Search,
  DollarSign,
  Home,
  Calendar,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  ClipboardList,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Target,
  Shield
} from 'lucide-react';

const NegotiationAssistant = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    listingPrice: '',
    daysOnMarket: '',
    originalPrice: '',
    priceReductions: '',
    yearBuilt: '',
    squareFeet: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: 'single-family',
    hoaFees: '',
    sellerMotivation: '',
    knownIssues: '',
    comparableSales: '',
    additionalNotes: '',
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generatePrompt = () => {
    const priceReductionInfo = formData.originalPrice && formData.listingPrice 
      ? `Original listing price: $${parseInt(formData.originalPrice).toLocaleString()}
Current listing price: $${parseInt(formData.listingPrice).toLocaleString()}
Total price reduction: $${(parseInt(formData.originalPrice) - parseInt(formData.listingPrice)).toLocaleString()} (${(((parseInt(formData.originalPrice) - parseInt(formData.listingPrice)) / parseInt(formData.originalPrice)) * 100).toFixed(1)}% reduction)`
      : `Current listing price: $${parseInt(formData.listingPrice).toLocaleString()}`;

    const prompt = `You are an expert buyer's real estate agent in Texas, specializing in protecting buyers' money and maximizing negotiation leverage. I need you to do deep research and analysis on a property I'm considering purchasing.

## PROPERTY DETAILS

**Address:** ${formData.address}, ${formData.city}, TX ${formData.zipCode}

**Pricing Information:**
${priceReductionInfo}
${formData.priceReductions ? `Number of price reductions: ${formData.priceReductions}` : ''}

**Days on Market:** ${formData.daysOnMarket} days

**Property Specs:**
- Year Built: ${formData.yearBuilt || 'Unknown'}
- Square Feet: ${formData.squareFeet ? `${parseInt(formData.squareFeet).toLocaleString()} sq ft` : 'Unknown'}
- Bedrooms: ${formData.bedrooms || 'Unknown'}
- Bathrooms: ${formData.bathrooms || 'Unknown'}
- Property Type: ${formData.propertyType}
${formData.hoaFees ? `- HOA Fees: $${formData.hoaFees}/month` : ''}

${formData.sellerMotivation ? `**Seller Motivation Clues:** ${formData.sellerMotivation}` : ''}

${formData.knownIssues ? `**Known Issues/Concerns:** ${formData.knownIssues}` : ''}

${formData.comparableSales ? `**Comparable Sales I've Found:** ${formData.comparableSales}` : ''}

${formData.additionalNotes ? `**Additional Notes:** ${formData.additionalNotes}` : ''}

---

## RESEARCH & ANALYSIS REQUESTED

Please provide a comprehensive negotiation analysis including:

### 1. MARKET ANALYSIS
- Based on the days on market (${formData.daysOnMarket} days) and any price reductions, what does this tell us about the property's pricing?
- What negotiating leverage do these factors give us?
- Is this a buyer's or seller's market indicator for this specific property?

### 2. PRICE ANALYSIS
- Based on Texas market conditions, is the current asking price likely fair, overpriced, or underpriced?
- What price per square foot would be reasonable for this area?
- What initial offer price would you recommend and why?
- What's the maximum you would advise paying for this property?

### 3. PROPERTY-SPECIFIC CONCERNS
${formData.yearBuilt ? `- The home was built in ${formData.yearBuilt}. What age-related issues should I investigate?` : '- What should I investigate based on typical Texas home issues?'}
- What Texas-specific concerns should I research (foundation, flooding, etc.)?
- What questions should I ask the seller or listing agent?

### 4. NEGOTIATION STRATEGY
Please provide a detailed negotiation strategy including:
- Recommended initial offer price with justification
- What contingencies to include (Texas option period, financing, appraisal)
- Suggested option period length and option fee
- What seller concessions to request (closing costs, repairs, home warranty)
- Counter-offer strategy if seller rejects initial offer
- Walk-away price point recommendation

### 5. THINGS TO RESEARCH BEFORE MAKING AN OFFER
- What public records should I look up?
- What should I research about this specific neighborhood?
- What should I ask the seller's agent?
- What inspections should I prioritize?

### 6. RED FLAGS TO WATCH FOR
- Based on the information provided, what concerns do you see?
- What could explain why this property has been on market ${formData.daysOnMarket} days?
${formData.priceReductions ? `- What do ${formData.priceReductions} price reduction(s) typically indicate?` : ''}

### 7. RECOMMENDED OFFER TERMS
Please write out the specific terms you'd recommend for my offer, including:
- Offer price: $____
- Option fee: $____
- Option period: ____ days
- Earnest money: $____
- Closing cost credit request: $____
- Any other concessions to request

Remember: Your primary goal is to PROTECT MY MONEY and help me avoid overpaying or buying a problem property. Be direct about any concerns and don't sugarcoat risks.`;

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const researchLinks = [
    {
      name: 'Zillow',
      url: 'https://www.zillow.com',
      description: 'Property history, Zestimate, comparable sales',
    },
    {
      name: 'Redfin',
      url: 'https://www.redfin.com',
      description: 'Market data, price history, neighborhood stats',
    },
    {
      name: 'County Appraisal District',
      url: 'https://www.google.com/search?q=texas+county+appraisal+district',
      description: 'Tax records, assessed value, property history',
    },
    {
      name: 'FEMA Flood Maps',
      url: 'https://msc.fema.gov/portal/home',
      description: 'Check flood zone status',
    },
    {
      name: 'Texas Property Tax',
      url: 'https://comptroller.texas.gov/taxes/property-tax/',
      description: 'Property tax information',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Negotiation Assistant</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter property details and generate a comprehensive research prompt for ChatGPT to analyze 
            negotiation leverage and strategy.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-purple-900 mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2" />
            How This Works
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-medium text-purple-900">Enter Property Details</p>
                <p className="text-purple-700 text-sm">Fill in what you know about the property</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-medium text-purple-900">Generate AI Prompt</p>
                <p className="text-purple-700 text-sm">We create a detailed research prompt</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-medium text-purple-900">Get AI Analysis</p>
                <p className="text-purple-700 text-sm">Paste into ChatGPT for deep research</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="h-5 w-5 mr-2 text-blue-600" />
                Property Information
              </h2>

              <div className="space-y-6">
                {/* Address Section */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Location</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="123 Main Street"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Austin"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="78701"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Pricing Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Listing Price *</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="listingPrice"
                          value={formData.listingPrice}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="450000"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Original Listing Price</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="originalPrice"
                          value={formData.originalPrice}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="475000"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">If there have been price reductions</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Days on Market *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="daysOnMarket"
                          value={formData.daysOnMarket}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="45"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Price Reductions</label>
                      <div className="relative">
                        <TrendingDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="priceReductions"
                          value={formData.priceReductions}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Property Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year Built</label>
                      <input
                        type="number"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="1995"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Square Feet</label>
                      <input
                        type="number"
                        name="squareFeet"
                        value={formData.squareFeet}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="2200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="single-family">Single Family</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="condo">Condo</option>
                        <option value="multi-family">Multi-Family</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="4"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="2.5"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly HOA</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="hoaFees"
                          value={formData.hoaFees}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="150"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Options */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
                  >
                    {showAdvanced ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                    Additional Information (Optional but Helpful)
                  </button>

                  {showAdvanced && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Seller Motivation Clues
                        </label>
                        <textarea
                          name="sellerMotivation"
                          value={formData.sellerMotivation}
                          onChange={handleInputChange}
                          className="input-field"
                          rows={2}
                          placeholder="e.g., Relocating for job, divorce, estate sale, already bought new home..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Known Issues or Concerns
                        </label>
                        <textarea
                          name="knownIssues"
                          value={formData.knownIssues}
                          onChange={handleInputChange}
                          className="input-field"
                          rows={2}
                          placeholder="e.g., Roof looks old, foundation cracks visible, outdated kitchen..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Comparable Sales You've Found
                        </label>
                        <textarea
                          name="comparableSales"
                          value={formData.comparableSales}
                          onChange={handleInputChange}
                          className="input-field"
                          rows={2}
                          placeholder="e.g., Similar home on Oak St sold for $420k last month, another on Elm sold for $435k..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Any Other Notes
                        </label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          className="input-field"
                          rows={2}
                          placeholder="Any other relevant information about the property or situation..."
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Generate Button */}
                <button
                  onClick={generatePrompt}
                  disabled={!formData.address || !formData.city || !formData.listingPrice || !formData.daysOnMarket}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate AI Research Prompt
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Research Links */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Search className="h-5 w-5 mr-2 text-blue-600" />
                Research Tools
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Gather information from these sources before generating your prompt:
              </p>
              <div className="space-y-3">
                {researchLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{link.name}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Negotiation Tips
              </h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Days on market 60+ = strong leverage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple price cuts = motivated seller</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Request seller concessions, not just price cuts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Always get the Texas option period</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Generated Prompt */}
        {generatedPrompt && (
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
                Your AI Research Prompt
              </h2>
              <button
                onClick={copyToClipboard}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  copied 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 max-h-96 overflow-y-auto">
              <pre className="text-gray-100 text-sm whitespace-pre-wrap font-mono">{generatedPrompt}</pre>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open ChatGPT
              </a>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Claude
              </a>
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Gemini
              </a>
            </div>

            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                <Target className="h-4 w-4 mr-2" />
                What to Do Next
              </h4>
              <ol className="text-sm text-purple-700 space-y-1 list-decimal list-inside">
                <li>Copy the prompt above</li>
                <li>Paste it into ChatGPT, Claude, or Gemini</li>
                <li>Review the AI's analysis carefully</li>
                <li>Use the insights to craft your offer</li>
                <li>Discuss strategy with your real estate agent</li>
              </ol>
            </div>
          </div>
        )}

        {/* What AI Will Analyze */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <ClipboardList className="h-5 w-5 mr-2 text-blue-600" />
            What the AI Will Analyze
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Market Position', desc: 'Days on market, price reductions, seller motivation' },
              { title: 'Fair Price Analysis', desc: 'Price per sq ft, comparable sales, market conditions' },
              { title: 'Property Concerns', desc: 'Age-related issues, Texas-specific problems' },
              { title: 'Offer Strategy', desc: 'Initial offer, counter-offer strategy, walk-away point' },
              { title: 'Negotiation Leverage', desc: 'What factors give you power in negotiations' },
              { title: 'Terms & Conditions', desc: 'Option period, earnest money, contingencies' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Important Disclaimer</h4>
              <p className="text-sm text-gray-600 mt-1">
                AI analysis is a starting point for research, not a replacement for professional advice. 
                Always verify information independently and consult with a licensed real estate agent and 
                other professionals before making offers. Market conditions and property specifics require 
                human expertise and local knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NegotiationAssistant;
