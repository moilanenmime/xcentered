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

// Placeholder posts until MDX is wired (xs: slugs)
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

function getX(slug: string): X | undefined {
  return XS.find((x) => x.slug === slug);
}

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
      <section className="mx-auto max-w-4xl px-6 py-24">
        {/* Title + intro (unchanged) */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Xs — Dimensions
          </h1>
          <p className="mt-3 text-neutral-300">
            Click any dimension to see its definition or filter posts.
          </p>
        </div>

        {/* Filters (keep these) */}
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

        {/* Latest posts only (no dimension cards) */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-200">
              {filter ? `Posts tagged: ${getX(filter)?.name}` : "Latest posts"}
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
                  {/* Post title opens the post */}
                  <a
                    className="text-lg font-medium hover:underline"
                    href={p.href}
                  >
                    {p.title}
                  </a>

                  {/* Dimension chips: open modal with definition + link to page */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.xs.map((slug) => {
                      const x = getX(slug);
                      if (!x) return null;
                      return (
                        <button
                          key={slug}
                          type="button"
                          className="rounded-full border border-neutral-700 px-2.5 py-1 text-xs text-neutral-300 hover:border-neutral-600 hover:text-emerald-300"
                          onClick={() => setActive(x)}
                          aria-label={`Open ${x.name} definition`}
                          title={`Open ${x.name} definition`}
                        >
                          {x.name}
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Modal for dimension definitions */}
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

            <div className="mt-6 flex gap-3">
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
