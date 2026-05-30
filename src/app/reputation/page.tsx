import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

const faqs = [
  { question: "How do you get customers to leave reviews?", answer: "After a job is completed, the customer gets a friendly text with a direct link to your Google review page. It's timed right — they just saw the great work you did. Most people are happy to leave a review when you make it easy." },
  { question: "What about negative reviews?", answer: "When a negative review comes in, we draft a professional, empathetic response for you to approve before it's posted. Responding quickly and thoughtfully to criticism actually builds trust with future customers who read your reviews." },
  { question: "How many more reviews can I expect?", answer: "Most businesses we work with go from 1-2 reviews per month to 6-10 — just by asking consistently. That kind of velocity makes a big difference in how Google ranks you in local search." },
];

export const metadata = generatePageMetadata({
  title: "Get More Google Reviews on Autopilot",
  description: "Automatically request reviews after every job, monitor your Google profile, and respond to reviews fast. More reviews, better ratings, more calls.",
  path: "/reputation",
  keywords: ["get more Google reviews contractor", "review management home services", "plumber Google reviews", "reputation management HVAC", "how to get more reviews"],
});

export default function Reputation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <LandingPage
        hero={{ headline: "Your reputation is your business. We protect it.", subhead: "Google reviews are the number one thing potential customers look at before they call. Most service businesses know this but never systematically ask for reviews. We fix that." }}
        sections={[
          { heading: "Every happy customer asked, every time", body: "After every completed job, your customer gets a thank-you text with a direct link to leave a Google review. No awkward asking, no remembering — it just happens.\n\nThe timing is perfect: they just watched you transform their driveway. That's when they're most willing to say something nice." },
          { heading: "Reviews monitored and responded to", body: "When a new review comes in, you get notified and we draft a response. Five-star review? A quick, genuine thank-you posted within hours. Less than five stars? A thoughtful reply that shows you care — drafted for your approval before it goes live.\n\nBusinesses that respond to reviews get 12% more calls from Google. It signals that you're active and you care." },
          { heading: "Before-and-after proof that sells", body: "After each job, we prompt you or your crew to snap a before-and-after photo. Over time, you build a library of visual proof that sells better than any ad. Use them on your Google profile, your website, or social media." },
        ]}
        faqs={faqs}
        sourcePage="reputation"
      />
    </>
  );
}
