import Image from "next/image";

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
                alt="Marko Moilanen"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
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
              Strategic human-centered systems thinker
            </p>
            {/* Credibility Anchor */}
            <p className=" text-sm text-neutral-500">
              Doctoral researcher, University of Oulu
            </p>
          </div>

          <div className="hidden md:block" aria-hidden="true" />

          <div className="md:hidden">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900">
              <Image
                src="/images/Marko.jpg"
                alt="Marko Moilanen"
                width={900}
                height={1100}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ROW 2 — Text + Buttons centered */}
        <div className="mt-20 max-w-3xl mx-auto text-lg text-neutral-300 leading-relaxed text-left">
          <p>
            I engage in selected advisory collaborations alongside my academic
            research. My work focuses on clarifying complex digital initiatives
            where human value, stakeholder tensions, and technological
            development intersect. I support organizations seeking structured
            evaluation, conceptual clarity, and research-informed direction.
          </p>
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
