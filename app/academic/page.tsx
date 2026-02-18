// app/academic/page.tsx

export const metadata = {
  title: "Academic · Marko Moilanen",
  description:
    "Overview of my academic research focus, publications, and supervision.",
};

export default function AcademicPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Academic</h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          I am a doctoral researcher at the University of Oulu. My research sits
          at the intersection of Human–Computer Interaction (HCI), Information
          Systems (IS), and digital transformation, with a focus on meaning- and
          humanity-centered design in real-world ecosystems.
        </p>

        <div className="mt-12 grid gap-8">
          {/* Research Focus */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <h2 className="text-xl font-semibold">Research Focus</h2>
            <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-2">
              <li>
                Meaning- and existence-centered design in HCI (HCI-Ikigai)
              </li>
              <li>
                Humanity-centered design at ecosystem scale (stakeholders, value
                tensions, long-term consequences)
              </li>
              <li>
                SportsHCI and disc golf as a living ecosystem for studying
                digital transformation in practice
              </li>
              <li>
                Evaluation as system intelligence (usability, UX, and
                meaning-level alignment)
              </li>
              <li>
                Ethical AI design and operationalizing value-based guidance (AI
                Conscience)
              </li>
            </ul>
          </article>

          {/* Research Questions */}
          {/* <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <h2 className="text-xl font-semibold">Research Questions</h2>
            <ol className="mt-4 list-decimal pl-6 text-neutral-300 space-y-2">
              <li>
                What are the foundational design principles for human- and
                meaning-centered design in SportsHCI?
              </li>
              <li>
                How can a human- and meaning-centered design framework be formed
                and applied in SportsHCI?
              </li>
              <li>
                How do digital transformation processes and long-term design
                practices shape and validate the framework and principles in
                real-world SportsHCI applications?
              </li>
              <li>
                (Optional) How can the integration of design principles,
                frameworks, and stakeholder insights contribute to a theory of
                meaning-centered design in HCI?
              </li>
            </ol>
          </article> */}

          {/* Publications */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <h2 className="text-xl font-semibold">Publications</h2>

            <p className="mt-3 text-neutral-300 leading-relaxed">
              Peer-reviewed publications in Human–Computer Interaction (HCI) and
              SportsHCI.
            </p>

            <div className="mt-6 space-y-6 text-neutral-300">
              {/* Paper 1 */}
              <div>
                <p className="font-medium text-neutral-100">
                  Guidelines for Disc Golf Applications and Design Principles
                  for SportsHCI: A Human-Centered Approach
                </p>
                <p className="mt-1 text-sm text-neutral-400">ACM Publication</p>
                <a
                  href="https://dl.acm.org/doi/10.1145/3701571.3701584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm underline hover:text-neutral-200"
                >
                  https://doi.org/10.1145/3701571.3701584
                </a>
              </div>

              {/* Paper 2 */}
              <div>
                <p className="font-medium text-neutral-100">
                  Defining HCI-Ikigai: Designing for Existence and Meaning in
                  Human-Centered Design
                </p>
                <p className="mt-1 text-sm text-neutral-400">ACM Publication</p>
                <a
                  href="https://dl.acm.org/doi/10.1145/3757980.3758008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm underline hover:text-neutral-200"
                >
                  https://doi.org/10.1145/3757980.3758008
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://scholar.google.com/citations?user=LvZRVucAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-neutral-200 underline-offset-4 hover:underline"
                >
                  View full publication list on Google Scholar
                </a>
              </div>
            </div>
          </article>

          {/* Supervision */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <h2 className="text-xl font-semibold">Student Supervision</h2>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              I occasionally supervise master’s thesis projects, especially when
              the topic connects to SportsHCI, digital transformation,
              evaluation, or meaning- and humanity-centered design.
            </p>

            <p className="mt-4 text-neutral-300 leading-relaxed">
              Currently, I am exploring master’s thesis collaboration
              opportunities in partnership with the Finnish Disc Golf Federation
              (SFL).
            </p>

            <div className="mt-6">
              <a
                href="mailto:marko.i.moilanen@oulu.fi"
                className="inline-block rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900"
              >
                Contact about thesis opportunities
              </a>
            </div>
          </article>

          {/* CV */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <h2 className="text-xl font-semibold">Academic CV</h2>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              For an up-to-date academic CV (including publications,
              supervising, and funding information), please contact me.
            </p>

            <div className="mt-6">
              <a
                href="mailto:marko.i.moilanen@oulu.fi"
                className="inline-block rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900"
              >
                Request CV
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
