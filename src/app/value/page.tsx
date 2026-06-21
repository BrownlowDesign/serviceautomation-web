import LeadForm from "@/components/LeadForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "The Value",
  description:
    "A typical home services business with 5 employees misses $10,000–25,000 per month in lost opportunities. Here's the math on what a system that runs itself is actually worth.",
  path: "/value",
  keywords: ["missed calls cost", "home services revenue", "service business ROI"],
});

export default function ValuePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <span className="eyebrow">The Numbers</span>
        <h1>The value of Service Automation</h1>
        <p className="hero-subhead">
          Most service businesses don&apos;t lose jobs because of bad work. They lose them to missed
          calls, forgotten follow-ups, and customers who never came back.
        </p>
      </section>

      {/* VALUE MATH */}
      <section className="value-math">
        <div className="value-math-inner">
          <p className="value-math-label">A typical home services business with 5 employees:</p>

          <ul className="value-lost-list">
            <li>Misses 10–15 calls per week = 50+ per month</li>
            <li>Each missed call is a potential $200–500 job</li>
            <li>That&apos;s $10,000–25,000 per month in lost opportunities</li>
            <li>Close even 20% of those = $2,000–5,000 in recovered revenue</li>
          </ul>

          <div className="value-plus-list">
            <div className="value-plus-item">
              <span className="value-plus-sign">+</span>
              <span>Repeat customers coming back who weren&apos;t going to</span>
            </div>
            <div className="value-plus-item">
              <span className="value-plus-sign">+</span>
              <span>Reviews you weren&apos;t getting</span>
            </div>
            <div className="value-plus-item">
              <span className="value-plus-sign">+</span>
              <span>Quote follow-ups you weren&apos;t doing</span>
            </div>
          </div>

          <div className="value-taglines">
            <span>No application to log into</span>
            <span>A system that runs itself.</span>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="content-section">
        <h2>Where the money actually goes.</h2>
        <p>
          When a call goes unanswered, that job doesn&apos;t disappear — it goes to whoever picks
          up next. When a quote sits without a follow-up, the customer takes the next estimate that
          shows up. When a past customer doesn&apos;t hear from you, they forget you exist by the
          time they need you again.
        </p>
        <p>
          None of this is your fault. You&apos;re running jobs, managing your crew, dealing with
          suppliers. There&apos;s no time left to chase. That&apos;s exactly what the system handles.
        </p>
      </section>

      <section className="content-section">
        <h2>What it costs vs. what it returns.</h2>
        <p>
          Our Entry tier starts at $500–800 per month. If your system recovers even one $400 job a
          week that would have slipped — you&apos;re at $1,600 a month in recovered revenue against
          an $800 cost. That&apos;s before reviews, before repeat bookings, before the quote
          follow-ups that close work you already did.
        </p>
        <p>
          Most clients see the system pay for itself within the first 30 days. After that, it&apos;s
          just money you were already leaving on the table — now collected.
        </p>
        <a href="/pricing" className="section-link">
          See pricing →
        </a>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <LeadForm sourcePage="value" />
      </section>
    </main>
  );
}
