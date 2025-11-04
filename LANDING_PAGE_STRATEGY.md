# BD Landing Page Strategy

## Core Purpose

**The landing page is a STATIC, SEO-optimized marketing site that exists SEPARATELY from the actual BD application.**

### Key Principles

1. **Static & Searchable** - Pure HTML pages optimized for search engines
2. **No App Integration** - Does NOT touch or integrate with the BD stack application
3. **Lead Generation** - Drives traffic and converts visitors to explore the platform
4. **Entry Point** - All CTAs point to `https://bd.ignitestrategies.co` (root) where the React app handles routing

---

## Page Structure & Purpose

### 1. **Home Page (`index.html`)**
**Purpose:** **WOW EFFECT** - Simplified hero landing page with high impact

**Design Philosophy:**
- Less is more - streamlined for maximum impact
- No detailed "Our Model" section - that's in Learn More
- Focus on the three pillars at high level
- Two clear paths forward

**Content:**
- Main value proposition: "Are you ready to Ignite your business?"
- Three strategic pillars (high-level overview):
  - 💰 Cost Efficiency
  - ⚡ Human Capital  
  - 🚀 Attract New Customers
- Two primary CTAs side-by-side:
  - **"Explore the Platform"** → `bd.ignitestrategies.co` (app entry)
  - **"Learn More"** → `learn-more.html` (detailed info)

**Navigation:**
- Navbar with: Logo | Pricing | Contact Sales | Explore Platform button

**SEO Focus:**
- Business growth strategies
- Revenue building
- Business development
- Cost efficiency optimization

---

### 2. **Learn More (`learn-more.html`)**
**Purpose:** **STATIC EDUCATIONAL PAGE** - Detailed info about BD science and importance

**Why Static?**
- SEO-friendly content about how Ignite works
- Detailed explanation of the three pillars
- Talks about the SCIENCE and IMPORTANCE of Business Development
- Searchable content that doesn't require app access

**Content:**
- **"Why Business Development Matters"** section at top
  - The science of BD
  - Data-driven approach
  - Systematic vs random networking
- Detailed explanation of the three pillars:
  - **Cost Efficiency:**
    - Manpower analysis
    - Overhead review
    - Business Development spend tracking
  - **Human Capital:**
    - Systems of task assignment and feedback
    - Expectation management
    - Workload and compensation balance
  - **Business Development:**
    - Founder content strategy
    - Event-driven lead collection
    - Google Ads management

**CTAs:**
- Headline: **"Want to See How This Works?"**
- Primary CTA: **"Try the Platform"** → `bd.ignitestrategies.co` (app entry)
- "View Pricing" link → `pricing.html` (static)

**Navigation:**
- Navbar with: Logo | Pricing | Contact Sales | Explore Platform button

---

### 3. **Pricing (`pricing.html`)**
**Purpose:** **ACTUAL PRICING INFORMATION** - Transparent, upfront pricing

**Navigation:**
- Available in navbar on all pages (not a big button)
- Navbar with: Logo | Pricing | Contact Sales | Explore Platform button

**Content:**
- **Ignite Growth Package: $1,000**
  - One-time setup + ongoing platform access
- **What's Included:**
  - Complete business assessment & analysis
  - Custom growth strategy development
  - Pipeline management system setup
  - Team efficiency optimization
  - Business development tools & training
  - Monthly check-ins & strategy adjustments

**Key Features:**
- **Onboarding & System Setup** - Initial implementation
- **Platform Access** - Full access to growth platform
- **Guided Support** - Ongoing advisory support

**Pricing Philosophy:**
- Simple, transparent
- No hidden fees
- No complex tiers
- One-time setup fee

**CTA:**
- "I'm Ready! Let's Get Started" → `bd.ignitestrategies.co`

---

## Technical Architecture

### Stack
- **Pure HTML** - No React, no JavaScript frameworks
- **Tailwind CSS** (via CDN) - Styling
- **Vite** - Build tool for static site generation
- **Vercel** - Hosting & deployment

### Routing Strategy
```json
{
  "rewrites": [
    {
      "source": "/learn-more",
      "destination": "/learn-more.html"
    },
    {
      "source": "/pricing",
      "destination": "/pricing.html"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Static Pages:**
- `/learn-more` → `learn-more.html` (static educational content)
- `/pricing` → `pricing.html` (static pricing info)
- Everything else → `index.html` (landing page)

### CTA Strategy
**ALL external links point to:** `https://bd.ignitestrategies.co` (root)

