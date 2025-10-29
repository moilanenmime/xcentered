export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Quote */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-200">
              X-Centered Design
            </h3>
            <p className="mt-3 text-sm sm:text-base italic text-emerald-400">
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
                  className="hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Marko-Moilanen-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a
                  href="https://www.oulu.fi/fi/tutkijat/marko-moilanen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
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
                  className="hover:text-emerald-400 transition-colors"
                >
                  Xs — Dimensions
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cases
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 border-t border-neutral-800/50 pt-6 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-300">X-Centered Design</span> · Marko
            Moilanen
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Crafted with reflection, coffee, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
