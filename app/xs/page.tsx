"use client";
import { useEffect, useMemo, useState } from "react";

type X = {
  name: string;
  slug: string;
  blurb: string;
  ring: "core" | "practice" | "who" | "world";
};

const XS: X[] = [
  // core
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
    name: "Darkside",
    slug: "darkside",
    blurb: "Shadows of design — addiction, manipulation, unintended harm.",
    ring: "core",
  },
  {
    name: "Spiritual",
    slug: "spiritual",
    blurb: "Transcendence, presence, and the inner search for balance.",
    ring: "core",
  },

  // practice
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
    name: "Value",
    slug: "value",
    blurb: "Determining importance and prioritization in design choices.",
    ring: "practice",
  },
  {
    name: "Flow",
    slug: "flow",
    blurb: "Harmony of challenge, skill, and presence in action.",
    ring: "practice",
  },
  {
    name: "Ethics",
    slug: "ethics",
    blurb: "The moral compass guiding responsible design and technology.",
    ring: "practice",
  },
  // who
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
  // world
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
];

const RINGS: Array<{ key: X["ring"]; title: string }> = [
  { key: "core", title: "Core (Why)" },
  { key: "practice", title: "Practice (How)" },
  { key: "who", title: "Relations (Who)" },
  { key: "world", title: "World (What & Beyond)" },
];

// Placeholder posts until MDX is wired.
// Each post has xs: string[] matching the slugs above.
const DEMO_POSTS = [
  {
    title: "Where design meets existence",
    href: "/xs/meaning",
    xs: ["meaning", "existence", "design"],
  },
  {
    title: "Designing for flow in sports apps",
    href: "#",
    xs: ["flow", "human", "technology"],
  },
  {
    title: "Evaluation as meaning-making",
    href: "#",
    xs: ["evaluation", "meaning"],
  },
  {
    title: "Conscience for AI",
    href: "#",
    xs: ["ethics", "technology", "humanity"],
  },
  {
    title: "More-than-human disc golf",
    href: "#",
    xs: ["more-than-human", "nature", "human"],
  },
];

export default function XsPage() {
  const [active, setActive] = useState<X | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  // Lock background scroll when modal is open (mobile-friendly)
  useEffect(() => {
    const original = document.body.style.overflow;
    if (active) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);

  const filteredPosts = useMemo(() => {
    if (!filter) return DEMO_POSTS;
    return DEMO_POSTS.filter((p) => p.xs.includes(filter));
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
            type="button"
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
              type="button"
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

        {/* Grouped grid of dimensions */}
        <div className="mt-10 space-y-12">
          {RINGS.map(({ key, title }) => {
            const items = XS.filter((x) => x.ring === key);
            return (
              <section key={key}>
                <h2 className="text-xl font-semibold text-neutral-200">
                  {title}
                </h2>
                <div className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((x) => (
                    <div
                      key={x.slug}
                      className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-700 hover:bg-neutral-900"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-medium">{x.name}</h3>
                        <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                          {x.ring}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-300">{x.blurb}</p>
                      <div className="mt-4 flex gap-4 text-sm">
                        <button
                          type="button"
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

        {/* Posts section */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-200">
              {filter
                ? `Posts tagged: ${XS.find((x) => x.slug === filter)?.name}`
                : "Latest posts"}
            </h2>
            {filter && (
              <button
                type="button"
                onClick={() => setFilter(null)}
                className="text-sm text-neutral-300 underline hover:text-neutral-100"
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="mt-3 text-neutral-400">
              No posts match this dimension yet.
            </p>
          ) : (
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {filteredPosts.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5"
                >
                  <a
                    className="text-lg font-medium hover:underline"
                    href={p.href}
                  >
                    {p.title}
                  </a>
                  <p className="mt-2 text-sm text-neutral-400">
                    Dimensions:{" "}
                    {p.xs
                      .map((s) => XS.find((x) => x.slug === s)?.name || s)
                      .join(" • ")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full sm:max-w-lg sm:rounded-2xl border-t sm:border border-neutral-800 bg-neutral-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">{active.name}</h3>
              <button
                type="button"
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
                type="button"
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
