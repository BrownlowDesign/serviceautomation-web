interface SectionProps {
  children: React.ReactNode;
  highlight?: boolean;
}

export function Section({ children, highlight }: SectionProps) {
  return (
    <section className={highlight ? "content-section highlight" : "content-section"}>
      {children}
    </section>
  );
}
