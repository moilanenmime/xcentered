"use client";
import { useMemo, useState } from "react";

type X = {
  name: string;
  slug: string;
  blurb: string;
  ring: "core" | "practice" | "who" | "world";
};

const XS: X[] = [
  {
    name: "Existence",
    slug: "existence",
    blurb: "The question of being — why we live, create, and interact.",
    ring: "core",
  },
  {
    name: "Meaning",
    slug: "meaning",
    blurb: "What gives value and purpose to human–technology relations.",
    ring: "core",
  },
  {
    name: "Flow",
    slug: "flow",
    blurb: "Harmony of challenge, skill, and presence in action.",
    ring: "core",
  },
  {
    name: "Ethics",
    slug: "ethics",
    blurb: "The moral compass guiding responsible design and technology.",
    ring: "core",
  },
  {
    name: "Design",
    slug: "design",
    blurb: "The creative act of shaping experience, form, and function.",
    ring: "practice",
  },
  {
    name: "Evaluation",
    slug: "evaluation",
    blurb: "Assessment and reflection — understanding merit and worth.",
    ring: "practice",
  },
  {
    name: "Human",
    slug: "human",
    blurb: "The individual perspective: body, mind, and emotion.",
    ring: "who",
  },
  {
    name: "User",
    slug: "user",
    blurb: "Practical engagement and usability in interaction.",
    ring: "who",
  },
  {
    name: "Stakeholder",
    slug: "stakeholder",
    blurb: "The social network shaping design outcomes.",
    ring: "who",
  },
  {
    name: "More-than-human",
    slug: "more-than-human",
    blurb: "Ecology and interdependence beyond the human.",
    ring: "world",
  },
  {
    name: "Humanity",
    slug: "humanity",
    blurb: "The collective and cultural dimensions of being human.",
    ring: "world",
  },
  {
    name: "Nature",
    slug: "nature",
    blurb: "Connection to the natural world and sustainability.",
    ring: "world",
  },
  {
    name: "Technology",
    slug: "technology",
    blurb: "The evolving medium through which we extend ourselves.",
    ring: "world",
  },
  {
    name: "Darkside",
    slug: "darkside",
    blurb: "Shadows of design — addiction, manipulation, unintended harm.",
    ring: "world",
  },
  {
    name: "Spiritual",
    slug: "spiritual",
    blurb: "Transcendence, presence, and the inner search for balance.",
    ring: "world",
  },
];

const RINGS: Array<{ key: X["ring"]; title: string }> = [
  { key: "core", title: "Core (Why)" },
  { key: "practice", title: "Practice (How)" },
  { key: "who", title: "Relations (Who)" },
  { key: "world", title: "World (What & Beyond)" },
];

export default function XsPage() {
  const [active, setActive] = useState<X | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!filter) return XS;
    return XS.filter((x) => x.slug === filter);
  }, [filter]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Xs — Dimensions
          </h1>
          <p className="mt-3 text-neutral-300">
            Click any dimension to see its definition, filter posts, or open its
            SEO page.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            className={`rounded-full border px-3 py-1 text-sm ${
              !filter
                ? "border-emerald-500 text-emerald-400"
                : "border-neutral-700 text-neutral-300 hover:border-neutral-600"
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {XS.map((x) => (
            <button
              key={x.slug}
              className={`rounded-full border px-3 py-1 text-sm ${
                filter === x.slug
                  ? "border-emerald-500 text-emerald-400"
                  : "border-neutral-700 text-neutral-300 hover:border-neutral-600"
              }`}
              onClick={() => setFilter(x.slug)}
            >
              {x.name}
            </button>
          ))}
        </div>

        {/* Grouped grid */}
        <div className="mt-10 space-y-12">
          {RINGS.map(({ key, title }) => {
            const items = filtered.filter((x) => x.ring === key);
            if (items.length === 0) return null;
            return (
              <section key={key}>
                <h2 className="text-xl font-semibold text-neutral-200">
                  {title}
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((x) => (
                    <div
                      key={x.slug}
                      className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-700 hover:bg-neutral-900"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{x.name}</h3>
                        <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                          {x.ring}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-300">{x.blurb}</p>
                      <div className="mt-4 flex gap-4 text-sm">
                        <button
                          className="underline text-emerald-400/90 group-hover:text-emerald-300"
                          onClick={() => setActive(x)}
                        >
                          Definition
                        </button>
                        <a
                          className="underline text-neutral-300/90 hover:text-neutral-100"
                          href={`/xs/${x.slug}`}
                        >
                          Open page →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">{active.name}</h3>
              <button
                className="rounded-md border border-neutral-700 px-2 py-1 text-sm hover:bg-neutral-800"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mt-3 text-neutral-300">{active.blurb}</p>
            <div className="mt-6 flex gap-4">
              <button
                className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                onClick={() => {
                  setFilter(active.slug);
                  setActive(null);
                }}
              >
                Filter by this
              </button>
              <a
                href={`/xs/${active.slug}`}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400"
              >
                Open page →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
