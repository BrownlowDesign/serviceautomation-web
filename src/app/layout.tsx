import type { Metadata } from "next";
import { siteConfig, navLinks } from "@/lib/config";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header className="site-header">
          <nav>
            <a href="/" className="site-logo">
              {siteConfig.name}
            </a>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
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
