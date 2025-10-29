export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Grid Layout: single column by default, 2 cols at sm, 3 at lg */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Quote */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-200">
              X-Centered Design
            </h3>
            <p className="mt-2 text-sm italic text-emerald-400 leading-tight">
              We circle and value what we love.
            </p>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 mb-3 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/marko-moilanen-hcd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Marko-Moilanen-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a
                  href="https://www.oulu.fi/fi/tutkijat/marko-moilanen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  University of Oulu
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 mb-3 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/xs"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  Xs — Dimensions
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  Cases
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="inline-block hover:text-emerald-400 transition-colors break-words"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider — smaller gap and centered compact layout for small screens */}
        <div className="mt-6 sm:mt-8 border-t border-neutral-800/50 pt-4 sm:pt-6">
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()}{" "}
              <span className="text-neutral-300">X-Centered Design</span> ·
              Marko Moilanen
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Crafted with reflection, coffee, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
