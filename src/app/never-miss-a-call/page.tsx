import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

const faqs = [
  {
    question: "What happens when I miss a call?",
    answer:
      "Our system picks up automatically. It greets the caller, finds out what they need, gives a price range based on your rates, and offers to book an estimate. You get a text with all the details within 30 seconds of the call ending.",
  },
  {
    question: "Will callers know they're not talking to a real person?",
    answer:
      "The system sounds natural and conversational — not like a robot or a phone tree. It uses your business name and knows your services and pricing. Most callers just think they're talking to your office.",
  },
  {
    question: "What if someone asks a question the system can't handle?",
    answer:
      "It lets the caller know you'll call them back personally, captures their info, and notifies you immediately. Nothing falls through the cracks.",
  },
  {
    question: "Does this work after hours and on weekends?",
    answer:
      "24/7, 365 days a year. The calls that come in at 9pm on a Saturday — those are the ones your competitors are missing too. Now you catch every one.",
  },
];

export const metadata = generatePageMetadata({
  title: "Never Miss Another Call",
  description:
    "Stop losing jobs to voicemail. Our system answers every missed call, captures the lead, gives a quote, and texts you the details — 24/7.",
  path: "/never-miss-a-call",
  keywords: [
    "answering service for contractors",
    "missed call service HVAC",
    "plumber answering service",
    "never miss a customer call",
    "after hours answering service",
    "home services phone answering",
  ],
});

export default function NeverMissACall() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      <LandingPage
        hero={{
          headline: "Stop losing jobs to voicemail.",
          subhead:
            "You're on a job site. The phone rings. You can't answer. That customer calls someone else. It happens 10, 15, 20 times a week. Each one is a $200-500 job walking away. We make it stop.",
        }}
        sections={[
          {
            heading: "Every call answered, every lead captured",
            body: "When you can't pick up, our system answers the call like a friendly, knowledgeable office manager. It finds out what the caller needs, gives them a price range based on your rates, and offers to book an estimate.\n\nYou get a text instantly: who called, what they need, their address, and the price range they were given. By the time you check your phone between jobs, the lead is already captured and the customer already feels taken care of.",
          },
          {
            heading: "Your competitors are missing these calls too",
            body: "The average home services business misses 30-50% of inbound calls. That's not a guess — it's industry data. The business that answers first wins the job. When every one of your calls gets picked up, you're winning jobs your competitors don't even know they lost.",
          },
          {
            heading: "Built around your business, not a generic script",
            body: "This isn't a call center reading from a card. We learn your services, your pricing, your service area, and how you talk to customers. The system sounds like your business because it's built specifically for your business.",
          },
        ]}
        faqs={faqs}
        sourcePage="never-miss-a-call"
      />
    </>
  );
}
