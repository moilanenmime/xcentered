export const metadata = {
  title: "Privacy · X-Centered Design",
  description: "What data this site collects and why.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-24 prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          This site is operated by Marko Moilanen for personal research and
          professional communication. I aim to keep data collection minimal,
          transparent, and GDPR-friendly.
        </p>

        <h2>What I collect</h2>
        <ul>
          <li>
            <strong>Contact form:</strong> name, email, topic, message. No
            account is created.
          </li>
          <li>
            <strong>Basic analytics:</strong> anonymous page views and referrers
            collected via Vercel Analytics (no cookies).
          </li>
        </ul>

        <h2>Why I collect it</h2>
        <ul>
          <li>
            To reply to your inquiry (legitimate interest / pre-contract
            communication).
          </li>
          <li>To understand aggregate site usage and improve content.</li>
        </ul>

        <h2>How it’s processed</h2>
        <ul>
          <li>
            <strong>Email delivery:</strong> messages are sent to my inbox via
            Resend. Your message is not stored in a site database.
          </li>
          <li>
            <strong>Hosting:</strong> the site is hosted on Vercel; standard
            server logs may be retained briefly for security and operations.
          </li>
          <li>
            <strong>Analytics:</strong> I use Vercel Analytics to collect
            aggregated, anonymous metrics (page views, referrers, basic
            geography and device information). Vercel Analytics does not use
            cookies or collect personally identifiable information; data is
            provided to me as aggregated reports and cannot be used to identify
            individual visitors. Vercel may transiently process IP addresses to
            derive coarse geographic data, but raw IPs or other identifiers are
            not exposed to me. For details, see{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Analytics privacy policy
            </a>
            .
          </li>
        </ul>

        <h2>Retention</h2>
        <p>
          Emails are kept in my mailbox as long as needed for correspondence and
          record-keeping, after which they may be archived or deleted.
        </p>

        <h2>Your rights</h2>
        <p>
          You can request access, correction, or deletion of your personal data
          at any time. Contact:{" "}
          <a href="mailto:moilanenmime@gmail.com">moilanenmime@gmail.com</a>
        </p>

        <h2>Third parties</h2>
        <ul>
          <li>Vercel (hosting, edge network & anonymous analytics)</li>
          <li>Resend (transactional email)</li>
        </ul>

        <p className="text-neutral-400">
          This page is informational and not legal advice. I keep it updated as
          the site evolves.
        </p>
      </section>
    </main>
  );
}
