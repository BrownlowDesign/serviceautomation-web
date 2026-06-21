import { generatePageMetadata, generateFAQSchema, generateServiceSchema } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

const faqs = [
  {
    question: "My business is fine without a website — why does this matter?",
    answer:
      "Most homeowners search Google before they call anyone. If you're not showing up, they're calling your competitor. A basic presence with no optimization is the same as not being there at all — they find someone else before they ever find you.",
  },
  {
    question: "What does 'optimization' actually mean in plain English?",
    answer:
      "It means your website shows up when someone in your area searches for what you do. It means when they land on your page, they can quickly figure out what you offer and how to reach you. It means you get the call instead of them bouncing back to Google.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Local search improvements typically show up within 4-8 weeks. Conversion improvements on your existing traffic happen immediately — the page works better from day one. We track both so you can see what's moving.",
  },
  {
    question: "Do I need to know anything about websites to use this?",
    answer:
      "Nothing. We handle all of it — setup, changes, updates. You'll get a report each month showing how your site is performing. That's all you need to know.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Most of the businesses we work with already have a site — it's just not doing much. We can optimize what you have or rebuild it from scratch depending on what makes more sense. We'll tell you which before we start.",
  },
];

export const metadata = generatePageMetadata({
  title: "Website Optimization for Contractors",
  description:
    "Your website should be bringing in jobs, not sitting there. We make sure customers in your area find you on Google — and call you when they do.",
  path: "/website-optimization",
  keywords: [
    "contractor website optimization",
    "local SEO for contractors",
    "plumber website SEO",
    "HVAC local search",
    "home services Google ranking",
    "contractor Google Maps",
    "landscaping SEO",
    "roofing company website",
    "local search optimization service business",
  ],
});

export default function WebsiteOptimization() {
  const serviceSchema = generateServiceSchema(
    "Website Optimization for Service Businesses",
    "Local SEO and conversion optimization for home service contractors — so the right customers find you on Google and call you when they do.",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      <LandingPage
        hero={{
          headline: "Your website should be bringing in calls.",
          subhead:
            "Right now, customers in your area are searching Google for exactly what you do. If your site isn't optimized, they're finding someone else. We fix that — and we track every call it generates so you can see exactly what it's worth.",
        }}
        sections={[
          {
            heading: "Show up when customers are looking",
            body: "When a homeowner searches “plumber near me” or “pressure washing [your city],” Google decides who shows up. That decision is based on dozens of signals — your site speed, your content, your reviews, how your business is listed across the web.\n\nWe tune all of those signals for your business so that you’re the name they see first. First result gets the click. First call wins the job.",
          },
          {
            heading: "Get more calls from the traffic you already have",
            body: "Most contractor websites have the same problem: people land on the page, can't quickly figure out what you do or where you work, and leave. That's traffic you paid for — in ads, in SEO work, in time — walking out the door.\n\nWe rebuild your pages so that someone who lands there knows in ten seconds: what you do, where you work, and how to reach you. Then we make it dead simple to call or book.",
          },
          {
            heading: "Google Maps is where local jobs start",
            body: "For most home service searches, the calls go to the businesses in the map pack — the three listings that show up before the regular results. Getting into that pack is about your Google Business Profile, your reviews, and how consistent your information is across the web.\n\nWe manage all of it. We keep your profile current, make sure your listings match everywhere, and help you build the review count that moves you up.",
          },
          {
            heading: "You see exactly what it's doing for your business",
            body: "Every month you get a simple report: how many people found you on Google, how many called, and what changed from the month before. No jargon. No confusing dashboards. Just the numbers that tell you whether it's working.",
          },
        ]}
        faqs={faqs}
        sourcePage="website-optimization"
      />
    </>
  );
}
