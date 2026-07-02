import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>Every lead captured.<br />Every customer satisfied.</h1>
        <p className="hero-subhead">
          We handle everything between the first call and the repeat booking — automatically, while you&apos;re on the job.
        </p>
        <a href="#signup" className="hero-cta">Get early access</a>
        <p className="hero-note">No cost · No commitment</p>
      </section>

      {/* PAIN STRIP */}
      <div className="pain-strip">
        <div className="pain-item">
          <span className="pain-icon">📞</span>
          <p>Phone rings while you&apos;re on a job. Customer calls someone else.</p>
        </div>
        <div className="pain-item">
          <span className="pain-icon">📋</span>
          <p>Quotes sent but never followed up. Money left on the table.</p>
        </div>
        <div className="pain-item">
          <span className="pain-icon">👋</span>
          <p>Customers who used you once and disappeared. No reason — just forgot.</p>
        </div>
      </div>

      {/* WHAT WE DO — SPLIT PANEL */}
      <section className="split-panel">
        <div className="split-panel-left">
          <span className="eyebrow">What we do</span>
          <h2>Your business keeps running — even when you&apos;re on a job.</h2>
          <p>
            Calls get answered. Quotes get followed up. Customers get rebooked.
            We wire it all together for your specific business in 1–2 weeks,
            then it runs in the background while you work.
          </p>
        </div>
        <div className="split-panel-right">
          <span className="eyebrow split-panel-eyebrow">Not another app to manage</span>
          <h2>This isn&apos;t another app with a login and a dashboard.</h2>
          <p>
            No buttons to push. No tabs to check. No training videos. It works
            like a great office manager — things just get done and you hear
            about it at the end of the day.
          </p>
        </div>
      </section>

      {/* PRIMARY FEATURES — CARDS */}
      <section className="features-primary">
        <div className="features-primary-header">
          <span className="eyebrow">How we help</span>
          <h2>The three things that cost you the most money — fixed.</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Every call answered</h3>
            <p>
              When you can&apos;t pick up, our system answers, finds out what they
              need, gives a price range, and books the estimate. By the time you
              check your phone, the lead is on your schedule.
            </p>
            <a href="/never-miss-a-call" className="section-link">Learn more →</a>
          </div>
          <div className="feature-card">
            <h3>Every quote followed up</h3>
            <p>
              We send the quote in a clean format, then follow up at day three
              and day seven. Most competitors never follow up once. You&apos;ll
              follow up every time without thinking about it.
            </p>
            <a href="/automated-follow-up" className="section-link">Learn more →</a>
          </div>
          <div className="feature-card">
            <h3>Customers that keep coming back</h3>
            <p>
              Twelve months later, your customer gets a text about the spring
              schedule. Seasonal campaigns, referral requests, dormant
              reactivation — all running in the background.
            </p>
            <a href="/repeat-customers" className="section-link">Learn more →</a>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="mid-cta">
        <h2>Ready to stop losing jobs?</h2>
        <p>Get set up in 1–2 weeks. No contracts, no risk.</p>
        <a href="#signup" className="hero-cta">Get early access</a>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <span className="eyebrow">How it works</span>
        <h2>Three steps. Then it runs itself.</h2>
        <div className="steps-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>We learn your business</h3>
            <p>A 30-minute call. We learn how you quote, schedule, and follow up — so the system works the way you already work.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>We build it</h3>
            <p>In 1–2 weeks, your system is live — handling calls, sending follow-ups, managing reviews, and booking repeats.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>It runs itself</h3>
            <p>You do the work. The system handles everything else. You get a daily summary of what happened while you were busy.</p>
          </div>
        </div>
      </section>

      {/* SECONDARY FEATURES — COMPACT GRID */}
      <section className="features-secondary">
        <span className="eyebrow">Everything else, handled</span>
        <div className="features-compact-grid">
          <div className="feature-compact">
            <h3>Smart scheduling</h3>
            <p>Confirmations, reminders, weather rescheduling — no phone tag.</p>
            <a href="/smart-scheduling" className="section-link">Learn more →</a>
          </div>
          <div className="feature-compact">
            <h3>Reputation &amp; reviews</h3>
            <p>Automatic review requests after every job. Responses drafted for you.</p>
            <a href="/reputation" className="section-link">Learn more →</a>
          </div>
          <div className="feature-compact">
            <h3>Business intelligence</h3>
            <p>Daily summary: calls, quotes, jobs, revenue. On your phone every evening.</p>
            <a href="/business-intelligence" className="section-link">Learn more →</a>
          </div>
          <div className="feature-compact">
            <h3>Back office</h3>
            <p>Invoices go out automatically. Late payments get polite reminders. No chasing.</p>
            <a href="/back-office" className="section-link">Learn more →</a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="proof-section">
        <h2>Built for businesses like yours</h2>
        <div className="proof-grid">
          <div className="proof-stat">
            <span className="proof-number">100%</span>
            <span className="proof-label">of calls answered — even nights and weekends</span>
          </div>
          <div className="proof-stat">
            <span className="proof-number">3×</span>
            <span className="proof-label">more quotes converted with automatic follow-up</span>
          </div>
          <div className="proof-stat">
            <span className="proof-number">1–2 weeks</span>
            <span className="proof-label">from first call to fully running system</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section" id="signup">
        <LeadForm sourcePage="homepage" />
      </section>
    </main>
  );
}
