export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/60 px-4 py-2 text-sm">
          <span className="size-2 rounded-full bg-emerald-400" />
          X-Centered Design
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
          Where design meets existence
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">
          Exploring what truly lies at the center of human experience — meaning,
          humanity, and sport.
        </p>

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
      // ...keep your hero above
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
