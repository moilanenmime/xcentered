// app/xs/[slug]/page.tsx

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";

const BLURBS: Record<string, string> = {
  existence: "The question of being — why we live, create, and interact.",
  meaning: "What gives value and purpose to human–technology relations.",
  flow: "Harmony of challenge, skill, and presence in action.",
  ethics: "The moral compass guiding responsible design and technology.",
  design: "The creative act of shaping experience, form, and function.",
  evaluation: "Assessment and reflection — understanding merit and worth.",
  human: "The individual perspective: body, mind, and emotion.",
  user: "Practical engagement and usability in interaction.",
  stakeholder: "The social network shaping design outcomes.",
  "more-than-human": "Ecology and interdependence beyond the human.",
  humanity: "The collective and cultural dimensions of being human.",
  nature: "Connection to the natural world and sustainability.",
  technology: "The evolving medium through which we extend ourselves.",
  darkside: "Shadows of design — addiction, manipulation, unintended harm.",
  spiritual: "Transcendence, presence, and the inner search for balance.",
};

export default function XPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  const blurb = BLURBS[params.slug];
  if (!blurb) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <a
          href="/xs"
          className="text-sm text-neutral-400 hover:text-neutral-200"
        >
          ← All Xs
        </a>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-neutral-300">{blurb}</p>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 text-neutral-300">
          <p className="text-sm">
            Posts tagged <strong>{title}</strong> will appear here. (Next step:
            switch to MDX and filter by frontmatter.)
          </p>
        </div>
      </section>
    </main>
  );
}
