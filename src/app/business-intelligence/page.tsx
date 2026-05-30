import { generatePageMetadata } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

export const metadata = generatePageMetadata({
  title: "Know Your Numbers — Business Intelligence for Contractors",
  description: "See where your leads come from, which ones convert, and how much revenue each source brings in. Data that big companies pay teams for, on your phone every evening.",
  path: "/business-intelligence",
  keywords: ["contractor business analytics", "home services KPIs", "lead tracking plumber", "where do my leads come from", "contractor dashboard"],
});

export default function BusinessIntelligence() {
  return (
    <LandingPage
      hero={{ headline: "Stop guessing. Start knowing.", subhead: "Most service businesses run on gut feel. How many leads did you get this month? Where did they come from? How many turned into jobs? If you can't answer those questions, you're flying blind." }}
      sections={[
        { heading: "Where your leads actually come from", body: "Google, Yelp, Nextdoor, word of mouth, yard signs — we track every lead source. After a few months, you'll know exactly which marketing is bringing in jobs and which is wasting your money." },
        { heading: "Your full conversion funnel", body: "60 calls this month → 45 qualified leads → 30 quotes → 22 booked → 20 completed. You can see exactly where leads are dropping off. Maybe your pricing is off. Maybe your follow-up needs work. You can't fix what you can't see." },
        { heading: "Revenue by source", body: "Not just lead counts — actual revenue tied back to where the customer came from. \"Google Ads brought in $12,000 this month. Nextdoor brought in $3,000. Yard signs brought in $8,000.\" No pressure washing company has ever had this data. You will." },
        { heading: "Seasonal forecasting", body: "After a year of data, we predict your busy and slow periods. \"Based on last year, bookings drop 40% in November. Want to run a gutter cleaning promotion to fill the schedule?\" Plan ahead instead of reacting." },
      ]}
      sourcePage="business-intelligence"
    />
  );
}
