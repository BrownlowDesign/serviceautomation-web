import { generatePageMetadata } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

export const metadata = generatePageMetadata({
  title: "Turn One-Time Customers Into Repeat Revenue",
  description: "Recurring reminders, upsells, neighborhood campaigns, and referral requests — all automated. Past customers keep coming back without you chasing them.",
  path: "/repeat-customers",
  keywords: ["customer retention home services", "repeat customers contractor", "customer follow up automation", "recurring service reminders"],
});

export default function RepeatCustomers() {
  return (
    <LandingPage
      hero={{ headline: "Your past customers are a goldmine. Stop ignoring them.", subhead: "You've done great work for hundreds of people. Most of them would hire you again — if anyone reminded them. We make sure they never forget about you." }}
      sections={[
        { heading: "Recurring service reminders", body: "Twelve months after a window cleaning, your customer gets a text: \"Hey, it's about that time again. Want to get on the spring schedule?\" Customized for each service type and each customer's history. It runs automatically — you don't even think about it." },
        { heading: "Upsells that feel natural", body: "Had their driveway done but never got their windows cleaned? We reach out with an easy upsell. \"Your driveway looked great — a lot of our customers do windows and driveway together. Want a quote?\" You already have their trust. Cross-selling into other services you offer is the easiest revenue you'll ever earn." },
        { heading: "Neighborhood campaigns", body: "Doing a job on someone's street? We text nearby past customers: \"We're going to be in your neighborhood Thursday. Want us to swing by and knock out your windows while we're there?\" Minimal extra drive time, easy add-on revenue." },
        { heading: "Referral requests and dormant reactivation", body: "After a completed job with a great review, we ask for referrals. Customers who haven't booked in 18+ months get a win-back campaign. These aren't cold leads — they already know and trust you." },
      ]}
      sourcePage="repeat-customers"
    />
  );
}
