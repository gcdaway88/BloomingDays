# Flower Shop Website — Requirements

## Project Overview

A professional flower shop website built with free tools (domain cost only). Features a product catalog, blog, and customer inquiry form. No backend server or payment processor required at launch.

- **Estimated cost:** ~₱700/year (domain name only)
- **Estimated launch time:** 1–2 weeks working part-time

---

## Functional Requirements

### Catalog
- Display flower arrangements in a grid layout
- Each item shows: photo, name, description, and price range
- Single product detail page with an inquiry button pre-filled with the product name

### Blog
- Publish blog posts (care tips, seasonal arrangements, behind-the-scenes)
- Posts written in Markdown, rendered as pages by Next.js

### Contact / Inquiry Form
- Fields: Name, Email, Phone (optional), Which arrangement, Message
- Submitting the form sends an email directly to the shop owner
- Spam protection via honeypot field (hidden input — no CAPTCHA)
- No built-in checkout; payments handled offline after inquiry (GCash, bank transfer, etc.)

### Pages
- **Home** — hero image, tagline, featured arrangements, CTA buttons
- **Catalog** — grid of all arrangements
- **Product detail** — individual arrangement view with inquiry button
- **About** — shop story and what makes the flowers special
- **Contact** — inquiry form

---

## Non-Functional Requirements

- **Mobile-first** — design for phones, then scale up to desktop
- **Performance** — compress all photos with Squoosh.app before uploading
- **SEO** — page titles, meta descriptions, Open Graph images (Next.js built-in)
- **No backend** at launch — catalog and blog served as static files; contact form uses a single serverless API route

---

## Tech Stack

| Tool | Purpose | Cost |
|---|---|---|
| Google Stitch | Design mockups — generate page layouts from text prompts | Free |
| Claude (claude.ai) | Convert Stitch HTML exports into React components | Free |
| Next.js (React) | Frontend framework — pages, routing, blog rendering | Free |
| Tailwind CSS | Styling — works well with Stitch-exported code | Free |
| Vercel | Hosting + serverless functions — auto-deploys from GitHub | Free |
| GitHub | Code storage and deployment pipeline | Free |
| Markdown files | Content management for catalog and blog posts | Free |
| Resend or Formspree | Contact/inquiry form → emails shop owner directly | Free |
| Squoosh.app | Compress flower photos before uploading | Free |
| Namecheap / Cloudflare | Domain name registration | ~₱700/year |

---

## Build Phases

### Phase 1 — Design Pages (1–2 days)
- Use Google Stitch to mock up: Home, Catalog, About, Contact
- Create a `DESIGN.md` describing the brand vibe (e.g. "soft, romantic, pastel florals")
- Export HTML/CSS from Stitch as a visual blueprint

### Phase 2 — Project Setup (1 day)
- Scaffold with `npx create-next-app@latest`
- Install Tailwind CSS
- Push to GitHub and connect to Vercel for auto-deploy on every commit

### Phase 3 — Build Frontend Pages (3–5 days)
- Build Home, Catalog, Product detail, and About pages
- Use Claude to convert Stitch HTML exports into clean React components

### Phase 4 — Content Setup (1–2 days)
- Write flower catalog as Markdown files (one file per arrangement)
- Load catalog using Next.js static file reading — no database needed
- Write blog posts in Markdown; Next.js renders them as pages
- Compress all photos with Squoosh.app before adding

### Phase 5 — Contact Form (1 day)
- Sign up for Resend (free) and obtain an API key
- Create a Next.js API route to receive form data and send email
- Implement honeypot spam protection
- Alternative: use Formspree with a plain HTML form action URL

### Phase 6 — Polish and Launch (1–2 days)
- Buy domain on Namecheap or Cloudflare (~₱700/year) and connect to Vercel
- Add SEO metadata and Open Graph images
- Test contact form end-to-end
- Verify mobile layout

---

## Future Upgrades (Post-Launch)

| Feature | Tool |
|---|---|
| Online checkout | Stripe or PayMongo |
| Inventory management | Supabase (free tier) |
| Booking / delivery scheduling | Calendly (free tier) |
| Customer accounts | Custom (only if order history / wishlists needed) |
| Analytics | Vercel Analytics (free) |

---

## Content Guidelines

- Launch with 5–10 catalog items — quality over quantity
- Design mockup must be approved before writing any code
- Markdown files as CMS is sufficient for a small shop at launch
