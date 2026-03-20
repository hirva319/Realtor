import { useState } from 'react';
import {
  TrendingUp, Search, AlertCircle, CheckCircle, Loader, ExternalLink,
  DollarSign, Home, BarChart2, ShieldCheck, Lightbulb, ChevronDown, ChevronUp,
  Bookmark, BookmarkCheck,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useFirestore } from '../hooks/useFirestore';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const buildPrompt = (zillowUrl, context) => `
You are an expert real estate buyer's agent and negotiation strategist specializing in the Texas market.

A buyer has provided this Zillow listing: ${zillowUrl}
${context ? `Additional context from the buyer: ${context}` : ''}

Please conduct thorough research on this property and provide a comprehensive negotiation strategy. Structure your response with the following sections:

## 1. Property Overview
Summarize key details about this listing (price, beds/baths, square footage, days on market, listing status).

## 2. Market Analysis
Research and describe current market conditions for this neighborhood/zip code:
- Is it a buyer's or seller's market?
- Average days on market for comparable homes
- Recent price trends (past 3–6 months)
- Inventory levels

## 3. Comparable Sales (Comps)
List 3–5 recently sold comparable properties in the area with:
- Address / neighborhood
- Sale price vs. list price
- Days on market before sale
- Price per square foot

## 4. Suggested Offer Strategy
Based on market conditions and comps, provide:
- Recommended initial offer price (and reasoning)
- Offer price range (floor to ceiling)
- Whether to offer at, above, or below list price and by how much (%)

## 5. Key Negotiation Tactics
List 5–8 specific negotiation tactics the buyer should use for this property, including:
- Timing strategies
- Escalation clause considerations
- Non-price negotiation levers (closing date, rent-back, etc.)

## 6. Contingencies to Include
Recommend which contingencies to include and which to waive (if any), with reasoning:
- Inspection contingency
- Financing contingency
- Appraisal contingency
- Sale of current home contingency

## 7. Red Flags & Leverage Points
- Identify any potential red flags (price reductions, long DOM, etc.)
- List specific leverage points the buyer can use

## 8. Bottom Line Recommendation
A 2–3 sentence executive summary of your recommended approach.

Be specific, data-driven, and actionable. Format your response clearly with headers and bullet points.
`.trim();

const SectionIcon = ({ section }) => {
  const icons = {
    'Property Overview': Home,
    'Market Analysis': BarChart2,
    'Comparable Sales': TrendingUp,
    'Suggested Offer Strategy': DollarSign,
    'Key Negotiation Tactics': Lightbulb,
    'Contingencies': ShieldCheck,
    'Red Flags': AlertCircle,
    'Bottom Line': CheckCircle,
  };
  const match = Object.entries(icons).find(([key]) => section.includes(key));
  const Icon = match ? match[1] : TrendingUp;
  return <Icon className="h-5 w-5" />;
};

const ResultSection = ({ title, content }) => {
  const [open, setOpen] = useState(true);

  const formattedContent = content
    .split('\n')
    .filter(line => line.trim())
    .map((line, i) => {
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <li key={i} className="flex items-start space-x-2 text-gray-700">
            <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
            <span>{line.replace(/^[-•]\s*/, '')}</span>
          </li>
        );
      }
      if (/^\d+\./.test(line)) {
        return (
          <li key={i} className="flex items-start space-x-2 text-gray-700">
            <span className="text-blue-600 font-semibold flex-shrink-0">{line.match(/^\d+\./)[0]}</span>
            <span>{line.replace(/^\d+\.\s*/, '')}</span>
          </li>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-gray-900 mt-2">{line.replace(/\*\*/g, '')}</p>;
      }
      return <p key={i} className="text-gray-700">{line.replace(/\*\*/g, '')}</p>;
    });

  const hasList = content.split('\n').some(l => l.startsWith('- ') || l.startsWith('• ') || /^\d+\./.test(l.trim()));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <SectionIcon section={title} />
          </div>
          <h3 className="font-semibold text-gray-900 text-left">{title}</h3>
        </div>
        {open ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 border-t border-gray-50">
          {hasList ? (
            <ul className="space-y-2 mt-3">{formattedContent}</ul>
          ) : (
            <div className="space-y-2 mt-3">{formattedContent}</div>
          )}
        </div>
      )}
    </div>
  );
};

const parseResponse = (text) => {
  const sections = [];
  const lines = text.split('\n');
  let currentTitle = '';
  let currentContent = [];

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+\d+\.\s+(.+)/);
    if (headingMatch) {
      if (currentTitle && currentContent.length) {
        sections.push({ title: currentTitle, content: currentContent.join('\n').trim() });
      }
      currentTitle = headingMatch[1].trim();
      currentContent = [];
    } else if (currentTitle) {
      currentContent.push(line);
    }
  }
  if (currentTitle && currentContent.length) {
    sections.push({ title: currentTitle, content: currentContent.join('\n').trim() });
  }
  return sections;
};

