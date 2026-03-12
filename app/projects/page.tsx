// app/projects/page.tsx

export const metadata = {
  title: "Projects · Marko Moilanen",
  description:
    "Selected case studies in human-centered design, UX evaluation, digital product development, and ecosystem-level research.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Selected Case Studies</h1>

        <p className="mt-6 max-w-3xl leading-relaxed text-neutral-300">
          A selection of projects showing how I work across human-centered
          design, UX evaluation, research-driven development, and
          ecosystem-level framing. These cases range from commercial platform
          development to broader research and infrastructure initiatives.
        </p>

        <div className="mt-12 grid gap-8">
          {/* Case 1 — Powergrip (Flagship) */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Case Study</p>
              <h2 className="mt-1 text-xl font-semibold">
                Meaning-Centered Transformation of a Commercial Sports Platform
              </h2>
              <p className="mt-1 text-neutral-400">Powergrip Web Platform</p>
            </header>

            <div className="mt-5 space-y-5 leading-relaxed text-neutral-300">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  A leading disc golf retailer in Europe operating in a rapidly
                  evolving sports ecosystem, seeking clearer alignment between
                  organizational values, platform features, and community needs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  Product development required a clearer shared direction across
                  the organization, the web platform, and the disc golf
                  community.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <p className="mt-1">
                  Applied the HCI-Ikigai framework to identify mutual meaning
                  across stakeholders. The resulting strategic axis became{" "}
                  <span className="font-semibold text-neutral-100">
                    “Sharing Disc Golf Knowledge.”
                  </span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Outcomes</p>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Organizational alignment:
                    </span>{" "}
                    Shared meaning reframed internal discussions and product
                    direction.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Behavioral segmentation:
                    </span>{" "}
                    Identified different user orientations, including both
                    quick-pleasure and deeper meaning-driven engagement.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Feature logic:
                    </span>{" "}
                    Embedded knowledge-sharing elements such as player data and
                    reviews to support better disc selection.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Evaluation innovation:
                    </span>{" "}
                    Introduced post-release monitoring and social media feedback
                    loops after major releases.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Impact</p>
                <p className="mt-1">
                  Helped shift the platform’s long-term direction from a
                  primarily transactional webshop toward a more knowledge-driven
                  ecosystem actor serving both customers and the disc golf
                  community.
                </p>
              </div>
            </div>
          </article>

          {/* Case 2 — Evaluation */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Case Study</p>
              <h2 className="mt-1 text-xl font-semibold">
                Research-Based Evaluation in HCI and Digital Product Development
              </h2>
            </header>

            <div className="mt-5 space-y-5 leading-relaxed text-neutral-300">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  Multiple usability and UX evaluation engagements across
                  research and commercial environments, including roles as both
                  responsible researcher and client coordinating external
                  evaluation teams.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  Evaluation is often treated as a late-stage checklist rather
                  than as an ongoing function guiding product evolution and
                  decision-making.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    Led usability and UX evaluation projects for real case
                    companies.
                  </li>
                  <li>
                    Conducted user testing sessions and heuristic evaluations.
                  </li>
                  <li>
                    Coordinated multi-cycle external UX assessments as a client.
                  </li>
                  <li>
                    Integrated structured evaluation processes into development
                    workflows.
                  </li>
                  <li>
                    Expanded post-release monitoring and feedback channels.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Extended Evaluation Lens
                </p>
                <p className="mt-1">
                  Building on the HCI-Ikigai framework, evaluation can extend
                  beyond usability toward stakeholder values, motivational
                  differences, and longer-term system implications.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Impact</p>
                <p className="mt-1">
                  Strengthened decision-making through clearer problem
                  identification, structured feedback loops, and better
                  alignment between user experience, organizational intent, and
                  product direction.
                </p>
              </div>
            </div>
          </article>

          {/* Case 3 — SportsHCI Lab */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Ongoing Initiative</p>
              <h2 className="mt-1 text-xl font-semibold">
                Building a SportsHCI Lab Pilot Environment
              </h2>
              <p className="mt-1 text-neutral-400">University of Oulu</p>
            </header>

            <div className="mt-5 space-y-5 leading-relaxed text-neutral-300">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  A pilot initiative to create a dedicated SportsHCI research
                  and experimentation environment at the University of Oulu,
                  with an initial focus on disc golf and sports technology.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  Sports technology research often lacks a concrete physical
                  environment where digital systems, athlete experience, data
                  collection, and stakeholder collaboration can be brought
                  together in practice.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Current Work</p>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    Developing the lab concept, identity, and practical use
                    cases.
                  </li>
                  <li>
                    Planning infrastructure for pilot research, testing, and
                    stakeholder collaboration.
                  </li>
                  <li>
                    Framing the space as a bridge between academic research,
                    sports technology development, and real-world field
                    contexts.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Relevance</p>
                <p className="mt-1">
                  The initiative reflects my broader approach: not only
                  evaluating systems, but also building the environments,
                  structures, and collaborations needed for meaningful long-term
                  development.
                </p>
              </div>
            </div>
          </article>

          {/* Case 4 — Humanity-Centered Ecosystem Design */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Case Study</p>
              <h2 className="mt-1 text-xl font-semibold">
                Humanity-Centered Design at Ecosystem Scale
              </h2>
            </header>

            <div className="mt-5 space-y-5 leading-relaxed text-neutral-300">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  Complex digital transformation environments where multiple
                  stakeholders, long-term societal implications, and ethical
                  alignment must be considered together.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    Mapped stakeholder systems using micro–meso–macro analysis.
                  </li>
                  <li>Identified value tensions across ecosystem actors.</li>
                  <li>
                    Used DIKW framing to clarify data, information, knowledge,
                    and wisdom layers.
                  </li>
                  <li>
                    Developed humanity-centered design principles for long-term
                    system alignment.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Ethical AI Translation
                </p>
                <p className="mt-1">
                  Applied humanity-centered thinking to AI ethics through the AI
                  Conscience initiative, exploring how ethical guidance and
                  meaning-centered principles can be translated into AI system
                  design.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Scope</p>
                <p className="mt-1">
                  Focused on ecosystem-level challenges involving multiple
                  stakeholders, long-term consequences, and systemic complexity
                  rather than isolated interface-level design alone.
                </p>
              </div>
            </div>
          </article>
        </div>

        <p className="mt-16 max-w-3xl leading-relaxed text-neutral-300">
          These projects reflect different layers of my work, from digital
          product evaluation and commercial platform development to broader
          ecosystem framing and research infrastructure building. If your
          organization is working through a similarly complex design or
          evaluation challenge, consulting collaboration may be a useful next
          step.
        </p>

        <div className="mt-8">
          <a
            href="/consulting"
            className="block rounded-xl border border-neutral-700 px-6 py-3 text-center font-medium hover:bg-neutral-900 sm:inline-block"
          >
            Explore consulting
          </a>
        </div>
      </section>
    </main>
  );
}
