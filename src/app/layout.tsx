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

        <footer className="site-footer-big">
          <div className="footer-inner">

            {/* Brand + CTA column */}
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <Image src="/service-automation-logo.svg" alt={siteConfig.name} width={180} height={90} className="footer-logo-img" />
              </a>
              <p className="footer-tagline">{siteConfig.tagline}</p>
              <a href="/signup" className="footer-cta-btn">Get early access →</a>
              <p className="footer-cta-note">No credit card. No contract. Cancel anytime.</p>
            </div>

            {/* Products column */}
            <div className="footer-col">
              <h3 className="footer-col-heading">Products</h3>
              <ul>
                <li><a href="/never-miss-a-call">Automated Call Answering</a></li>
                <li><a href="/smart-scheduling">Customer Tracking</a></li>
                <li><a href="/automated-follow-up">Customer Relationship Builder</a></li>
                <li><a href="/reputation">Review &amp; Reputation</a></li>
                <li><a href="/repeat-customers">Repeat Customers</a></li>
                <li><a href="/business-intelligence">Business Intelligence</a></li>
                <li><a href="/back-office">Back Office</a></li>
                <li><a href="/website-optimization">Website Optimization</a></li>
              </ul>
            </div>

            {/* Company column */}
            <div className="footer-col">
              <h3 className="footer-col-heading">Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/value">The Value</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </ul>
            </div>

            {/* Legal column */}
            <div className="footer-col">
              <h3 className="footer-col-heading">Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>{siteConfig.footer}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