const isValidZillowUrl = (url) => {
  try {
    const u = new URL(url);
    return u.hostname.includes('zillow.com');
  } catch {
    return false;
  }
};

const Negotiation = () => {
  const { user } = useAuth();
  const { saveProperty } = useFirestore();
  const [zillowUrl, setZillowUrl] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [rawText, setRawText] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveProperty({ zillowUrl, strategy: rawText, notes: context });
      setSaved(true);
    } catch {
      setError('Could not save property. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setRawText('');

    if (!isValidZillowUrl(zillowUrl)) {
      setError('Please enter a valid Zillow listing URL (e.g. https://www.zillow.com/homedetails/...)');
      return;
    }

    if (!GEMINI_API_KEY) {
      setError('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: buildPrompt(zillowUrl, context) }] }],
          tools: [{ google_search: {} }],
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) throw new Error('No response received. Please try again.');

      setRawText(text);
      const sections = parseResponse(text);
      setResult(sections.length ? sections : null);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3">AI Negotiation Strategist</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Paste a Zillow listing URL and get a data-driven negotiation strategy powered by
            ChatGPT with live web research — tailored for Texas home buyers.
          </p>
          {user && (
            <p className="mt-4 text-blue-200 text-sm">
              Signed in as <span className="font-semibold text-white">{user.displayName || user.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Input form */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zillow Listing URL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="url"
                  value={zillowUrl}
                  onChange={(e) => setZillowUrl(e.target.value)}
                  placeholder="https://www.zillow.com/homedetails/..."
                  required
                  className="input-field pl-10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Copy the full URL from a Zillow property listing page
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Context <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g. We are pre-approved for $450k, flexible on closing date, first-time buyers. The home has been on market for 45 days with one price reduction."
                rows={3}
                className="input-field resize-none"
              />
            </div>

            {error && (
              <div className="flex items-start space-x-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !zillowUrl}
              className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Researching property &amp; generating strategy...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Generate Negotiation Strategy</span>
                </>
              )}
            </button>
          </form>

          {loading && (
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
              <div className="flex items-center space-x-3 mb-3">
                <Loader className="h-5 w-5 text-blue-600 animate-spin" />
                <span className="text-blue-800 font-semibold text-sm">AI Research in Progress</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Searching Zillow and real estate databases...</li>
                <li>• Analyzing comparable sales in the area...</li>
                <li>• Evaluating market conditions and trends...</li>
                <li>• Crafting your personalized negotiation strategy...</li>
              </ul>
              <p className="text-xs text-blue-500 mt-3">This may take 30–60 seconds</p>
            </div>
          )}
        </div>

        {/* Results */}
        {result && result.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h2 className="text-xl font-bold text-gray-900">Your Negotiation Strategy</h2>
              </div>
              <button
                onClick={handleSave}
                disabled={saved || saving}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  saved
                    ? 'bg-green-100 text-green-700 cursor-default'
                    : 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60'
                }`}
              >
                {saved ? (
                  <><BookmarkCheck className="h-4 w-4" /><span>Saved</span></>
                ) : (
                  <><Bookmark className="h-4 w-4" /><span>{saving ? 'Saving...' : 'Save Property'}</span></>
                )}
              </button>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 mb-4">
              <strong>Disclaimer:</strong> This AI-generated strategy is for informational purposes only
              and does not constitute professional real estate or legal advice. Always consult a licensed
              Texas real estate agent and/or attorney before making offers.
            </div>
            {result.map((section) => (
              <ResultSection key={section.title} title={section.title} content={section.content} />
            ))}
          </div>
        )}

        {/* Fallback: raw text if sections couldn't be parsed */}
        {rawText && (!result || result.length === 0) && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-bold text-gray-900">Your Negotiation Strategy</h2>
            </div>
            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
              {rawText}
            </div>
          </div>
        )}

        {/* How it works */}
        {!result && !rawText && !loading && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Paste Zillow URL',
                  desc: 'Copy the URL from any Zillow property listing page and paste it above.',
                  color: 'bg-blue-500',
                },
                {
                  step: '2',
                  title: 'AI Researches the Property',
                  desc: 'ChatGPT searches the web for market data, comparable sales, and property history.',
                  color: 'bg-indigo-500',
                },
                {
                  step: '3',
                  title: 'Get Your Strategy',
                  desc: 'Receive a detailed, actionable negotiation plan including offer price, tactics, and contingencies.',
                  color: 'bg-green-500',
                },
              ].map(({ step, title, desc, color }) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className={`${color} text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-4`}>
                    {step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Negotiation;
