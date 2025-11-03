# Ignite Strategies BD Landing Page

## What is this?

This is the **static HTML landing page** for Ignite Strategies BD. It's a simple marketing site that sits at the root domain and directs users to the main platform.

## Structure

- **`index.html`** - Main landing page (the one people see when they visit the site)
- **`learn-more.html`** - Learn more page with detailed information about the three strategic pillars
- **`pricing.html`** - Pricing page with package details and pricing information
- **`public/`** - Static assets (logo, etc.)

## Purpose

The landing page:
1. Explains what Ignite Strategies BD is
2. Highlights the three strategic pillars (Cost Efficiency, Human Capital, Business Development)
3. Provides CTAs to explore the platform and learn more
4. Directs users to the actual React app

## Setup

1. Copy `logo.png` from `ignitebd-frontend/public/logo.png` to `bdlangingpage/public/logo.png`
2. Install dependencies: `npm install`
3. Update app URLs in `index.html` and `learn-more.html` to point to your actual app domain
   - Currently set to `https://bd.ignitestrategies.com` - update as needed

## Development

```bash
npm run dev
```

This will start a development server at `http://localhost:3000`

## Build

```bash
npm run build
```

This will create an optimized build in the `dist/` folder.

## Deployment

Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

The `vercel.json` file is included for Vercel deployment.

## Tech Stack

- Static HTML
- Tailwind CSS (via CDN)
- Vite (for build tooling)

## Notes

- This is NOT the main app - that's in `ignitebd-frontend`
- Keep it simple - just a marketing landing page
- Should be fast, minimal, and convert visitors to users
- The React app (`ignitebd-frontend`) can now focus solely on being the app entry point

