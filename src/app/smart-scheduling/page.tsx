import { generatePageMetadata } from "@/lib/seo";
import LandingPage from "@/components/LandingPage";

export const metadata = generatePageMetadata({
  title: "Smart Scheduling That Runs Itself",
  description: "Automatic booking, confirmations, reminders, and weather-aware rescheduling. Your schedule runs itself so you can focus on the work.",
  path: "/smart-scheduling",
  keywords: ["contractor scheduling software", "automatic appointment booking", "home services scheduling", "job scheduling HVAC plumber"],
});

export default function SmartScheduling() {
  return (
    <LandingPage
      hero={{ headline: "A schedule that runs itself.", subhead: "Booking, confirmations, reminders, and rescheduling — all handled. No more phone tag, no more no-shows, no more scrambling when the weather changes." }}
      sections={[
        { heading: "Booked and confirmed instantly", body: "When a customer books an estimate or a job, they get a professional confirmation email immediately. You get a text with the details. No back-and-forth, no missed messages." },
        { heading: "Reminders that prevent no-shows", body: "The day before every appointment, your customer gets a reminder. You get a morning summary of the day's schedule with addresses and job details so you can plan your route.\n\nNo-shows drop dramatically when customers get a friendly reminder the night before." },
        { heading: "Weather-aware rescheduling", body: "Rain in the forecast for your outdoor jobs? The system flags it, suggests a reschedule, and — with your approval — texts the customer proactively. \"Looks like rain Thursday. Can we move you to Friday morning?\"\n\nThis saves you from scrambling and makes your business look incredibly professional. Your competitors are calling customers at 6am to cancel. You handled it last night." },
        { heading: "End-of-day and morning summaries", body: "Every morning: today's schedule with addresses and job details. Every evening: jobs completed, revenue earned, new leads captured, reviews received. The pulse of your business, delivered to your phone." },
      ]}
      sourcePage="smart-scheduling"
    />
  );
}
