// app/xs/[slug]/page.tsx

import { notFound } from "next/navigation";

type Entry = { title: string; blurb: string };
const XS: Record<string, Entry> = {
  existence: {
    title: "Existence",
    blurb: "The question of being — why we live, create, and interact.",
  },
  meaning: {
    title: "Meaning",
    blurb: "What gives value and purpose to human–technology relations.",
  },
  flow: {
    title: "Flow",
    blurb: "Harmony of challenge, skill, and presence in action.",
  },
  ethics: {
    title: "Ethics",
    blurb: "The moral compass guiding responsible design and technology.",
  },
  design: {
    title: "Design",
    blurb: "The creative act of shaping experience, form, and function.",
  },
  evaluation: {
    title: "Evaluation",
    blurb: "Assessment and reflection — understanding merit and worth.",
  },
  human: {
    title: "Human",
    blurb: "The individual perspective: body, mind, and emotion.",
  },
  user: {
    title: "User",
    blurb: "Practical engagement and usability in interaction.",
  },
  stakeholder: {
    title: "Stakeholder",
    blurb: "The social network shaping design outcomes.",
  },
  "more-than-human": {
    title: "More-than-human",
    blurb: "Ecology and interdependence beyond the human.",
  },
  humanity: {
    title: "Humanity",
    blurb: "The collective and cultural dimensions of being human.",
  },
  nature: {
    title: "Nature",
    blurb: "Connection to the natural world and sustainability.",
  },
  technology: {
    title: "Technology",
    blurb: "The evolving medium through which we extend ourselves.",
  },
  darkside: {
    title: "Darkside",
    blurb: "Shadows of design — addiction, manipulation, unintended harm.",
  },
  spiritual: {
    title: "Spiritual",
    blurb: "Transcendence, presence, and the inner search for balance.",
  },
};

// ✅ Pre-generate all routes at build time
export function generateStaticParams() {
  return Object.keys(XS).map((slug) => ({ slug }));
}

// (Optional) Nice page titles
export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = XS[params.slug];
  return {
    title: entry ? `${entry.title} · Xs` : "Xs",
    description: entry?.blurb,
  };
}

export default function XPage({ params }: { params: { slug: string } }) {
  const entry = XS[params.slug];
  if (!entry) notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <a
          href="/xs"
          className="text-sm text-neutral-400 hover:text-neutral-200"
        >
          ← All Xs
        </a>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          {entry.title}
        </h1>
        <p className="mt-3 text-neutral-300">{entry.blurb}</p>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-neutral-300">
          <p className="text-sm">
            Posts tagged <strong>{entry.title}</strong> will appear here. (Next:
            switch to MDX and filter by frontmatter.)
          </p>
        </div>
      </section>
    </main>
  );
}
