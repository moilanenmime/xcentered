export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-400">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} X-Centered Design · Marko Moilanen
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {/* Academic Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 sm:justify-start">
              <a
                href="https://www.linkedin.com/in/marko-moilanen-hcd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.researchgate.net/profile/Marko-Moilanen-2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                ResearchGate
              </a>
              <a
                href="https://www.oulu.fi/fi/tutkijat/marko-moilanen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                University
              </a>
            </div>

            {/* Privacy Link */}
            <div className="flex justify-center sm:justify-start">
              <a
                href="/privacy"
                className="hover:text-neutral-200 transition-colors border-t border-neutral-700 pt-3 sm:border-none sm:pt-0"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
