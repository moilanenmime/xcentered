import Image from "next/image";

export const metadata = {
  title:
    "Marko Moilanen — Humanity-Centered Systems Architect (HCI, Digital Transformation) | University of Oulu",
  description:
    "Doctoral researcher at the University of Oulu. I design and evaluate digital systems through a humanity-centered lens, clarifying stakeholder tensions, human value, and long-term sustainability.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-24">
        {/* ROW 1 — Name + Image */}
        <div className="relative grid gap-12 items-center md:grid-cols-2 md:min-h-[336px] md:sm:min-h-[416px]">
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-neutral-950/50 to-transparent" />
              <Image
                src="/images/Marko.jpg"
                alt="Marko Moilanen, doctoral researcher at the University of Oulu"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:hidden">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900">
              <Image
                src="/images/Marko.jpg"
                alt="Marko Moilanen, doctoral researcher at the University of Oulu"
                width={900}
                height={1100}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 md:ml-[50px]">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Marko
              <br />
              Moilanen
            </h1>

            <p className="mt-6 text-lg sm:text-l italic text-emerald-400 font-medium leading-relaxed max-w-xl">
              Humanity-Centered Systems Architect
            </p>
            {/* Credibility Anchor */}
            <p className=" text-sm text-neutral-500">
              Doctoral researcher, University of Oulu
            </p>
          </div>

          <div className="hidden md:block" aria-hidden="true" />
        </div>

        {/* ROW 2 — Text + Buttons centered */}
        <div className="mt-10 sm:mt-20 max-w-3xl mx-auto text-lg text-neutral-300 leading-relaxed text-left">
          <p>
            I engage in selected advisory collaborations alongside my academic
            research. I clarify complex digital initiatives where human value,
            stakeholder tensions, and technological development intersect.
            Typical outcomes include structured evaluation, conceptual clarity,
            and research-informed direction.
          </p>

          {/* AI/SEO clarity block */}
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h2 className="text-base font-semibold text-neutral-100">
              Focus, outputs, and methods
            </h2>

            <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-neutral-400">Focus</dt>
                <dd className="mt-1 text-neutral-200">
                  Human–Computer Interaction (HCI), humanity-centered systems
                  thinking, digital transformation, stakeholder tensions
                </dd>
              </div>

              <div>
                <dt className="text-neutral-400">Typical outputs</dt>
                <dd className="mt-1 text-neutral-200">
                  Evaluation plans and reports, stakeholder maps, conceptual
                  models, research-informed roadmaps
                </dd>
              </div>

              <div>
                <dt className="text-neutral-400">Methods</dt>
                <dd className="mt-1 text-neutral-200">
                  Interviews, surveys, qualitative analysis, design science
                  research, facilitated workshops
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <a
              href="/consulting"
              className="w-full sm:w-auto text-center rounded-xl bg-emerald-500 px-6 py-3 font-medium text-neutral-950 hover:bg-emerald-400"
            >
              How I Can Help
            </a>
            <a
              href="/projects"
              className="w-full sm:w-auto text-center rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900"
            >
              Selected Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
