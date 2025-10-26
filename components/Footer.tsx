export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} X-Centered Design · Marko Moilanen</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>
            <a href="https://www.researchgate.net/" target="_blank">
              ResearchGate
            </a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
