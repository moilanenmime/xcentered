// app/consulting/page.tsx

export const metadata = {
  title: "Consulting · Marko Moilanen",
  description:
    "Research-based human-centered design and evaluation for digital products and services. Typical projects include UX evaluation reports, expert reviews, workshops, and practical recommendations.",
};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold max-w-3xl mx-auto">
          Human-Centered Design and Evaluation
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl mx-auto">
          Alongside my academic research, I offer selected consulting in
          research-based human-centered design and evaluation. I support
          startups, product teams, and digital organizations that want to better
          understand users, evaluate digital products, and make more informed
          design decisions.
        </p>

        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          My work is especially useful when a team needs an external evaluator,
          clearer user understanding, or structured insight into usability,
          stakeholder needs, and product direction.
        </p>

        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          As a doctoral researcher in Human–Computer Interaction, I provide a
          research-based and independent perspective on the evaluation of
          digital products and human-centered design.
        </p>

        {/* <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
          <h2 className="text-base font-semibold text-neutral-100">
            About my consulting
          </h2>

          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-neutral-400">Focus</dt>
              <dd className="mt-1 text-neutral-200">
                Human–Computer Interaction (HCI), human-centered design, UX and
                usability evaluation, stakeholder understanding
              </dd>
            </div>

            <div>
              <dt className="text-neutral-400">Typical outputs</dt>
              <dd className="mt-1 text-neutral-200">
                Evaluation reports, expert reviews, usability findings, workshop
                recommendations, and research-informed design direction
              </dd>
            </div>

            <div>
              <dt className="text-neutral-400">Collaboration</dt>
              <dd className="mt-1 text-neutral-200">
                Remote internationally or on-site by agreement, depending on the
                project and scope
              </dd>
            </div>
          </dl>
        </div> */}

        {/* <h2 className="mt-12 text-xl font-semibold max-w-2xl mx-auto">
          What I Offer
        </h2> */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-semibold text-neutral-100">
              Research-Based UX / HCD Evaluation
            </h3>

            <p className="mt-3 text-neutral-300">
              I evaluate digital products, concepts, and interfaces through a
              research-based human-centered lens. Depending on the case, this
              may include UX expert review, heuristic evaluation, usability
              testing, stakeholder analysis, user surveys, or other suitable
              evaluation methods.
            </p>

            <p className="mt-4 text-neutral-300">
              Typical outcomes include a clear view of usability issues, user
              and stakeholder needs, and practical recommendations for product
              development.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-semibold text-neutral-100">
              Human-Centered Design Workshops
            </h3>

            <p className="mt-3 text-neutral-300">
              I facilitate workshops that help teams clarify users,
              stakeholders, design challenges, and development direction.
              Workshops can support product planning, concept development,
              evaluation preparation, or broader human-centered design work.
            </p>

            <p className="mt-4 text-neutral-300">
              Depending on the case, workshops may include stakeholder mapping,
              scenario work, user-centered framing, and structured discussion
              around design priorities and risks.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-semibold max-w-3xl mx-auto">
          When I Can Help
        </h2>

        <ul className="mt-4 list-disc space-y-4 pl-6 text-neutral-300 max-w-3xl mx-auto">
          <li>
            A startup or product team wants an external, research-based
            evaluation of a digital product, concept, or interface.
          </li>
          <li>
            An organization needs clearer understanding of users, stakeholders,
            and usability issues before making product decisions.
          </li>
          <li>
            A team wants to reduce design risk early by bringing human-centered
            evaluation into development.
          </li>
          <li>
            A company or IT partner needs an outside consultant for UX,
            usability, or human-centered design evaluation.
          </li>
        </ul>

        <h2 className="mt-12 text-xl font-semibold max-w-3xl mx-auto">
          Deliverables
        </h2>

        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          Depending on the project, deliverables may include a UX design and
          evaluation report, expert review findings, usability test insights,
          workshop recommendations, stakeholder analysis, or more focused
          research-based guidance for product development.
        </p>

        <h2 className="mt-12 text-xl font-semibold max-w-3xl mx-auto">
          Typical Projects
        </h2>

        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          Typical projects range from <strong>2000–5000 €</strong>, depending on
          scope, methods, duration, and possible travel. Many collaborations can
          be completed within <strong>2–4 weeks</strong>, while some focused
          evaluations may be delivered faster.
        </p>

        <h2 className="mt-12 text-xl font-semibold max-w-3xl mx-auto">About</h2>

        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          I am Marko Moilanen, a doctoral researcher in Human–Computer
          Interaction at the University of Oulu. My work combines academic
          research with practical experience in human-centered design, UX and
          usability evaluation, and stakeholder analysis. Alongside my research,
          I collaborate with digital product teams to provide research-based
          insight, structured evaluation, and practical recommendations for
          product development. I also bring experience from real-world projects
          in digital services and sports technology contexts.
        </p>

        <h2 className="mt-12 text-xl font-semibold max-w-3xl mx-auto">
          How Engagements Usually Work
        </h2>

        <ol className="mt-4 space-y-3 text-neutral-300 list-decimal pl-6 max-w-3xl mx-auto">
          <li>
            <strong>Initial contact:</strong> You send a short description of
            the case by email.
          </li>
          <li>
            <strong>Short discussion:</strong> We clarify the situation in a
            brief Teams call and define the most useful evaluation approach.
          </li>
          <li>
            <strong>Proposal:</strong> I send a short proposal describing the
            scope, methods, timeline, and price.
          </li>
          <li>
            <strong>Evaluation & recommendations:</strong> The work results in a
            structured evaluation report or workshop outcomes that support
            product decisions.
          </li>
        </ol>

        {/* Start a Conversation */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-neutral-950/40 p-5 ring-1 ring-neutral-800 sm:p-8">
          <h2 className="text-xl font-semibold">Start a Conversation</h2>

          <p className="mt-4 leading-relaxed text-neutral-300">
            Most collaborations start with a short conversation about the case.
            If you have a product, concept, or evaluation challenge in mind,
            feel free to send a brief description by email. We can then arrange
            a short Teams discussion or move forward with a focused proposal if
            the situation is already clear.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="mailto:marko.i.moilanen@oulu.fi"
              className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 sm:w-auto"
            >
              Send an email
            </a>

            <a
              href="/projects"
              className="text-sm text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
            >
              View selected work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
