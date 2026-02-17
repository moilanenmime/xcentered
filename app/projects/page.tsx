// app/projects/page.tsx

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Selected Case Studies</h1>

        <p className="mt-6 max-w-3xl text-neutral-300 leading-relaxed">
          A selection of work illustrating how complex systems can be clarified,
          meaning-level frameworks translated into practical design direction,
          and organizations supported through structured evaluation and
          advisory. The cases reflect different layers of intervention:
          organizational alignment, research-driven innovation, ecosystem
          framing, and ethical translation.
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

            <div className="mt-5 space-y-5 text-neutral-300 leading-relaxed">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  A leading disc golf retailer in Europe operating within a
                  rapidly evolving sports ecosystem, seeking clearer alignment
                  between organizational values, platform features, and
                  community engagement.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  Product evolution and feature development required a shared
                  meaning-level backbone across the company organization,
                  employees, the web platform, and the disc golf community.
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
                <p className="font-semibold text-neutral-100">
                  Structural Outcomes
                </p>
                <ul className="mt-2 list-disc pl-6 space-y-2">
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
                    Identified dual user orientation—hedonic users
                    (discount-driven, quick pleasure) and eudaimonic/ikigai
                    users (deeper connection and meaning).
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Feature logic:
                    </span>{" "}
                    Embedded structured knowledge-sharing (e.g., player data and
                    reviews) to guide customers toward suitable disc choices.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-100">
                      Evaluation innovation:
                    </span>{" "}
                    Introduced post-release monitoring as a feedback loop,
                    including social media channel monitoring after major
                    releases.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Impact</p>
                <p className="mt-1">
                  Shifted the platform’s long-term design backbone from a
                  primarily transactional webshop toward a knowledge-driven
                  ecosystem actor, supporting better disc selection and
                  community value.
                </p>
              </div>
            </div>
          </article>

          {/* Case 2 — Smart Devices */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Case Study</p>
              <h2 className="mt-1 text-xl font-semibold">
                Research-Driven Framing of Smart Sports Devices
              </h2>
              <p className="mt-1 text-neutral-400">
                Disc Golf SmartMarker & Data Systems
              </p>
            </header>

            <div className="mt-5 space-y-5 text-neutral-300 leading-relaxed">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  Exploration of smart disc golf devices integrating sensor
                  data, player feedback, and training environments.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  How to translate system-level thinking (DIKW pyramid) into
                  actionable device logic that supports player learning and
                  meaningful performance feedback.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li>
                    Conceptualized SmartMarker as a DIKW-informed device
                    framework.
                  </li>
                  <li>
                    Visualized and structured feature logic for implementation.
                  </li>
                  <li>
                    Acted as client to a university student development team.
                  </li>
                  <li>
                    Guided prototype implementation and real-world
                    demonstration.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Institutional Validation
                </p>
                <p className="mt-1">
                  Presented to the Innovation Center at the University of Oulu.
                  Patent potential was identified; a strategic decision was made
                  to continue as open research to enable future academic
                  publication and collaborative development.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Extended Research Layer
                </p>
                <p className="mt-1">
                  Ongoing collection of player performance data in simulator
                  environments, aiming to publish reference datasets for players
                  and coaches (e.g., “ideal value ranges” for specific throwing
                  distances).
                </p>
              </div>
            </div>
          </article>

          {/* Case 3 — Evaluation */}
          <article className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-neutral-800">
            <header>
              <p className="text-sm text-neutral-400">Case Study</p>
              <h2 className="mt-1 text-xl font-semibold">
                Evaluation as System Intelligence in HCI & IS
              </h2>
            </header>

            <div className="mt-5 space-y-5 text-neutral-300 leading-relaxed">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  Multiple usability and UX evaluation engagements across
                  research and commercial environments, including acting both as
                  responsible researcher and as client coordinating external
                  evaluation teams.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Challenge</p>
                <p className="mt-1">
                  Evaluation is often treated as a late-stage checklist activity
                  rather than as a structured, ongoing function guiding system
                  evolution.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li>
                    Led usability and UX evaluation projects for real case
                    companies.
                  </li>
                  <li>
                    Conducted extensive user testing sessions and heuristic
                    evaluations.
                  </li>
                  <li>
                    Acted as client coordinating multi-cycle external UX
                    assessments.
                  </li>
                  <li>
                    Developed structured evaluation processes integrated into
                    development workflows.
                  </li>
                  <li>
                    Introduced post-release monitoring and expanded feedback
                    channels.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">
                  Meaning-Level Evaluation
                </p>
                <p className="mt-1">
                  Building on the HCI-Ikigai framework, evaluation extends
                  beyond usability toward assessing alignment between system
                  behavior, stakeholder values, and long-term purpose. This
                  includes identifying value tensions, motivational differences,
                  and ecosystem-level consequences.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Impact</p>
                <p className="mt-1">
                  Strengthened decision-making through structured feedback
                  loops, clearer problem identification, and alignment between
                  user experience, organizational intent, and system-level
                  direction.
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

            <div className="mt-5 space-y-5 text-neutral-300 leading-relaxed">
              <div>
                <p className="font-semibold text-neutral-100">Context</p>
                <p className="mt-1">
                  Complex digital transformation environments where stakeholder
                  ecosystems, long-term societal implications, and ethical
                  alignment must be considered simultaneously.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Intervention</p>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li>
                    Mapped stakeholder systems using micro–meso–macro (MMM)
                    analysis.
                  </li>
                  <li>Identified value tensions across ecosystem actors.</li>
                  <li>
                    Integrated DIKW-level framing to clarify data, information,
                    knowledge, and wisdom layers.
                  </li>
                  <li>
                    Developed Humanity-Centered Design principles for long-term
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
                  meaning-centered principles can be operationalized within AI
                  system design.
                </p>
              </div>

              <div>
                <p className="font-semibold text-neutral-100">Scope</p>
                <p className="mt-1">
                  Focused on ecosystem-level challenges involving multiple
                  stakeholders, long-term consequences, and systemic complexity
                  rather than isolated feature-level design.
                </p>
              </div>
            </div>
          </article>

          {/* Add other cases below... */}
        </div>

        <p className="mt-16 max-w-3xl text-neutral-300 leading-relaxed">
          These cases reflect different layers of intervention - from commercial
          platform transformation to ecosystem-level ethical design. If you are
          navigating a similarly complex initiative, structured advisory
          collaboration may be valuable.
        </p>

        <div className="mt-8">
          <a
            href="/consulting"
            className="block sm:inline-block text-center rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900"
          >
            Explore advisory collaboration
          </a>
        </div>
      </section>
    </main>
  );
}
