# PËRLA — Nutrition Brand Website

A premium, static-first website built with **Astro** + **Tailwind CSS** for maximum performance and SEO.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
perla/
├── public/images/          ← Drop food photos and portraits here
├── src/
│   ├── components/
│   │   ├── Navbar.astro        ← Navigation + mobile menu
│   │   ├── Hero.astro          ← Landing hero section
│   │   ├── Marquee.astro       ← Scrolling keyword banner
│   │   ├── About.astro         ← Inzhu's bio + pillars
│   │   ├── Recipes.astro       ← Featured recipe grid
│   │   ├── DigitalProducts.astro  ← Guides, ebooks, downloads
│   │   ├── Programs.astro      ← Coaching packages
│   │   ├── Testimonials.astro  ← Client reviews
│   │   ├── Knowledge.astro     ← Articles / science breakdowns
│   │   ├── PhysicalProducts.astro ← Merch / kitchen tools
│   │   ├── Social.astro        ← TikTok + Instagram feed
│   │   ├── Newsletter.astro    ← Email capture form
│   │   └── Footer.astro        ← Site footer
│   ├── layouts/
│   │   └── Layout.astro        ← HTML wrapper + global scripts
│   ├── pages/
│   │   └── index.astro         ← Homepage (assembles all sections)
│   └── styles/
│       └── global.css          ← Design tokens, fonts, animations
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

### Adding Real Images

Replace the gradient placeholder blocks with actual `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="placeholder-sage rounded-md aspect-[4/3]">...</div>

<!-- After (real image) -->
<img src="/images/recipe-01.jpg" alt="Description" class="rounded-md aspect-[4/3] object-cover" />
```

### Brand Colors

Edit `tailwind.config.mjs` → `theme.extend.colors.brand` to adjust the palette.

### Content

All example content (recipes, products, programs, testimonials) is in the respective component files as plain arrays — edit the data directly.

### Adding New Pages

Create new `.astro` files in `src/pages/`. Astro auto-generates routes from the file structure.

## Deployment

```bash
npm run build     # Output in ./dist/
```

Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or any static host.

## Tech Stack

- **Astro 5** — zero-JS static site generator
- **Tailwind CSS 3** — utility-first styling
- **Google Fonts** — UnifrakturMaguntia (blackletter logo), Cormorant Garamond (serif headings), DM Sans (body)
