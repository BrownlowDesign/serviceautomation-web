import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const lead = await request.json();

    // Add metadata
    const enrichedLead = {
      ...lead,
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
      receivedAt: new Date().toISOString(),
    };

    // 1. Save locally as backup (JSON file, one per day)
    try {
      const date = new Date().toISOString().split("T")[0];
      const leadsDir = path.join(process.cwd(), "data", "leads");
      await fs.mkdir(leadsDir, { recursive: true });
      const filePath = path.join(leadsDir, `${date}.json`);

      let existing: unknown[] = [];
      try {
        const content = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(content);
      } catch {
        // File doesn't exist yet, start fresh
      }

      existing.push(enrichedLead);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
    } catch (e) {
      console.error("Failed to save lead locally:", e);
    }

    // 2. Forward to FastAPI backend
    try {
      await fetch(`${siteConfig.apiUrl}/api/website-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrichedLead),
      });
    } catch (e) {
      // Backend might be down — local backup has the lead
      console.error("Failed to forward lead to backend:", e);
    }

    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
