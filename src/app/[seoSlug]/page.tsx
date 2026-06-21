import seoPages from "@/lib/seo-pages.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

type SeoPage = {
  slug: string;
  title: string;
  meta_description: string;
  hero: string;
  subhead: string;
  sections?: { heading: string; body: string }[];
  faqs?: { question: string; answer: string }[];
  // Industry-specific fields
  industry?: string;
  industry_specific?: string;
  common_services?: string[];
  seasonal_notes?: string;
};

function getAllPages(): SeoPage[] {
  const all: SeoPage[] = [];
  for (const p of seoPages.problem_pages) all.push(p);
  for (const p of seoPages.industry_pages) all.push(p);
  for (const p of seoPages.solution_pages) all.push(p);
  return all;
}

function getPage(slug: string): SeoPage | undefined {
  return getAllPages().find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return getAllPages().map((p) => ({ seoSlug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoSlug: string }>;
}): Promise<Metadata> {
  const { seoSlug } = await params;
  const page = getPage(seoSlug);
  if (!page) return { title: "Not Found" };

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.meta_description,
  };
}

export default async function SeoPage({
  params,
}: {
  params: Promise<{ seoSlug: string }>;
}) {
  const { seoSlug } = await params;
  const page = getPage(seoSlug);
  if (!page) notFound();

  const faqJsonLd = page.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <main>
        <section className="hero">
          <h1>{page.hero}</h1>
          <p className="hero-subhead">{page.subhead}</p>
          <div className="hero-actions">
            <a href="/#signup" className="cta-button">
              I&apos;m interested
            </a>
            <a href="tel:+15102828598" className="cta-secondary">
              Talk to Ryan
            </a>
          </div>
        </section>

        {page.industry_specific && (
          <section className="content-section">
            <h2>{page.industry} Operations, Handled</h2>
            <p>{page.industry_specific}</p>
          </section>
        )}

        {page.common_services && (
          <section className="content-section">
            <h2>Built for {page.industry} Services</h2>
            <div className="services-list">
              {page.common_services.map((svc, i) => (
                <div key={i} className="service-item">
                  <span className="check">✓</span>
                  <span>{svc}</span>
                </div>
              ))}
            </div>
            {page.seasonal_notes && (
              <p className="seasonal-note">{page.seasonal_notes}</p>
            )}
          </section>
        )}

        {page.sections?.map((section, i) => (
          <section key={i} className="content-section">
            <h2>{section.heading}</h2>
            {section.body.split("\n\n").map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
          </section>
        ))}

        {page.faqs && page.faqs.length > 0 && (
          <section className="content-section faq-section">
            <h2>Common Questions</h2>
            {page.faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
        )}

        <section className="cta-bottom">
          <h2>Ready to stop leaving money on the table?</h2>
          <p>
            We&apos;re working with a small group of home services businesses
            right now. If this sounds like what you need, let&apos;s talk.
          </p>
          <div className="hero-actions">
            <a href="/#signup" className="cta-button">
              I&apos;m interested
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
