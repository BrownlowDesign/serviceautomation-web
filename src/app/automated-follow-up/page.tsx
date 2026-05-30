import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

const faqs = [
  {
    question: "How does the follow-up work?",
    answer: "After you give a quote, the system sends it to the customer in a clean format. If they haven't responded in three days, it sends a friendly check-in. Another one at day seven. Natural, no-pressure — just making sure they didn't forget.",
  },
  {
    question: "Can I customize the follow-up messages?",
    answer: "The messages are written in your voice, based on how you communicate with customers. We set this up during onboarding so everything sounds like it came from you.",
  },
  {
    question: "What if the customer replies?",
    answer: "Replies are handled intelligently. If they say yes, we move to booking. If they have questions, we answer what we can and flag anything that needs your personal attention.",
  },
];

export const metadata = generatePageMetadata({
  title: "Close More Quotes with Automated Follow-Up",
  description: "Most contractors never follow up on quotes. Our system follows up at day 3 and day 7 automatically — so you close more jobs without thinking about it.",
  path: "/automated-follow-up",
  keywords: ["quote follow up automation", "contractor CRM", "close more estimates", "plumber quote follow up", "HVAC sales follow up"],
});

export default function AutomatedFollowUp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <LandingPage
        hero={{ headline: "Stop leaving money on the table.", subhead: "You gave a fair quote. Then you got busy and forgot to follow up. The customer went with someone who did. It happens every week — and it's the easiest revenue leak to fix." }}
        sections={[
          { heading: "Every quote followed up, every time", body: "You give the quote. We send it in a clean format, then follow up at day three and day seven with friendly, natural messages. No pressure, no spam — just a check-in that shows you're professional and on top of things.\n\nMost of your competitors never follow up once. You'll follow up every time without lifting a finger." },
          { heading: "Know where every quote stands", body: "See which quotes are open, which have been followed up, and which converted to jobs. No more guessing whether you called that person back. The system tracks everything so you always know where your pipeline stands." },
          { heading: "Win-back campaigns for old leads", body: "Someone got a quote six weeks ago and never booked? When the season picks up, we reach back out: \"Spring's here and we're filling up fast. Still want that driveway done?\" These are warm leads that already trust you — they just need a nudge." },
        ]}
        faqs={faqs}
        sourcePage="automated-follow-up"
      />
    </>
  );
}
