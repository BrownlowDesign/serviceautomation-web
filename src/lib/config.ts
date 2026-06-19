// Site configuration — change the name here once you pick one
// and it updates everywhere across the site.

export const siteConfig = {
  name: "Service Automation",  // ← Change this when you pick a name
  tagline: "Do the work. Count the money. We handle everything else.",
  description:
    "We build custom systems that run your customer operations — calls, quotes, follow-ups, reviews, and repeat bookings — so you can focus on doing great work.",
  url: "https://serviceautomation.pro", // ← Update with real domain
  apiUrl: "https://api.serviceautomation.pro", // ← Your FastAPI backend
  footer: "Built for people who are great at the work — and tired of everything else.",
};

export const navLinks = [
  { href: "/never-miss-a-call", label: "Never Miss a Call" },
  { href: "/automated-follow-up", label: "Close More Quotes" },
  { href: "/smart-scheduling", label: "Smart Scheduling" },
  { href: "/reputation", label: "Reputation" },
  { href: "/repeat-customers", label: "Repeat Customers" },
  { href: "/business-intelligence", label: "Know Your Numbers" },
  { href: "/pricing", label: "Pricing" },
];

// Form fields for lead capture
export const businessTypes = [
  "Pressure Washing",
  "Window Cleaning",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Roofing",
  "General Contracting",
  "Cleaning / Janitorial",
  "Other",
];
