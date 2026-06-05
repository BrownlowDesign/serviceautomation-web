import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "How Service Automation collects, uses, and protects your information.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <main>
      <section className="hero">
        <h1>Privacy Policy</h1>
        <p className="hero-subhead">Last updated: May 29, 2026</p>
      </section>

      <section className="content-section">
        <h2>Who we are</h2>
        <p>
          Service Automation (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides custom
          operations systems for home services businesses. This policy explains what
          information we collect, how we use it, and how we protect it. We believe in
          being straightforward — no legalese, no fine print tricks.
        </p>
      </section>

      <section className="content-section">
        <h2>What we collect</h2>

        <p><strong>When you fill out our interest form:</strong></p>
        <p>
          We collect your name, email address, business type, and any information you
          voluntarily share about your business (such as your answer to &quot;what&apos;s
          slipping through the cracks&quot;). We also record which page you submitted the
          form from so we understand what brought you to us.
        </p>

        <p><strong>When you become a customer:</strong></p>
        <p>
          We collect the business information needed to set up and run your system —
          your business name, contact details, service offerings, pricing ranges,
          service area, and working hours. We also process call recordings, call
          transcripts, and text messages that flow through the system as part of
          delivering our service to you.
        </p>

        <p><strong>End customer data:</strong></p>
        <p>
          When your customers interact with the system (calling your business line,
          receiving text messages or emails), we collect their name, phone number, email
          address, property address, and details about the services they&apos;re
          requesting. This data is collected and processed solely to provide our service
          to your business.
        </p>

        <p><strong>Automatically collected information:</strong></p>
        <p>
          When you visit our website, we may collect basic technical information such as
          your IP address, browser type, and which pages you visited. We do not use
          tracking cookies or third-party analytics tools that follow you around the
          internet.
        </p>
      </section>

      <section className="content-section">
        <h2>How we use your information</h2>
        <p>We use the information we collect to:</p>
        <p>
          Respond to your interest form submissions and communicate with you about our
          services. Set up and operate your custom business system, including answering
          calls, sending follow-up messages, booking appointments, requesting reviews,
          and sending service reminders on your behalf. Improve and maintain the
          reliability of our systems. Send you important updates about your account or
          our service.
        </p>
        <p>
          That&apos;s it. We do not use your information for any other purpose.
        </p>
      </section>

      <section className="content-section">
        <h2>What we do NOT do with your information</h2>
        <p>
          We do not sell, rent, trade, or share your personal information or your
          customers&apos; information with third parties for marketing purposes. We do not
          send you unsolicited marketing emails. We do not use your business data or
          your customers&apos; data to benefit any other customer or business. We do not
          share your data with advertisers. We do not build advertising profiles from
          your information.
        </p>
      </section>

      <section className="content-section">
        <h2>Service providers we use</h2>
        <p>
          To deliver our service, we use a small number of trusted third-party tools.
          These providers process data solely on our behalf and are contractually
          prohibited from using it for their own purposes:
        </p>
        <p>
          <strong>Voice processing:</strong> We use a voice platform to handle inbound
          phone calls. Call audio is processed to generate transcripts and is not used
          for any purpose beyond delivering our service.
        </p>
        <p>
          <strong>Messaging:</strong> We use a messaging platform to send and receive
          text messages and emails on behalf of your business (appointment
          confirmations, follow-ups, review requests, and reminders).
        </p>
        <p>
          <strong>AI processing:</strong> We use AI language models to extract
          information from call transcripts and generate natural-sounding messages. The
          data sent to these models is used solely for processing and is not retained by
          the AI provider for training or other purposes.
        </p>
        <p>
          <strong>Hosting:</strong> Our systems run on secure, dedicated servers. Your
          data is not stored on shared consumer cloud platforms.
        </p>
      </section>

      <section className="content-section">
        <h2>Data security</h2>
        <p>
          We take reasonable measures to protect your information, including encrypted
          connections (HTTPS/TLS) for all data in transit, secure server infrastructure,
          and access controls that limit who can view your data. No system is 100%
          secure, but we take this seriously and continuously work to protect your
          information.
        </p>
      </section>

      <section className="content-section">
        <h2>Data retention</h2>
        <p>
          We retain your data for as long as you are an active customer and for a
          reasonable period afterward in case you return. If you ask us to delete your
          data, we will do so within 30 days, except where we are legally required to
          retain it. Interest form submissions are retained until you ask us to remove
          them.
        </p>
      </section>

      <section className="content-section">
        <h2>Your rights</h2>
        <p>
          You have the right to request access to the personal information we hold about
          you, request correction of any inaccurate information, request deletion of
          your information, and withdraw from our communications at any time. To
          exercise any of these rights, contact us at the email address below.
        </p>
      </section>

      <section className="content-section">
        <h2>California residents</h2>
        <p>
          If you are a California resident, you have additional rights under the
          California Consumer Privacy Act (CCPA), including the right to know what
          personal information we collect and how it is used, the right to request
          deletion of your personal information, and the right to opt out of the sale of
          your personal information. We do not sell personal information.
        </p>
      </section>

      <section className="content-section">
        <h2>Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. If we make significant
          changes, we will notify you by email or by posting a notice on our website. The
          &quot;last updated&quot; date at the top of this page reflects the most recent
          revision.
        </p>
      </section>

      <section className="content-section">
        <h2>Contact us</h2>
        <p>
          If you have questions about this privacy policy or how we handle your
          information, contact us at privacy@serviceautomation.pro.
        </p>
      </section>
    </main>
  );
}