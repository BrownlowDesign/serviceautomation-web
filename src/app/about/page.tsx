import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About",
  description: "Service Automation is a one-person business helping home services owners spend less time chasing and more time doing what they're good at.",
  path: "/about",
});

export default function About() {
  return (
    <main>
      <section className="hero">
        <h1>About Service Automation</h1>
      </section>

      <section className="about-intro">
        <div className="about-photo">
          <img src="/ryan.png" alt="Ryan, founder of Service Automation" />
        </div>
        <div className="about-text">
          <p>
            Service Automation is a one-person business, just like many of yours.
            I&apos;m Ryan — I live in the East Bay, I have a family, and I spend my
            days solving problems for people who are too busy doing great work to
            deal with everything else that comes with running a business.
          </p>
          <p>
            I&apos;m not a tech company with a sales team and a call center. I&apos;m
            a guy who&apos;s spent 25 years building tools that make people&apos;s
            work easier — and I got tired of watching small business owners lose
            money to missed calls, forgotten follow-ups, and customers who never came
            back. Not because they&apos;re bad at what they do, but because there&apos;s
            only so many hours in a day and you can&apos;t do everything yourself.
          </p>
          <p>
            So I built something that handles the stuff you don&apos;t have time for.
            Every system I build is custom — because your business isn&apos;t like
            anyone else&apos;s, and cookie-cutter software doesn&apos;t work for people
            who take pride in what they do. I sit down with you, learn how your
            business actually runs, and build something that fits. If it doesn&apos;t
            work, I fix it. If it does, you&apos;ll wonder how you ran without it.
          </p>
        </div>
      </section>

      <section className="about-callout">
        <p>
          My goal is simple: help small business owners spend less time chasing
          and more time doing what they&apos;re good at.
        </p>
      </section>
    </main>
  );
}
