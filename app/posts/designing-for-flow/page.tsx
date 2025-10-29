import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function DesigningForFlowPost() {
  const post = getPostBySlug("designing-for-flow");

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <article className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/xs"
          className="text-sm text-neutral-400 hover:text-neutral-200"
        >
          ← Back to posts
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-400">
            <time>{post.date}</time>
            <span>{post.readingTime}</span>
            <span>{post.category}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.xs.map((x) => (
              <Link
                key={x}
                href={`/xs/${x}`}
                className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300 hover:border-emerald-500 hover:text-emerald-400"
              >
                {x}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-lg text-neutral-300">{post.summary}</p>
        </header>

        {/* Cover image if present */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="mt-8 w-full rounded-lg"
          />
        )}

        {/* Post content */}
        <div className="prose prose-invert mt-12 max-w-none">
          <h1 className="text-3xl font-bold">
            Designing for Flow in Sports Apps
          </h1>

          <p className="text-lg leading-relaxed">
            Intro paragraph…{" "}
            <em>
              (write freely in regular JSX; you can style with Tailwind classes)
            </em>
          </p>

          <h2 className="mt-12 text-2xl font-semibold">Key ideas</h2>
          <ul className="mt-4 space-y-2">
            <li>Challenge–skill balance</li>
            <li>Clear goals and immediate feedback</li>
            <li>Attention shaping & ethical nudging</li>
          </ul>

          <p className="mt-8">
            <em>(You can add images like this if present in /public/images)</em>
          </p>

          {/* References */}
          {post.references && (
            <>
              <h2 className="mt-12 text-2xl font-semibold">References</h2>
              <ul className="mt-4">
                {post.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      className="text-emerald-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
    </main>
  );
}
