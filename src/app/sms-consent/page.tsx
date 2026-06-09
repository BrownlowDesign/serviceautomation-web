"use client";

import { useState } from "react";

export default function SmsConsent() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    smsConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "declined">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.smsConsent) return;
    setStatus("submitting");

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          businessType: formData.businessName,
          smsConsent: true,
          sourcePage: "sms-consent",
          submittedAt: new Date().toISOString(),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <main>
        <section className="hero">
          <h1>You&apos;re all set.</h1>
          <p className="hero-subhead">
            You&apos;ll receive text updates about new leads, appointment bookings,
            and daily summaries. Reply STOP at any time to opt out.
          </p>
        </section>
      </main>
    );
  }

  if (status === "declined") {
    return (
      <main>
        <section className="hero">
          <h1>No problem.</h1>
          <p className="hero-subhead">
            You won&apos;t receive text messages. All notifications will be sent
            to your email instead.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <h1>Turn on text notifications</h1>
        <p className="hero-subhead">
          Get instant text alerts when new leads come in, appointments are booked,
          and daily summaries of your business activity. Never miss a lead because
          you didn&apos;t check your email.
        </p>
      </section>

      <section className="content-section">
        <form onSubmit={handleSubmit} className="lead-form">
          <div className="lead-form-fields">
            <label className="form-label">
              Your name
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </label>

            <label className="form-label">
              Business name
              <input
                type="text"
                placeholder="e.g. Bay Area Pressure Pros"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </label>

            <label className="form-label">
              Mobile phone number
              <input
                type="tel"
                placeholder="(510) 555-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </label>

            <div className="consent-section">
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                />
                <span>
                  I agree to receive SMS text messages from Service Automation
                  regarding new leads, appointment bookings, customer activity, and
                  daily business summaries. Message frequency varies (approximately
                  1-10 messages per day depending on call volume). Message and data
                  rates may apply. Reply STOP to opt out at any time. Reply HELP for
                  help. Consent is not required to use our services. All notifications
                  are also available via email.
                </span>
              </label>
            </div>

            <button type="submit" disabled={status === "submitting" || !formData.smsConsent}>
              {status === "submitting" ? "Submitting..." : "Turn on text notifications"}
            </button>

            <button type="button" onClick={() => setStatus("declined")} className="decline-button">
              No thanks, email only
            </button>
          </div>
        </form>

        <div className="consent-footer">
          <p>
            Your phone number will not be shared with third parties for marketing
            or promotional purposes. Text messaging originator opt-in data and
            consent will not be shared with any third parties or affiliates for
            marketing or promotional purposes. View our{" "}
            <a href="/privacy" target="_blank">Privacy Policy</a> and{" "}
            <a href="/terms-and-conditions" target="_blank">Terms of Service</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
