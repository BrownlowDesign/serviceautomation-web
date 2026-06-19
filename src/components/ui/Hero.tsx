interface HeroProps {
  headline: string;
  subhead: string;
  eyebrow?: string;
  cta?: { href: string; label: string };
  note?: string;
}

export function Hero({ headline, subhead, eyebrow, cta, note }: HeroProps) {
  return (
    <section className="hero">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{headline}</h1>
      <p className="hero-subhead">{subhead}</p>
      {cta && <a href={cta.href} className="hero-cta">{cta.label}</a>}
      {note && <p className="hero-note">{note}</p>}
    </section>
  );
}
