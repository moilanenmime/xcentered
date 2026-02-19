// app/consulting/page.tsx

export const metadata = {
  title: "Advisory & Consulting · Marko Moilanen",
  description:
    "Selected advisory collaborations for humanity-centered digital initiatives - when stakeholder complexity, human value, and long-term sustainability require conceptual clarity and structured evaluation.",
};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Advisory & Consulting</h1>

        <p className="mt-6 text-neutral-300">
          Alongside my academic research, I engage in selected advisory
          collaborations where digital initiatives require conceptual clarity,
          structured evaluation, or humanity-centered direction. By
          humanity-centered, I mean designing and evaluating systems so that
          human dignity, real stakeholder needs, and long-term societal
          consequences are not treated as afterthoughts.
        </p>

        <p className="mt-4 text-neutral-300">
          My work focuses on situations where technological development,
          stakeholder complexity, and human value intersect — and where the path
          forward is not yet clearly articulated.
        </p>

        <h2 className="mt-12 text-xl font-semibold">
          When I Typically Get Involved
        </h2>

        <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-4">
          <li>
            <strong>Strategic System Clarification:</strong> When a project,
            platform, or transformation initiative feels conceptually
            unclear—and needs structured mapping of stakeholders, values, system
            boundaries, and decision trade-offs.
          </li>

          <li>
            <strong>Humanity-Centered Evaluation:</strong> When an existing
            digital system needs more than usability checking, such as
            assessment of value tensions, ethical risks, meaning, and long-term
            sustainability implications.
          </li>

          <li>
            <strong>Research-Informed Direction:</strong> When exploring new
            products, services, or frameworks that require conceptual modeling,
            rigorous evaluation logic, and alignment with humanity-centered
            principles.
          </li>
        </ul>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
          <h2 className="text-base font-semibold text-neutral-100">
            Typical focus areas
          </h2>

          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-neutral-400">Domains</dt>
              <dd className="mt-1 text-neutral-200">
                HCI/UX, digital transformation, sports technology, digital
                platforms
              </dd>
            </div>
            <div>
              <dt className="text-neutral-400">Core lens</dt>
              <dd className="mt-1 text-neutral-200">
                Human value, stakeholder tensions, ethics, sustainability
              </dd>
            </div>
            <div>
              <dt className="text-neutral-400">Formats</dt>
              <dd className="mt-1 text-neutral-200">
                Workshops, evaluations, advisory sprints, research–industry
                collaboration
              </dd>
            </div>
          </dl>
        </div>

        <h2 className="mt-12 text-xl font-semibold">
          What an Engagement May Produce
        </h2>

        <p className="mt-4 text-neutral-300">
          Depending on the case, an engagement may produce stakeholder maps,
          system and value-tension models, evaluation plans and findings,
          reframed design directions, or research-informed strategic
          recommendations.
        </p>

        <h2 className="mt-12 text-xl font-semibold">Engagement Model</h2>

        <p className="mt-4 text-neutral-300">
          Engagements may range from focused workshops and short evaluations to
          longer advisory collaborations. I work selectively and in alignment
          with my doctoral research schedule, typically supporting initiatives
          where meaningful impact and intellectual rigor are both valued.
        </p>

        <p className="mt-4 text-neutral-300">
          Recent collaborations have included work in sports technology, digital
          platforms, and research–industry partnerships.
        </p>

        {/* Start a Conversation */}
        <div className="mt-14 mx-auto max-w-3xl rounded-2xl bg-neutral-950/40 ring-1 ring-neutral-800 p-5 sm:p-8">
          <h2 className="text-xl font-semibold">Start a Conversation</h2>

          <p className="mt-4 text-neutral-300 leading-relaxed">
            I work selectively, typically supporting initiatives where
            meaningful impact and intellectual rigor are both valued.
            Engagements range from focused workshops and short evaluations to
            longer advisory collaborations.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="mailto:marko.i.moilanen@oulu.fi"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900"
            >
              Send an introduction
            </a>

            <a
              href="/projects"
              className="text-sm text-neutral-400 hover:text-neutral-200 underline-offset-4 hover:underline"
            >
              View selected work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
