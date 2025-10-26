export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="/" className="font-semibold">
          X-Centered Design
        </a>
        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="/xs">Xs</a>
          <a href="/cases">Cases</a>
          <a href="/author">Author</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
