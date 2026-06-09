"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    businessType: "",
    phone: "",
    email: "",
    serviceArea: "",
    termsConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsConsent) return;
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          headache: `Business: ${formData.businessName}, Area: ${formData.serviceArea}`,
          sourcePage: "signup",
          termsConsent: formData.termsConsent,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main>
        <section className="hero">
          <h1>You&apos;re all set.</h1>
          <p className="hero-subhead">
            Thanks for signing up. We&apos;ll be in touch within 24 hours to schedule
            your onboarding call and get your system set up.
          </p>
        </section>
      </main>
    );
  }

  const businessTypes = [
    "Pressure Washing",
    "Window Cleaning",
    "HVAC",
    "Plumbing",
    "Electrical",
    "Landscaping",
    "Roofing",
    "General Contracting",
    "Cleaning / Janitorial",
    "Other",
  ];

  return (
    <main>
      <section className="hero">
        <h1>Get started with Service Automation</h1>
        <p className="hero-subhead">
          Fill out the form below to sign up. We&apos;ll reach out to schedule your
          onboarding call and start building your custom system.
        </p>
      </section>

      <section className="content-section">
        <form onSubmit={handleSubmit} className="lead-form">
          <div className="lead-form-fields">
            <label className="form-label">
              Your name *
              <input
                type="text"
                placeholder="Full name"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                required
              />
            </label>

            <label className="form-label">
              Business name *
              <input
                type="text"
                placeholder="e.g. Bay Area Pressure Pros"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </label>

            <label className="form-label">
              Business type *
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                required
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="form-label">
              Phone number
              <input
                type="tel"
                placeholder="(510) 555-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </label>

            <label className="form-label">
              Email address *
              <input
                type="email"
                placeholder="you@yourbusiness.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </label>

            <label className="form-label">
              Service area
              <input
                type="text"
                placeholder="e.g. Oakland, Piedmont, Berkeley"
                value={formData.serviceArea}
                onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
              />
            </label>

            <div className="consent-section">
<label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={formData.termsConsent}
                  onChange={(e) => setFormData({ ...formData, termsConsent: e.target.checked })}
                  required
                />
                <span>
                  I agree to the{" "}
                  <a href="/terms-and-conditions" target="_blank">Terms of Service</a>{" "}
                  and have read the{" "}
                  <a href="/privacy" target="_blank">Privacy Policy</a>. *
                </span>
              </label>
            </div>

            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Sign up"}
            </button>
          </div>

          {status === "error" && (
            <p className="lead-form-error">
              Something went wrong. Please try again or contact us at hello@serviceautomation.pro.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
