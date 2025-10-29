"use client";
import { useEffect, useMemo, useState } from "react";

/* ---------- Types ---------- */
type X = {
  name: string;
  slug: string;
  blurb: string;
  ring: "core" | "practice" | "who" | "world";
};

type PostMeta = {
  title: string;
  href: string; // e.g. /posts/designing-for-flow
  date: string; // ISO
  xs: string[]; // dimension slugs
  summary?: string;
  coverImage?: string;
  readingTime?: string;
  // you can add: status, featured, category, references... if you render them
};

/* ---------- Dimensions (definitions for modal) ---------- */
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

/* ---------- Helpers ---------- */
function getX(slug: string): X | undefined {
  return XS.find((x) => x.slug === slug);
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

/* ---------- Page ---------- */
export default function XsPage() {
  const [active, setActive] = useState<X | null>(null); // modal dimension
  const [filter, setFilter] = useState<string | null>(null); // selected dimension slug
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch real posts from /api/posts
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" });
        const data = (await res.json()) as PostMeta[];
        if (mounted) setPosts(data);
      } catch {
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Lock background scroll when modal is open (mobile-friendly)
  useEffect(() => {
    const original = document.body.style.overflow;
    if (active) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);

  const filteredPosts = useMemo(() => {
    if (!filter) return posts;
    return posts.filter((p) => p.xs?.includes(filter));
  }, [posts, filter]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-24">
        {/* Title + intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Xs</h1>
          <p className="mt-3 text-neutral-300">
            Each X represents a unique dimension through which we explore the
            world of HCI. Like falling in love, we begin to circle and value the
            chosen X — yet our love can both illuminate and distort. Browse the
            posts by selecting a dimension below.
          </p>
        </div>

        {/* Filters */}
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

        {/* Posts */}
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

          {loading ? (
            <p className="mt-3 text-neutral-400">Loading…</p>
          ) : filteredPosts.length === 0 ? (
            <p className="mt-3 text-neutral-400">
              No posts match this dimension yet.
            </p>
          ) : (
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {filteredPosts.map((p) => (
                <li
                  key={p.href}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5"
                >
                  {/* Optional cover image */}
                  {p.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.coverImage}
                      alt=""
                      className="mb-3 h-36 w-full rounded-xl object-cover"
                    />
                  )}

                  {/* Date + reading time */}
                  <div className="text-xs text-neutral-400">
                    {formatDate(p.date)}
                    {p.readingTime ? ` · ${p.readingTime}` : null}
                  </div>

                  {/* Title → opens the post */}
                  <a
                    className="mt-1 block text-lg font-medium hover:underline"
                    href={p.href}
                  >
                    {p.title}
                  </a>

                  {/* Summary (optional) */}
                  {p.summary && (
                    <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
                  )}

                  {/* Dimension chips: open modal with definition + link to page */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.xs?.map((slug) => {
                      const x = getX(slug);
                      if (!x) return null;
                      return (
                        <button
                          key={`${p.href}-${slug}`}
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
