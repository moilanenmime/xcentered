import { Linkedin, BookOpen, Globe, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Footer Grid */}

        {/* Top: 3 columns on lg, 2 on mobile, Connect/Legal side by side on mobile */}
        <div className="mx-auto w-full max-w-5xl px-6">
          <div
            className="
    grid grid-cols-2
    gap-y-8 gap-x-10
    sm:grid-cols-3
    sm:gap-x-12
    lg:grid-cols-[max-content_max-content_max-content]
    lg:justify-between
    lg:max-w-4xl
    lg:mx-auto
  "
          >
            {/* Brand & Quote (full width on mobile) */}
            <div className="col-span-2 sm:col-span-1 space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-200">
                Marko Moilanen
              </h3>

              <p className="text-sm italic text-emerald-400 leading-snug lg:whitespace-nowrap">
                Humanity-Centered Systems Architect
              </p>

              <p className="text-sm text-neutral-500 lg:whitespace-nowrap">
                Doctoral Researcher · University of Oulu
              </p>
            </div>

            {/* Connect */}
            <div className="sm:justify-self-center lg:justify-self-auto">
              <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 mb-3 uppercase tracking-wider">
                Connect
              </h3>

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

            {/* Legal */}
            <div className="sm:justify-self-center lg:justify-self-auto">
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
        </div>

        {/* Divider (fix class name) */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" />

        {/* Bottom bar: centered on all sizes */}
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-4 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-300">Marko Moilanen</span>
          </p>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Crafted with a human
            <Heart
              size={14}
              className="mx-1 inline-block -translate-y-px text-emerald-400"
              aria-hidden="true"
            />
            and vibe coding.
          </p>
        </div>
      </div>
    </footer>
  );
}
