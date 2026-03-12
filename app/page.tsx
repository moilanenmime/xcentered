import Image from "next/image";

export const metadata = {
  title:
    "Marko Moilanen — Human-Centered Design and Evaluation | University of Oulu",
  description:
    "Doctoral researcher at the University of Oulu providing research-based human-centered design and evaluation for digital products and services.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-24">
        {/* ROW 1 — Name + Image */}
        <div className="relative grid items-center gap-12 md:grid-cols-2 md:min-h-[336px] md:sm:min-h-[416px]">
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
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
            <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
              <Image
                src="/images/Marko.jpg"
                alt="Marko Moilanen, doctoral researcher at the University of Oulu"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
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

            <p className="mt-6 max-w-xl text-lg font-medium italic leading-relaxed text-emerald-400 sm:text-lg">
              Human-Centered Design and Evaluation
            </p>

            <p className="text-sm text-neutral-500">
              Doctoral Researcher · University of Oulu
            </p>
          </div>

          <div className="hidden md:block" aria-hidden="true" />
        </div>

        {/* ROW 2 — Text + Buttons centered */}
        <div className="mx-auto mt-10 max-w-3xl text-left text-lg leading-relaxed text-neutral-300 sm:mt-20">
          <p>
            I offer selected consulting in human-centered design and evaluation
            alongside my academic research. My work helps startups, product
            teams, and digital organizations identify usability issues, clarify
            user and stakeholder needs, and make more informed design decisions.
            Typical outcomes include research-based evaluation reports,
            workshops, and practical recommendations for product development.
          </p>

          {/* AI/SEO clarity block */}
          {/* <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h2 className="text-base font-semibold text-neutral-100">
              Focus, outputs, and methods
            </h2>

            <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-neutral-400">Focus</dt>
                <dd className="mt-1 text-neutral-200">
                  Human–Computer Interaction (HCI), human-centered design, UX
                  and usability evaluation, stakeholder understanding
                </dd>
              </div>

              <div>
                <dt className="text-neutral-400">Typical outputs</dt>
                <dd className="mt-1 text-neutral-200">
                  Evaluation reports, expert reviews, usability findings,
                  workshop recommendations, and research-informed design
                  direction
                </dd>
              </div>

              <div>
                <dt className="text-neutral-400">Methods</dt>
                <dd className="mt-1 text-neutral-200">
                  Heuristic evaluation, usability testing, interviews, surveys,
                  stakeholder analysis, and facilitated workshops
                </dd>
              </div>
            </dl>
          </div> */}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <a
              href="/consulting"
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-center font-medium text-neutral-950 hover:bg-emerald-400 sm:w-auto"
            >
              Consulting Services
            </a>
            <a
              href="/projects"
              className="w-full rounded-xl border border-neutral-700 px-6 py-3 text-center font-medium hover:bg-neutral-900 sm:w-auto"
            >
              Selected Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
