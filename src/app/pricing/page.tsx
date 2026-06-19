import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three tiers. Every call answered, every quote followed up, every customer kept. Starting at $500/month.",
};

const tiers = [
  {
    id: "entry",
    eyebrow: "Entry",
    name: "Stop losing jobs",
    price: "$500–800",
    period: "/month",
    description:
      "The essentials. Answers every call, captures every lead, follows up on every quote. Competes directly with the $200/month tools — and actually works.",
    features: [
      "Voice agent answers calls when you can't",
      "Instant owner notification by text",
      "Professional quote delivery",
      "Automated follow-ups at day 3 and day 7",
      "Custom-built for your business, not a template",
    ],
    cta: "Get started",
    ctaHref: "/signup",
    featured: false,
  },
  {
    id: "growth",
    eyebrow: "Growth",
    name: "Run your operations",
    price: "$1,500–2,000",
    period: "/month",
    description:
      "Everything in Entry, plus the full operational layer. Reviews, reminders, campaigns, and daily summaries. A category the $200/month tools can't touch.",
    features: [
      "Everything in Entry",
      "Automated review requests after every job",
      "Recurring maintenance reminders",
      "Seasonal campaigns to past customers",
      "Morning and evening business summaries",
      "Job confirmation and day-before reminders",
    ],
    cta: "Get started",
    ctaHref: "/signup",
    featured: true,
  },
  {
    id: "full-suite",
    eyebrow: "Full Suite",
    name: "We run your growth",
    price: "$2,500–3,500",
    period: "/month",
    description:
      "Everything in Growth, plus a custom SEO website with 100+ location pages, ongoing content, and the full campaign engine. No competitor offers this at any price.",
    features: [
      "Everything in Growth",
      "Custom SEO-optimized website",
      "100+ location pages built and maintained",
      "Ongoing content updates",
      "Full campaign engine",
      "Dedicated account management",
    ],
    cta: "Talk to us",
    ctaHref: "/signup",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <span className="eyebrow">Straightforward pricing</span>
        <h1>Start where you are. Grow when you&apos;re ready.</h1>
        <p className="hero-subhead">
          Every tier is a complete system — not a trial, not a feature unlock. Pick the one that fits where your business is today.
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="pricing-section">
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div key={tier.id} className={`pricing-card${tier.featured ? " pricing-card--featured" : ""}`}>
              <div className="pricing-card-header">
                <span className="pricing-eyebrow">{tier.eyebrow}</span>
                {tier.featured && <span className="pricing-badge">Most popular</span>}
              </div>
              <h2 className="pricing-name">{tier.name}</h2>
              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.period}</span>
              </div>
              <p className="pricing-description">{tier.description}</p>
              <ul className="pricing-features">
                {tier.features.map((feature) => (
                  <li key={feature} className="pricing-feature">
                    <span className="pricing-check" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={tier.ctaHref} className="pricing-cta">
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXT */}
      <section className="content-section">
        <h2>Why the price gap from the $200/month tools?</h2>
        <p>
          The cheap tools are templates. You get a generic voice recording, a generic follow-up text, and a dashboard you have to log into and manage. They work fine for a dentist or a yoga studio. They don&apos;t work for a pressure washer running jobs in six neighborhoods with seasonal demand and a crew that changes every month.
        </p>
        <p>
          We build a system around your business. Your service areas, your pricing, your schedule, your voice. When a customer calls, the system knows what you do, where you work, and what to say. That takes setup. It takes ongoing tuning. And it gets better over time — your system learns your business as we go.
        </p>
      </section>

      <section className="content-section">
        <h2>What &ldquo;custom-built&rdquo; actually means.</h2>
        <p>
          Before we turn anything on, we spend time with you. We learn your trade, your service area, your most common jobs, your busiest times of year. We set up every message, every response, every follow-up sequence around that. Then we test it until it sounds like you — not like a robot.
        </p>
        <p>
          Most of our clients are fully running within two weeks. After that, you don&apos;t touch it. It runs. You get the summaries, the notifications, and the bookings. We handle the rest.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Common questions</h2>

        <details>
          <summary>Is there a contract?</summary>
          <p>Month-to-month. No long-term commitment. Most clients stick around because the system works — not because they have to.</p>
        </details>

        <details>
          <summary>How long does setup take?</summary>
          <p>Most businesses are live within two weeks. We handle the setup — you answer a few questions and we build the rest.</p>
        </details>

        <details>
          <summary>What if I want to upgrade later?</summary>
          <p>Easy. Everything carries over — your call history, your customer list, your settings. You don&apos;t start over, you just add more on top.</p>
        </details>

        <details>
          <summary>Why is Full Suite so much more?</summary>
          <p>The custom website with 100+ location pages is a significant build — we&apos;re talking real SEO infrastructure that would cost $10,000+ as a one-time project from a web agency. With Full Suite, you get it built, maintained, and updated every month for a flat rate. No dev bills, no agency retainers.</p>
        </details>

        <details>
          <summary>What kind of businesses is this for?</summary>
          <p>Blue collar service businesses — pressure washing, window cleaning, HVAC, landscaping, roofing, plumbing. If you run jobs, answer calls, and send quotes, this is for you.</p>
        </details>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <LeadForm sourcePage="pricing" />
      </section>
    </main>
  );
}