**Why?**
- The React app at `bd.ignitestrategies.co` handles internal routing
- App.jsx determines which page to show based on user state/auth
- Landing page doesn't need to know about app routes
- Clean separation of concerns

---

## Separation of Concerns

### Landing Page (This Site)
- ✅ Static HTML for SEO
- ✅ Marketing content
- ✅ Lead generation
- ✅ Search engine discoverability
- ❌ NO app logic
- ❌ NO user authentication
- ❌ NO database connections
- ❌ NO API calls

### BD Application (`bd.ignitestrategies.co`)
- ✅ React SPA with routing
- ✅ User authentication
- ✅ Business logic
- ✅ Database connections
- ✅ API integrations
- ✅ Dynamic content

---

## SEO Strategy

### Target Keywords
- Business growth strategies
- Revenue building
- Cost efficiency optimization
- Human capital management
- Business development
- Lead generation
- Pipeline management
- Business assessment

### Meta Tags
Each page should have:
- Unique `<title>`
- Descriptive `<meta name="description">`
- Proper heading hierarchy (H1 → H2 → H3)
- Semantic HTML structure

### Content Optimization
- Keyword-rich headings
- Descriptive alt text for images
- Internal linking between pages
- Clear call-to-action hierarchy

---

## Conversion Funnel

```
Landing Page (index.html)
    ↓
┌─────────────────────────────────────┐
│  Primary: Explore Platform         │ → bd.ignitestrategies.co (App)
│  Secondary: Learn More              │ → learn-more.html (Static)
│  Info: Pricing                      │ → pricing.html (Static)
└─────────────────────────────────────┘
    ↓
Learn More (learn-more.html) - STATIC PAGE
    ↓
CTAs: "Take Assessment" or "Try the Platform"
    ↓
bd.ignitestrategies.co (App Entry Point)
    ↓
React App handles routing based on:
    - User authentication state
    - First-time vs returning user
    - App.jsx determines initial page
```

**Key Insight:** 
- **Learn More IS a static page** - it's SEO content for people who want to read before exploring
- **Pricing IS a static page** - actual pricing information
- **Both static pages** eventually funnel to the app via CTAs
- **Only the app entry point** (`bd.ignitestrategies.co`) is dynamic

---

## Content Updates

### When to Update Landing Page
- ✅ Pricing changes
- ✅ New service offerings
- ✅ Marketing messaging updates
- ✅ SEO optimization
- ✅ New testimonials/case studies

### When NOT to Update Landing Page
- ❌ App feature changes (that's the app's job)
- ❌ User-specific content (that's the app's job)
- ❌ Dynamic data (that's the app's job)

---

## Maintenance

### Regular Checks
1. **Links** - Ensure all CTAs point to `bd.ignitestrategies.co`
2. **Pricing** - Keep pricing page up-to-date
3. **SEO** - Monitor search rankings
4. **Analytics** - Track conversion rates
5. **Mobile** - Test responsive design

### Performance
- Static HTML = Fast loading
- No JavaScript frameworks = Minimal bundle size
- CDN delivery = Global performance
- SEO-friendly = Search engine discoverability

---

## Key Takeaways

1. **Static = Searchable** - HTML pages are easily indexed by search engines
2. **Separation = Simplicity** - Landing page doesn't touch the app
3. **Entry Point** - All CTAs go to root, app handles routing
4. **Pricing = Transparent** - Actual pricing information, not marketing fluff
5. **Learn More = Sales** - Educational content that converts interest

---

## Questions to Consider

- [ ] Is the Learn More page providing enough value as static content?
- [ ] Do we need a "Contact Us" page?
- [ ] Should we add testimonials/case studies?
- [ ] Do we need a blog section for SEO?
- [ ] Should we add FAQ section?
- [ ] Should pricing be more detailed with tiers?

---

## Navigation Structure

**Navbar (on all pages):**
- **Logo** (left) - Clickable, links to home
- **Pricing** (link) - Static pricing info
- **Contact Sales** - `mailto:sales@ignitestrategies.co` (email alias to be created)
- **Explore Platform** (button) - Primary CTA to `bd.ignitestrategies.co`

**Consistent across:**
- `index.html` (home)
- `learn-more.html` (detailed info)
- `pricing.html` (pricing)

---

## Notes

- Domain: `bd.ignitestrategies.co` (NOT .com)
- All CTAs point to root entry point (`bd.ignitestrategies.co`)
- Landing page is marketing tool, not app integration
- Keep it simple, static, and searchable
- Contact Sales email: `sales@ignitestrategies.co` (alias to be created)

