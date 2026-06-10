@AGENTS.md

# CLAUDE.md — Service Automation Website

## Project Overview
Marketing website and lead capture for Service Automation (serviceautomation.pro). Next.js with individual SEO-optimized landing pages for each value proposition.

## Tech Stack
- Next.js 16.2.6, React, TypeScript, Tailwind CSS
- Node v22.22.2 (at /root/.local/bin/node — system Node v18 is too old)

## Project Structure
```
src/
  app/
    page.tsx                — Homepage with full value prop
    layout.tsx              — Global nav + footer
    globals.css             — Skeleton styles (needs design work)
    never-miss-a-call/      — SEO landing page
    automated-follow-up/    — SEO landing page
    smart-scheduling/       — SEO landing page
    reputation/             — SEO landing page
    repeat-customers/       — SEO landing page
    business-intelligence/  — SEO landing page
    back-office/            — SEO landing page
    signup/                 — Customer onboarding form (Twilio CTA)
    privacy/                — Privacy policy
    terms-and-conditions/   — Terms of service
    api/leads/              — Form submission API route
    sitemap.ts              — Auto-generated sitemap
    robots.ts               — robots.txt
  components/
    LeadForm.tsx            — Interest form (used on homepage + landing pages)
    LandingPage.tsx         — Reusable landing page template
  lib/
    config.ts               — Site name, API URL, nav links (single source of truth)
    seo.ts                  — Metadata + JSON-LD helpers
public/
  llms.txt                  — AI search optimization
```

## Commands
- Build: `npm run build`
- Deploy: `npm run build && systemctl restart serviceautomation-web`
- View logs: `tail -50 /var/log/serviceautomation-web.log`
- Status: `systemctl status serviceautomation-web`
- Push: `git add -A && git commit -m "message" && git push`

## Important Rules
- Runs on port 3001 (NOT 3000 — that's Hermes/George)
- Use /root/.local/bin/npm for all npm commands in systemd
- Backend API is at https://api.serviceautomation.pro (separate project at /home/field-agent)
- Form submissions POST to /api/leads which saves locally AND forwards to the backend
- Website leads are wired to Service Automation business (b2b2b2b2-b2b2-b2b2-b2b2-b2b2b2b2b2b2)
- No AI language in customer-facing copy — focus on outcomes
- Design is skeleton/unstyled — George + Paper will handle design

## Content Guidelines
- Target audience: blue collar business owners who don't trust/care about AI
- Tone: direct, no-nonsense, empathetic to their daily grind
- Never say "AI", "automation platform", "machine learning"
- Instead say "system", "we handle it", "it just happens", "runs in the background"
- Tagline: "Do the work. Count the money. We handle everything else."
