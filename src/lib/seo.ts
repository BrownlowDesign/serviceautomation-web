import { Metadata } from "next";
import { siteConfig } from "./config";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "home services",
      "service business automation",
      "contractor",
      siteConfig.name,
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

// JSON-LD structured data for each landing page
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  areaServed: string = "United States"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed,
  };
}
