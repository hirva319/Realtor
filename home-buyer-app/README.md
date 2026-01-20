# HomeBuyer Pro - First-Time Home Buyer Guide

A comprehensive web application designed to help first-time home buyers make informed, money-protecting decisions throughout the home buying process.

## Features

### Financial Readiness Assessment
- Calculate your debt-to-income ratios (front-end & back-end)
- Understand your true monthly housing costs (PITI + HOA + utilities + maintenance)
- Emergency fund analysis to ensure post-closing financial safety
- Readiness score with warnings and recommendations

### Interactive Calculators
- **Monthly Payment Calculator** - See the full breakdown of PITI, PMI, and HOA
- **Affordability Calculator** - Based on the 28/36 DTI rule
- **Rent vs Buy Comparison** - Long-term financial analysis
- **Emergency Fund Calculator** - Ensure you have adequate savings
- **Closing Costs Estimator** - Know what cash you'll need

### Home Buying Phases Guide
Complete guidance through all 8 phases:
1. Pre-Offer Phase (Financial Readiness)
2. Market Analysis
3. Offer Strategy
4. Contract Protections
5. Inspection Phase
6. Renegotiation Strategy
7. Appraisal Phase
8. Closing Phase

### Interactive Checklists
- 8 comprehensive checklists with 100+ items
- Track your progress through each phase
- Never miss a critical deadline or step

### Red Flags & Common Mistakes
- Pricing mistakes to avoid
- Contract dangers
- Inspection pitfalls
- Financing errors
- Emotional traps
- Deal-breaker issues

## Tech Stack

- **React 19** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the app directory
cd home-buyer-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This app is ready to be deployed to any static hosting platform:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### Manual Hosting
1. Run `npm run build`
2. Upload the contents of the `dist` folder to any static web host

## Project Structure

```
home-buyer-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FinancialReadiness.jsx
│   │   ├── BuyingPhases.jsx
│   │   ├── Calculators.jsx
│   │   ├── Checklists.jsx
│   │   └── RedFlags.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Disclaimer

This application provides educational information only and should not be considered professional financial or legal advice. Always consult with qualified professionals (real estate agents, lenders, attorneys, inspectors) before making real estate decisions.

## License

MIT
