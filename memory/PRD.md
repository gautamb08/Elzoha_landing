# Elzoha Landing Page — PRD

## Original Problem Statement
Build a premium dark futuristic landing page for "Elzoha" — an AI Business Assistant for Indian Vendors that works through WhatsApp. Positioning: "Run your business on WhatsApp."

## User Personas
- **Indian SMB Vendors**: Wholesalers, retailers, manufacturers who run operations on WhatsApp
- **Small business owners**: Looking for AI-powered invoicing, quotations, and business automation

## Core Requirements
- Dark futuristic UI with emerald green accents (WhatsApp-themed)
- Animated WhatsApp conversation in hero section
- 8 feature cards in bento grid layout
- 3 pricing tiers (Starter ₹999, Growth ₹2,999, Business Custom)
- Waitlist modal popup (Kit form embed)
- FAQ accordion
- Mobile-first, responsive design
- Premium animations (framer-motion)

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion + Shadcn UI
- **Backend**: FastAPI (minimal, no waitlist storage currently)
- **Design**: Dark theme (#050505), emerald accents (#10B981), Outfit + Manrope fonts

## What's Been Implemented (December 2025)
- Full landing page with all 12+ sections
- Animated WhatsApp conversation in hero
- Responsive navbar with glass morphism effect
- Social proof badges
- Problem section with vendor photo
- Solution section with 8 feature bento grid
- Interactive workflow animation (5 steps)
- Voice workflow section with waveform animation
- Dashboard preview section
- Business policies section (3 examples)
- Pricing section (3 tiers with highlighted Growth plan)
- Waitlist modal (Shadcn Dialog with form fields)
- FAQ section (Shadcn Accordion, 6 items)
- CTA section
- Footer with links and social
- Mobile-first responsive design
- All interactive elements have data-testid attributes

## Prioritized Backlog
### P0 (Critical)
- None remaining for MVP

### P1 (High)
- Integrate Kit form embed for actual waitlist collection
- Replace Calendly placeholder link with real demo booking URL
- Add real social media links (Twitter, LinkedIn, Instagram)
- Add real email address

### P2 (Medium)
- Add testimonials / vendor logos when available
- Analytics integration (Google Analytics / Mixpanel)
- SEO meta tags and Open Graph tags
- Performance optimization (lazy loading images)
- Custom domain setup
- Cookie consent banner

## Next Tasks
1. Replace waitlist form with Kit form embed or connect to backend for lead storage
2. Add real Calendly link for demo booking
3. Add SEO meta tags and OG images
4. Set up analytics tracking
5. Add real contact information and social links
