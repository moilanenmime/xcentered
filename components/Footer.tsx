import { Linkedin, BookOpen, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Top: 3 columns on lg, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Quote */}
          <div className="">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-200">
              X-Centered Design
            </h3>
            <p className="mt-2 text-sm italic text-emerald-400 leading-snug">
              We circle and value what we love.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 mb-3 uppercase tracking-wider">
              Connect
            </h3>

            {/* social icons only */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/marko-moilanen-hcd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded hover:bg-neutral-900/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Linkedin size={18} className="text-emerald-400" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://www.researchgate.net/profile/Marko-Moilanen-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
                className="inline-flex items-center justify-center w-9 h-9 rounded hover:bg-neutral-900/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <BookOpen size={18} className="text-emerald-400" />
                <span className="sr-only">ResearchGate</span>
              </a>

              <a
                href="https://www.oulu.fi/en/researchers/marko-moilanen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="University of Oulu"
                className="inline-flex items-center justify-center w-9 h-9 rounded hover:bg-neutral-900/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Globe size={18} className="text-emerald-400" />
                <span className="sr-only">University of Oulu</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="">
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 mb-3 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider (fix class name) */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" />

        {/* Bottom bar: centered on all sizes */}
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-4 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-300">X-Centered Design</span> · Marko
            Moilanen
          </p>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Crafted with reflection, coffee, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
