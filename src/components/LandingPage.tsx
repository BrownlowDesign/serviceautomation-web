import LeadForm from "./LeadForm";

interface LandingSection {
  heading: string;
  body: string; // Can include multiple paragraphs separated by \n\n
}

interface LandingPageProps {
  hero: {
    headline: string;
    subhead: string;
  };
  sections: LandingSection[];
  faqs?: { question: string; answer: string }[];
  sourcePage: string;
}

export default function LandingPage({ hero, sections, faqs, sourcePage }: LandingPageProps) {
  return (
    <main>
      <section className="hero">
        <h1>{hero.headline}</h1>
        <p className="hero-subhead">{hero.subhead}</p>
        <a href="#signup" className="hero-cta">
          Get early access
        </a>
      </section>

      {sections.map((section, i) => (
        <section key={i} className="content-section">
          <h2>{section.heading}</h2>
          {section.body.split("\n\n").map((paragraph, j) => (
            <p key={j}>{paragraph}</p>
          ))}
        </section>
      ))}

      {faqs && faqs.length > 0 && (
        <section className="faq-section">
          <h2>Common questions</h2>
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      )}

      <section className="cta-section">
        <LeadForm sourcePage={sourcePage} />
      </section>
    </main>
  );
}
