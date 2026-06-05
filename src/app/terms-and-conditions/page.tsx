import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using Service Automation.",
  path: "/terms-and-conditions",
});

export default function Terms() {
  return (
    <main>
      <section className="hero">
        <h1>Terms of Service</h1>
        <p className="hero-subhead">Last updated: May 29, 2026</p>
      </section>

      <section className="content-section">
        <h2>Agreement to terms</h2>
        <p>
          By accessing our website at serviceautomation.pro or using our services,
          you agree to be bound by these terms of service. If you do not agree with
          any part of these terms, you may not use our services.
        </p>
      </section>

      <section className="content-section">
        <h2>Description of service</h2>
        <p>
          Service Automation (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) builds and
          manages custom operations systems for home services businesses. Our services
          may include automated call handling, lead capture, appointment scheduling,
          quote follow-up, review management, customer outreach, and business
          reporting. The specific services provided to each customer are defined during
          onboarding and may vary based on business needs.
        </p>
      </section>

      <section className="content-section">
        <h2>Interest form submissions</h2>
        <p>
          By submitting an interest form on our website, you consent to being
          contacted by us regarding our services. You may opt out of communications at
          any time by contacting us at hello@serviceautomation.pro. Submitting the
          form does not obligate you to purchase any service.
        </p>
      </section>

      <section className="content-section">
        <h2>Customer accounts and responsibilities</h2>
        <p>
          As a customer, you are responsible for providing accurate and complete
          information about your business during onboarding, including services
          offered, pricing, service area, and working hours. You are responsible for
          ensuring you have the right to use any business name, phone number, and
          email address you provide to us. You agree to notify us promptly of any
          changes to your business information that may affect the operation of your
          system.
        </p>
        <p>
          You are responsible for reviewing the performance of your system and
          providing feedback so we can optimize it for your business. We are not
          responsible for business outcomes, including but not limited to revenue,
          customer acquisition, or customer satisfaction, though we work diligently to
          help improve these.
        </p>
      </section>

      <section className="content-section">
        <h2>Communications sent on your behalf</h2>
        <p>
          Our system sends communications (phone calls, text messages, and emails) to
          your customers on your behalf. By using our service, you authorize us to
          send these communications using your business name and contact information.
          You are responsible for ensuring that your customers have consented to
          receive communications from your business in accordance with applicable laws,
          including the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act.
        </p>
        <p>
          We make reasonable efforts to ensure all communications are professional,
          accurate, and consistent with the information you provide. However, as
          communications may be generated with the assistance of AI, occasional errors
          may occur. You agree to monitor system activity and notify us of any issues.
        </p>
      </section>

      <section className="content-section">
        <h2>Call recording and transcription</h2>
        <p>
          Our service may record and transcribe phone calls made to your business
          line. You are responsible for complying with all applicable federal and state
          laws regarding call recording, including obtaining any required consent from
          callers. In states that require two-party consent (such as California), you
          agree to include appropriate notification in your phone greeting or to
          instruct us to include such notification in the automated greeting.
        </p>
      </section>

      <section className="content-section">
        <h2>Data ownership</h2>
        <p>
          You own your business data and your customer data. We process this data
          solely to provide our services to you. If you terminate your account, you
          may request an export of your data. Upon termination, we will delete your
          data within 30 days of your request, except where we are legally required to
          retain it.
        </p>
        <p>
          We may use aggregated, anonymized data (which cannot identify you or your
          customers) to improve our services and understand usage patterns.
        </p>
      </section>

      <section className="content-section">
        <h2>Payment terms</h2>
        <p>
          Payment terms, including pricing, billing frequency, and accepted payment
          methods, will be agreed upon before service begins. Unless otherwise
          specified, services are billed monthly in advance. Late payments may result
          in suspension of services after reasonable notice. We reserve the right to
          adjust pricing with 30 days&apos; written notice.
        </p>
      </section>

      <section className="content-section">
        <h2>Service availability</h2>
        <p>
          We strive to maintain high availability of our systems but do not guarantee
          100% uptime. We are not liable for service interruptions caused by
          third-party platform outages, internet connectivity issues, scheduled
          maintenance (for which we will provide reasonable notice), or circumstances
          beyond our reasonable control.
        </p>
      </section>

      <section className="content-section">
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Service Automation shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages, including but not limited to loss of revenue, lost profits, loss of
          business, or loss of data, arising from your use of our services.
        </p>
        <p>
          Our total liability for any claim arising from or related to our services
          shall not exceed the total amount you paid to us in the three months
          preceding the claim.
        </p>
      </section>

      <section className="content-section">
        <h2>Termination</h2>
        <p>
          Either party may terminate the service relationship with 30 days&apos;
          written notice. Upon termination, we will cease all automated communications
          on your behalf and provide you with an export of your data upon request. Any
          outstanding fees remain due upon termination.
        </p>
      </section>

      <section className="content-section">
        <h2>Intellectual property</h2>
        <p>
          We retain ownership of all systems, software, prompts, workflows, and
          processes we develop as part of our service. You retain ownership of your
          business data, brand assets, and customer relationships. The custom
          configuration created for your business (system prompts, pricing rules,
          workflow settings) is considered part of our service delivery and is not
          transferable.
        </p>
      </section>

      <section className="content-section">
        <h2>Governing law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws
          of the State of California, without regard to its conflict of law
          provisions. Any disputes arising under these terms shall be resolved in the
          courts of Alameda County, California.
        </p>
      </section>

      <section className="content-section">
        <h2>Changes to terms</h2>
        <p>
          We reserve the right to update these terms at any time. If we make material
          changes, we will notify you by email or by posting a notice on our website
          at least 30 days before the changes take effect. Your continued use of our
          services after the changes take effect constitutes acceptance of the revised
          terms.
        </p>
      </section>

      <section className="content-section">
        <h2>Contact us</h2>
        <p>
          If you have questions about these terms, contact us at
          hello@serviceautomation.pro.
        </p>
      </section>
    </main>
  );
}
