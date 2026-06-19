import LeadForm from "./LeadForm";
import { Hero, Section, FAQ } from "./ui";

interface LandingSection {
  heading: string;
  body: string; // supports multiple paragraphs separated by \n\n
}

interface LandingPageProps {
  hero: { headline: string; subhead: string };
  sections: LandingSection[];
  faqs?: { question: string; answer: string }[];
  sourcePage: string;
}

export default function LandingPage({ hero, sections, faqs, sourcePage }: LandingPageProps) {
  return (
    <main>
      <Hero
        headline={hero.headline}
        subhead={hero.subhead}
        cta={{ href: "#signup", label: "Get early access" }}
      />

      {sections.map((section, i) => (
        <Section key={i}>
          <h2>{section.heading}</h2>
          {section.body.split("\n\n").map((p, j) => <p key={j}>{p}</p>)}
        </Section>
      ))}

      {faqs && faqs.length > 0 && <FAQ items={faqs} />}

      <section className="cta-section">
        <LeadForm sourcePage={sourcePage} compact />
      </section>
    </main>
  );
}
