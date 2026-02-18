export const metadata = {
  title: "Privacy · Marko Moilanen",
  description: "What data this site collects and why.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-24 prose prose-invert">
        <h1>Privacy Policy</h1>

        <p>
          This site is operated by Marko Moilanen, based in Finland (European
          Union), for personal research and professional communication. I aim to
          keep data collection minimal, transparent, and GDPR-compliant.
        </p>
        <p>
          This site does not use cookies or similar tracking technologies for
          analytics, marketing, or profiling purposes.
        </p>

        <h2>What I collect</h2>
        <ul>
          <li>
            <strong>Direct email communication:</strong> If you choose to
            contact me via the email link on this site, your email address and
            any information you include in your message will be processed in my
            email inbox.
          </li>
          <li>
            <strong>Basic analytics:</strong> Anonymous page views and referrers
            collected via Vercel Analytics (no cookies).
          </li>
        </ul>

        <h2>Why I collect it</h2>
        <ul>
          <li>
            To respond to your message (legitimate interest / pre-contract
            communication).
          </li>
          <li>
            To understand aggregate site usage and improve content and
            structure.
          </li>
        </ul>

        <h2>How it’s processed</h2>
        <ul>
          <li>
            <strong>Email:</strong> Emails are processed within my email
            provider. No messages are stored in a website database.
          </li>
          <li>
            <strong>Hosting:</strong> The site is hosted on Vercel. Standard
            server logs may be processed temporarily for security and
            operational purposes.
          </li>
          <li>
            <strong>Analytics:</strong> I use Vercel Analytics to collect
            aggregated, anonymous metrics (page views, referrers, basic
            geography and device information). Vercel Analytics does not use
            cookies or collect personally identifiable information. Data is
            provided to me only in aggregated form and cannot be used to
            identify individual visitors. Vercel may transiently process IP
            addresses to derive coarse geographic data, but raw IP addresses are
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
          Emails are retained in my mailbox as long as necessary for
          correspondence and record-keeping. They may be archived or deleted
          when no longer needed.
        </p>

        <h2>Your rights</h2>
        <p>
          Under the EU General Data Protection Regulation (GDPR), you have the
          right to request access to, correction of, or deletion of your
          personal data. You may contact me at{" "}
          <a href="mailto:marko.i.moilanen@oulu.fi">marko.i.moilanen@oulu.fi</a>
          .
        </p>

        <h2>Third parties</h2>
        <ul>
          <li>Vercel (hosting, edge network & anonymous analytics)</li>
          <li>Your email provider (when you choose to contact me)</li>
        </ul>

        <p className="text-neutral-400">
          This page is informational and not legal advice. It is updated as the
          site evolves.
        </p>
      </section>
    </main>
  );
}
