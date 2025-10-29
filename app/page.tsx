export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/60 px-4 py-2 text-sm">
          <span className="size-2 rounded-full bg-emerald-400" />
          X-Centered Design
        </div> */}

        <section className="mx-auto max-w-4xl px-6 py-24 text-left">
          {/* Main Title */}
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            X-Centered Design
          </h1>

          {/* Subtitle / Motto */}
          <p className="mt-4 text-lg sm:text-2xl italic text-emerald-400 font-medium leading-relaxed max-w-3xl">
            We circle and value what we love
          </p>

          {/* Personal Letter */}
          <div className="mt-8 max-w-2xl mx-auto text-lg text-neutral-300 leading-relaxed">
            <p>Dear reader,</p>
            <p className="mt-3">
              Welcome to my exploration of{" "}
              <strong>Human–Computer Interaction (HCI)</strong> through the
              dimensions of <strong>X-Centered Design (XCD)</strong> — a way of
              understanding design not only as function or process, but as a
              living and dynamic interplay circling the core we value most.
            </p>
            <p className="mt-3">
              Here, I share reflections, cases, and theories drawn from my
              research and experience — aiming to uncover foundational
              principles and express higher values, currently through sports
              applications and digital transformation.
            </p>
            <p className="mt-6 text-right text-neutral-400">— Marko Moilanen</p>
          </div>
        </section>

        <div className="mt-8 flex gap-4">
          <a
            href="/xs"
            className="rounded-xl bg-emerald-500 px-5 py-3 font-medium text-neutral-950 hover:bg-emerald-400"
          >
            Read the latest Xs
          </a>
          <a
            href="/cases"
            className="rounded-xl border border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-900"
          >
            Explore Cases
          </a>
        </div>
      </section>

      {/* // ...keeping the hero above */}

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">
          Interested in collaboration, speaking, or research?
        </p>
        <form
          className="mt-6 grid gap-3 max-w-xl"
          method="post"
          action="/api/contact"
        >
          <input
            name="name"
            placeholder="Your name"
            className="rounded-md bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="rounded-md bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800"
            required
          />
          <input
            name="topic"
            placeholder="Topic"
            className="rounded-md bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            className="rounded-md bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800"
            required
          />
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <button className="mt-2 w-fit rounded-lg bg-emerald-500 px-6 py-3 font-medium text-neutral-950 hover:bg-emerald-400">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
