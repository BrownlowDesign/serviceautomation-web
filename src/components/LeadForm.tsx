"use client";

import { useState } from "react";
import { businessTypes, siteConfig } from "@/lib/config";

interface LeadFormProps {
  sourcePage: string; // Which page the form is on — tracked for analytics
  compact?: boolean; // Smaller version for nav/sidebar
}

export default function LeadForm({ sourcePage, compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    headache: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", businessType: "", headache: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div id="signup" className="lead-form-success">
        <h3>You&apos;re on the list.</h3>
        <p>We&apos;ll be in touch soon. In the meantime, keep doing great work.</p>
      </div>
    );
  }

  return (
    <form id="signup" onSubmit={handleSubmit} className="lead-form">
      {!compact && (
        <>
          <h2>We&apos;re launching soon.</h2>
          <p>
            We&apos;re working with a small group of home services businesses to
            build this right. If you&apos;re tired of wearing every hat and want
            to see what&apos;s possible — leave your info.
          </p>
        </>
      )}

      <div className="lead-form-fields">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <select
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          required
        >
          <option value="">What kind of business?</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {!compact && (
          <textarea
            placeholder="What's the biggest thing slipping through the cracks? (optional)"
            value={formData.headache}
            onChange={(e) => setFormData({ ...formData, headache: e.target.value })}
            rows={3}
          />
        )}

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "I'm interested"}
        </button>
      </div>

      {status === "error" && (
        <p className="lead-form-error">
          Something went wrong. Try again or email us directly.
        </p>
      )}
    </form>
  );
}
