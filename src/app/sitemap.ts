import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/never-miss-a-call",
    "/automated-follow-up",
    "/smart-scheduling",
    "/reputation",
    "/repeat-customers",
    "/business-intelligence",
    "/back-office",
  ];

  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
