import { generatePageMetadata } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

export const metadata = generatePageMetadata({
  title: "Back Office Automation for Home Services",
  description: "Invoicing, payment reminders, and daily summaries — handled automatically. Stop doing paperwork at 9pm.",
  path: "/back-office",
  keywords: ["contractor invoicing automation", "home services back office", "automatic invoice sending", "payment reminder contractor"],
});

export default function BackOffice() {
  return (
    <LandingPage
      hero={{ headline: "The paperwork that eats your nights? Gone.", subhead: "Invoices, payment reminders, daily recaps — the stuff you do at 9pm after a full day of real work. What if it just happened on its own?" }}
      sections={[
        { heading: "Invoices that send themselves", body: "Job's done? The invoice goes out automatically. Clean, professional, with all the details. No sitting down at your kitchen table after dinner to type up invoices." },
        { heading: "Payment follow-up without the awkwardness", body: "Invoice sent but not paid after a week? A polite, professional reminder goes out. \"Just a quick reminder about the invoice from last week's driveway wash. Let us know if you have any questions.\" No chasing. No uncomfortable phone calls." },
        { heading: "Your daily pulse, every evening", body: "Every night, a summary hits your phone: jobs completed today, total revenue, new leads captured, reviews received, upcoming schedule for tomorrow. In 30 seconds you know exactly where your business stands. That's the kind of clarity most business owners never get." },
      ]}
      sourcePage="back-office"
    />
  );
}
