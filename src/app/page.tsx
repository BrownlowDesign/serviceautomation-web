import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>Do the work. Count the money. We handle everything else.</h1>
        <p className="hero-subhead">
          You didn&apos;t start your business to chase leads, babysit your inbox,
          and wonder which customers forgot about you. You started it because
          you&apos;re damn good at what you do.
        </p>
        <p className="hero-subhead">
          What if every call got answered, every quote got followed up, every
          happy customer left a review, and past customers came back like
          clockwork — without you lifting a finger?
        </p>
        <a href="#signup" className="hero-cta">Get early access</a>
      </section>

      {/* WHAT WE DO */}
      <section className="content-section">
        <h2>We run your customer operations so you can run your crew.</h2>
        <p>
          We set up custom systems that handle everything between the first
          phone call and the repeat booking — automatically, behind the scenes, 24/7.
        </p>
      </section>

      {/* NEVER MISS */}
      <section className="content-section">
        <h2>Every call answered. Every lead captured.</h2>
        <p>
          Right now, when you&apos;re up on a ladder or running a pressure washer,
          the phone rings and goes to voicemail. That customer calls someone else.
          Job gone.
        </p>
        <p>
          We fix that. When you can&apos;t pick up, our system answers the call,
          finds out what they need, gives them a price range, and books the
          estimate — then texts you the details instantly. By the time you check
          your phone, the lead is already on your schedule.
        </p>
        <a href="/never-miss-a-call" className="section-link">Learn more →</a>
      </section>

      {/* FOLLOW UP */}
      <section className="content-section">
        <h2>Every quote followed up. Automatically.</h2>
        <p>
          You drive out, look at the job, give a fair price. Then you get busy
          and forget to follow up. We send the quote in a clean format, then
          follow up at day three and day seven. Most of your competitors never
          follow up once. You&apos;ll follow up every time without thinking about it.
        </p>
        <a href="/automated-follow-up" className="section-link">Learn more →</a>
      </section>

      {/* SCHEDULING */}
      <section className="content-section">
        <h2>Booked, confirmed, and reminded — no phone tag.</h2>
        <p>
          When a job gets booked, your customer gets a professional confirmation
          immediately. The day before, they get a reminder. You get a morning
          summary with addresses and details. Rain in the forecast? We&apos;ll
          flag it, reschedule the job, and let the customer know.
        </p>
        <a href="/smart-scheduling" className="section-link">Learn more →</a>
      </section>

      {/* REPUTATION */}
      <section className="content-section">
        <h2>Turn every job into more business.</h2>
        <p>
          After every completed job, your customer gets a thank-you text and an
          easy link to leave a Google review. When a new review comes in, we
          draft a response so your profile stays active and professional. More
          reviews, better ratings, more calls from Google.
        </p>
        <a href="/reputation" className="section-link">Learn more →</a>
      </section>

      {/* REPEAT CUSTOMERS */}
      <section className="content-section">
        <h2>Customers that keep coming back.</h2>
        <p>
          Twelve months after a window cleaning, your customer gets a text asking
          if they want to get on the spring schedule. Had their driveway done but
          never got their windows cleaned? We reach out with an easy upsell.
          Doing a job on their street? We text nearby past customers. Seasonal
          campaigns, referral requests, dormant customer reactivation — all
          running in the background.
        </p>
        <a href="/repeat-customers" className="section-link">Learn more →</a>
      </section>

      {/* BUSINESS INTELLIGENCE */}
      <section className="content-section">
        <h2>See your business like never before.</h2>
        <p>
          How many calls came in this month and where they came from. How many
          turned into quotes. How many quotes turned into jobs. How much revenue
          each source brought in. Your end-of-day summary tells you: jobs
          completed, revenue earned, new leads captured, reviews received. This
          is the kind of data big companies have entire teams for. You get it on
          your phone every evening.
        </p>
        <a href="/business-intelligence" className="section-link">Learn more →</a>
      </section>

      {/* BACK OFFICE */}
      <section className="content-section">
        <h2>The back office stuff — handled.</h2>
        <p>
          Job&apos;s done? The invoice goes out automatically. Payment hasn&apos;t
          come in after a week? A polite reminder gets sent. No chasing. No
          awkward conversations. The busywork that eats your evenings and
          weekends? It&apos;s not your problem anymore.
        </p>
        <a href="/back-office" className="section-link">Learn more →</a>
      </section>

      {/* BOTTOM LINE */}
      <section className="content-section highlight">
        <h2>You focus on doing great work. The rest just happens.</h2>
        <p>
          Every missed call, forgotten follow-up, and lost repeat customer is
          money walking out the door. We close those gaps — all of them — with a
          system built specifically for your business. Not an app you&apos;ll
          never log into. Not software with a hundred buttons. A system that runs
          quietly in the background and puts money in your pocket.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <LeadForm sourcePage="homepage" />
      </section>
    </main>
  );
}
