// app/xs/page.tsx
type X = {
  name: string;
  slug: string;
  blurb: string;
  ring: "core" | "practice" | "who" | "world";
};

// master list (you can tweak blurbs anytime)
const XS: X[] = [
  // core (why)
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

  // practice (how)
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

  // who (roles/relations)
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

  // world (systems/ecologies)
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

const RING_ORDER: Array<{ key: X["ring"]; title: string }> = [
  { key: "core", title: "Core (Why)" },
  { key: "practice", title: "Practice (How)" },
  { key: "who", title: "Relations (Who)" },
  { key: "world", title: "World (What & Beyond)" },
];

export default function XsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Xs — Dimensions
          </h1>
          <p className="mt-3 text-neutral-300">
            Dimensions you can tag to each post — a semantic map of meaning,
            practice, relations, and world.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {RING_ORDER.map(({ key, title }) => {
            const items = XS.filter((x) => x.ring === key);
            return (
              <section key={key}>
                <h2 className="text-xl font-semibold text-neutral-200">
                  {title}
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((x) => (
                    <a
                      key={x.slug}
                      href={`/xs/${x.slug}`}
                      className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-700 hover:bg-neutral-900"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{x.name}</h3>
                        <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                          {x.ring}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-300">{x.blurb}</p>
                      <div className="mt-4 text-sm text-emerald-400/90 group-hover:text-emerald-300">
                        Explore →
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
