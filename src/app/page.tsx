import LeadForm from "@/components/LeadForm";
import { Hero, Section, StatsStrip } from "@/components/ui";

const STATS = [
  { number: "100%", label: "Calls answered" },
  { number: "3×",   label: "More quote follow-ups" },
  { number: "24/7", label: "Runs in the background" },
  { number: "$0",   label: "To start" },
];

const FEATURES: { heading: string; body: string; href?: string }[] = [
  {
    heading: "We run your customer operations so you can run your crew.",
    body: "We set up custom systems that handle everything between the first phone call and the repeat booking — automatically, behind the scenes, 24/7.",
  },
  {
    heading: "Every call answered. Every lead captured.",
    body: "Right now, when you're up on a ladder or running a pressure washer, the phone rings and goes to voicemail. That customer calls someone else. Job gone.\n\nWe fix that. When you can't pick up, our system answers the call, finds out what they need, gives them a price range, and books the estimate — then texts you the details instantly. By the time you check your phone, the lead is already on your schedule.",
    href: "/never-miss-a-call",
  },
  {
    heading: "Every quote followed up. Automatically.",
    body: "You drive out, look at the job, give a fair price. Then you get busy and forget to follow up. We send the quote in a clean format, then follow up at day three and day seven. Most of your competitors never follow up once. You'll follow up every time without thinking about it.",
    href: "/automated-follow-up",
  },
  {
    heading: "Booked, confirmed, and reminded — no phone tag.",
    body: "When a job gets booked, your customer gets a professional confirmation immediately. The day before, they get a reminder. You get a morning summary with addresses and details. Rain in the forecast? We'll flag it, reschedule the job, and let the customer know.",
    href: "/smart-scheduling",
  },
  {
    heading: "Turn every job into more business.",
    body: "After every completed job, your customer gets a thank-you text and an easy link to leave a Google review. When a new review comes in, we draft a response so your profile stays active and professional. More reviews, better ratings, more calls from Google.",
    href: "/reputation",
  },
  {
    heading: "Customers that keep coming back.",
    body: "Twelve months after a window cleaning, your customer gets a text asking if they want to get on the spring schedule. Had their driveway done but never got their windows cleaned? We reach out with an easy upsell. Doing a job on their street? We text nearby past customers. Seasonal campaigns, referral requests, dormant customer reactivation — all running in the background.",
    href: "/repeat-customers",
  },
  {
    heading: "See your business like never before.",
    body: "How many calls came in this month and where they came from. How many turned into quotes. How many quotes turned into jobs. How much revenue each source brought in. Your end-of-day summary tells you: jobs completed, revenue earned, new leads captured, reviews received. This is the kind of data big companies have entire teams for. You get it on your phone every evening.",
    href: "/business-intelligence",
  },
  {
    heading: "The back office stuff — handled.",
    body: "Job's done? The invoice goes out automatically. Payment hasn't come in after a week? A polite reminder gets sent. No chasing. No awkward conversations. The busywork that eats your evenings and weekends? It's not your problem anymore.",
    href: "/back-office",
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Design partners — limited spots"
        headline="Less chasing leads. More doing the work."
        subhead="We handle everything between the first call and the repeat booking — automatically, while you're on the job."
        cta={{ href: "#signup", label: "Get early access" }}
        note="No cost · No commitment"
      />

      <StatsStrip stats={STATS} />

      {FEATURES.map((f) => (
        <Section key={f.href ?? f.heading}>
          <h2>{f.heading}</h2>
          {f.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          {f.href && <a href={f.href} className="section-link">Learn more →</a>}
        </Section>
      ))}

      <Section highlight>
        <h2>You focus on doing great work. The rest just happens.</h2>
        <p>
          Every missed call, forgotten follow-up, and lost repeat customer is money walking out the door.
          We close those gaps — all of them — with a system built specifically for your business.
          Not an app you'll never log into. Not software with a hundred buttons. A system that runs
          quietly in the background and puts money in your pocket.
        </p>
      </Section>

      <section className="cta-section">
        <LeadForm sourcePage="homepage" />
      </section>
    </main>
  );
}
