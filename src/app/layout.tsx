import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header className="site-header">
          <nav>
            <a href="/" className="site-logo">
              <Image src="/service-automation-logo.svg" alt={siteConfig.name} width={200} height={100} />
            </a>
            <div className="nav-links">
              <div className="nav-dropdown">
                <button className="nav-dropdown-trigger">
                  Products <span className="nav-dropdown-chevron">▾</span>
                </button>
                <div className="nav-dropdown-panel">
                  <div className="nav-dropdown-panel-inner">
                    <a href="/never-miss-a-call">Automated Call Answering</a>
                    <a href="/smart-scheduling">Customer Tracking</a>
                    <a href="/business-intelligence">Business Intelligence</a>
                    <a href="/automated-follow-up">Customer Relationship Builder</a>
                    <a href="/website-optimization">Website Optimization</a>
                  </div>
                </div>
              </div>
              <a href="/about">About Us</a>
              <a href="/pricing">Pricing</a>
              <a href="/value">The Value</a>
            </div>
            <a href="#signup" className="nav-cta">
              Get early access
            </a>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <p>{siteConfig.footer}</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
