interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  label?: string;
}

export function FAQ({ items, label = "Common questions" }: FAQProps) {
  return (
    <section className="faq-section">
      <h2>{label}</h2>
      {items.map((item, i) => (
        <details key={i}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
